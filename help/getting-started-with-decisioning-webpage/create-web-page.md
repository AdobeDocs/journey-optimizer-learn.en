---
title: Create a web page to test the solution
description: Web page to test the personalized offers delivered using decisioning.
role: User
level: Beginner
doc-type: Tutorial
feature: Decisioning
last-substantial-update: 2025-05-05
jira: KT-17728
---

# Create a web page to test the solution

This web page was created to test personalized offers delivered through Adobe Journey Optimizer Decisioning. It provides a controlled environment where the sendEvent call can be triggered and the returned offer content rendered, helping validate end-to-end personalization setup and ensure that decisioning works as expected.

The following script is responsible for fetching and displaying a personalized offer on a web page using Adobe Journey Optimizer.

1.  Decode HTML entities: There's a helper function that safely converts any special characters in the offer content into readable HTML.

2.  Run personalization:
When called, it sends a request (sendEvent) to Adobe's Web SDK to get personalized content for a specific area on the page (the #ajo-offer element).
If an offer is returned, it decodes the HTML and inserts it into the page.
If nothing is returned, it logs a warning.

3.  Wait for the SDK:
Since Adobe's SDK (alloy) loads asynchronously, the script waits until it's fully loaded before making the request. 
It checks for alloy every 200 milliseconds, up to 20 times, to avoid errors.

4.  On page load: When the page finishes loading, the script starts the process by calling waitForAlloy().



```javascript

< script >
    function decodeHtmlEntities(html) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }


function runPersonalization() {
    console.log("🚀 Sending personalization request to AJO...");
    alloy("sendEvent", {
        renderDecisions: true,
        personalization: {
            surfaces: ["#ajo-offer"]
        }
    }).then(result => {
        console.log("🔍 Web SDK decision response:", result);

        const decision = result.propositions?.[0];
        const html = decision?.items?.[0]?.data?.content;

        const container = document.getElementById("ajo-offer");
        if (html && container) {
            const decodedHtml = decodeHtmlEntities(html);
            console.log("✅ Offer HTML content (decoded):", decodedHtml);
            container.innerHTML = decodedHtml;
        } else {
            console.warn("⚠️ No personalized offer returned.");
        }


    }).catch(error => {
        console.error("❌ sendEvent failed:", error);
    });
}

function waitForAlloy(callback, retries = 20) {
    if (typeof alloy === "function") {
        callback();
    } else if (retries > 0) {
        console.log("⌛ Waiting for Alloy...");
        setTimeout(() => waitForAlloy(callback, retries - 1), 200);
    } else {
        console.error("❌ alloy is not loaded after waiting.");
    }
}

// Trigger initial personalization on page load
document.addEventListener("DOMContentLoaded", function() {
    waitForAlloy(() => runPersonalization());
}); <
/script>
```

[The sample HTML page and related assets can be downloaded from here](assets/web-page-assets.zip)