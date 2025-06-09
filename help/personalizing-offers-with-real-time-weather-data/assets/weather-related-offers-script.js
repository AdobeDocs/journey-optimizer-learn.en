const apiKey = "<use your openweather api key>";

// Wait until Alloy is available
function waitForAlloy(callback, interval = 100, retries = 50) {
  if (typeof alloy === "function") {
    callback();
  } else if (retries > 0) {
    setTimeout(() => waitForAlloy(callback, interval, retries - 1), interval);
  } else {
    console.error("❌ Alloy is not available after multiple attempts.");
  }
}

function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function sendWeatherDataToAEP() {
  navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
      .then(res => res.json())
      .then(data => {
        const temp = Math.round(data.main.temp);
        const condition = data.weather[0].main;
        const city = data.name;
        const humidity = Math.round(data.main.humidity);

        document.getElementById("weatherStatus").textContent =
          `Current temperature in ${city} is ${temp}°F with ${condition}.`;

        // Trigger personalization request with weather context
        alloy("sendEvent", {
          renderDecisions: true,
          personalization: {
            surfaces: [
              "web://gbedekar489.github.io/weather/weather-offers.html#offerContainer"
            ]
          },
          xdm: {
            eventType: "decisioning.request",
            _techmarketingdemos: {
              temperature: temp,
              weatherConditions: condition,
              cityName: city
            }
          }
        }).then(response => {
          const allOffers = [];
          (response.propositions || []).forEach(p => {
            allOffers.push(...(p.items || []));
          });

          const offerDiv = document.getElementById("offerContainer");
          offerDiv.innerHTML = "";

          if (!allOffers.length) {
            offerDiv.innerHTML = "<p>No offers returned.</p>";
            return;
          }

          allOffers.forEach(item => {
            const decoded = decodeHtml(item.data?.content || "");
            const wrapper = document.createElement("div");
            wrapper.className = "offer";
            wrapper.innerHTML = decoded;
            offerDiv.appendChild(wrapper);
          });
        }).catch(err => {
          console.error("❌ Personalization failed:", err);
        });
      })
      .catch(error => {
        console.error("Failed to fetch weather data:", error);
      });
  });
}

// Start the process after Alloy is ready
waitForAlloy(sendWeatherDataToAEP);