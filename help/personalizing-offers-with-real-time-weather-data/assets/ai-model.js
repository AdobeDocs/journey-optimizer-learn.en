
const apiKey = "02921f56f5e20476dfedbae7b43dfb58";

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
        const offerIds = [];
        const offerDiv = document.getElementById("offerContainer");
        offerDiv.innerHTML = "";

        (response.propositions || []).forEach(p => {
          const items = p.items || [];
          allOffers.push(...items);
          items.forEach(item => {
            if (item.id) offerIds.push(item.id);
          });
        });

        if (!allOffers.length) {
          offerDiv.innerHTML = "<p>No AJO offers returned.</p>";
          return;
        }

        allOffers.forEach(item => {
          let decoded = decodeHtml(item.data?.content || "");
          decoded = decoded.replace("{{item.id}}", item.id);
          const wrapper = document.createElement("div");
          wrapper.className = "offer";
          wrapper.innerHTML = decoded;

          // Attach click tracking to <a> and <button>
          wrapper.querySelectorAll("a, button").forEach(el => {
            el.addEventListener("click", () => {
              const offerId = el.getAttribute("data-offer-id") || item.id;
              console.log("Clicked element offerId:", offerId);
              alloy("sendEvent", {
                xdm: {
                  _id: generateUUID(),
                  timestamp: new Date().toISOString(),
                  eventType: "decisioning.propositionInteract",
                  _experience: {
                    decisioning: {
                      propositionEvent: {
                        interact: 1
                      },
                      involvedPropositions: [{
                        id: offerId,
                        scope: "web://gbedekar489.github.io/weather/weather-offers.html#offerContainer"
                      }]
                    }
                  }
                }
              });
            });
          });

          offerDiv.appendChild(wrapper);
        });

        // Send impression tracking event
        if (offerIds.length > 0) {
          alloy("sendEvent", {
            xdm: {
              _id: generateUUID(),
              timestamp: new Date().toISOString(),
              eventType: "decisioning.propositionDisplay",
              _experience: {
                decisioning: {
                  propositionEvent: {
                    display: 1
                  },
                  involvedPropositions: offerIds.map(id => ({
                    id,
                    scope: "web://gbedekar489.github.io/weather/weather-offers.html#offerContainer"
                  }))
                }
              }
            }
          });
        }
      }).catch(err => {
        console.error("❌ Personalization failed:", err);
      });
    })
    .catch(error => {
      console.error("Failed to fetch weather data:", error);
    });
});

function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function generateUUID() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}