
const apiKey = "<your_openweather_api_key";

// Wait for Alloy to load (since Adobe Launch injects it async)
function waitForAlloy(callback, interval = 100, retries = 50) {
  if (typeof alloy === "function") {
    callback();
  } else if (retries > 0) {
    setTimeout(() => waitForAlloy(callback, interval, retries - 1), interval);
  } else {
    console.error("❌ Alloy is not available after multiple attempts.");
  }
}

// Safely decode HTML content from JSON
function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Fetch weather and send context to AEP
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

        document.getElementById("weatherStatus").textContent =
          `Current temperature in ${city} is ${temp}°F with ${condition}.`;

        // Send personalization decision request
        alloy("sendEvent", {
          renderDecisions: true,
          personalization: {
            surfaces: [
              "web://gbedekar489.github.io/weather/multiple-json.html#offerContainer"
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
  const contents = item.data?.content || [];
  contents.forEach(contentItem => {
    const html = contentItem.offerText || "";
    const decoded = decodeHtml(html);
    const wrapper = document.createElement("div");
    wrapper.className = "offer";
    wrapper.innerHTML = decoded;
    offerDiv.appendChild(wrapper);
  });
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

// Run after Alloy is available
waitForAlloy(sendWeatherDataToAEP);