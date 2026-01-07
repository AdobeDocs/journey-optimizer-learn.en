require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// Serve all files in the public folder
app.use(express.static(path.join(__dirname, "public")));

// Your API endpoint
app.post("/sendEvent", async (req, res) => {
  try {
    const { assetClass, customerEmail, customerName } = req.body;

    const payload = {
      "_id": "/uri-reference",
      "_techmarketingdemos": {
        "AssetClass": assetClass,
        "CustomerEmail": customerEmail,
        "CustomerName": customerName
      },
      "eventMergeId": "Sample value",
      "eventType": "AssetClassSelected",
      "identityMap": {
        "key": [
          {
            "authenticatedState": "ambiguous",
            "id": customerEmail,
            "primary": false
          }
        ]
      },
      "producedBy": "self",
      "timestamp": new Date().toISOString()
    };

    const response = await axios.post(
      process.env.DCS_ENDPOINT,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "sandbox-name": process.env.AEP_SANDBOX,
          "Authorization": process.env.AEP_TOKEN,
          "x-adobe-flow-id": process.env.FLOW_ID
        }
      }
    );

    res.json({ success: true, aepResponse: response.data });
  } catch (err) {
    console.error("Error sending event:", err.response?.data || err.message);
    res.status(500).json({ success: false, error: err.response?.data || err.message });
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
