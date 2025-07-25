
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
            "web://yourdomain.com/weather/weather-offers.html#offerContainer"
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
        const offerDiv = document.getElementById("offerContainer");
        offerDiv.innerHTML = "";
        window.latestPropositions = response.propositions || [];

        const allOffers = [];

        (response.propositions || []).forEach(p => {
          allOffers.push(...(p.items || []));
        });

        if (!allOffers.length) {
          offerDiv.innerHTML = "<p>No AJO offers returned.</p>";
          return;
        }

        const impressionItems = [];

        allOffers.forEach(item => {
          const decoded = decodeHtml(item.data?.content || "");
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = decoded;

          [...tempDiv.children].forEach(child => {
            if (child.classList.contains("offer-item")) {
              const offerId = child.getAttribute("data-offer-id");
              const trackingToken = child.getAttribute("data-tracking-token");

              if (offerId && trackingToken) {
                impressionItems.push({ id: offerId, token: trackingToken });
              }

              offerDiv.appendChild(child);

              // Click tracking
              child.querySelectorAll("a, button").forEach(el => {
                el.addEventListener("click", () => {
                  const ecidValue = getECID();
                  if (!ecidValue || !offerId || !trackingToken) {
                    console.warn("AJO Error!!!  Missing ECID, offerId, or trackingToken. Interaction event not sent.");
                    return;
                  }

                  alloy("sendEvent", {
                    xdm: {
                      _id: generateUUID(),
                      timestamp: new Date().toISOString(),
                      eventType: "decisioning.propositionInteract",
                      identityMap: {
                        ECID: [{
                          id: ecidValue,
                          authenticatedState: "ambiguous",
                          primary: true
                        }]
                      },
                      _experience: {
                        decisioning: {
                          propositionEventType: {
                            interact: 1
                          },
                          propositionAction: {
                            id: offerId,
                            tokens: [trackingToken]
                          },
                          propositions: window.latestPropositions
                        }
                      }
                    }
                  });
                });
              });
            }
          });
        });

        // Impression event after rendering
        if (impressionItems.length > 0) {
          const ecidValue = getECID();
          if (!ecidValue) {
            console.warn("AJO Error !!! Missing ECID. Skipping impression.");
            return;
          }

          // Send impression for each item
          impressionItems.forEach(({ id, token }) => {
            if (!id || !token) {
              console.warn("AJO Error !!! Missing offerId or trackingToken. Skipping impression.");
              return;
            }

            alloy("sendEvent", {
              xdm: {
                _id: generateUUID(),
                timestamp: new Date().toISOString(),
                eventType: "decisioning.propositionDisplay",
                identityMap: {
                  ECID: [{
                    id: ecidValue,
                    authenticatedState: "ambiguous",
                    primary: true
                  }]
                },
                _experience: {
                  decisioning: {
                    propositionEventType: {
                      display: 1
                    },
                    propositionAction: {
                      id: id,
                      tokens: [token]
                    },
                    propositions: window.latestPropositions
                  }
                }
              }
            });
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

function getECID() {
  try {
    return _satellite.getVar("ECID");
  } catch (e) {
    console.warn("ECID not available via _satellite.");
    return null;
  }
}