require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/sendEvent', async (req, res) => {
  try {
    const { assetClass, customerEmail, customerName } = req.body;

    const payload = {
      "eventType": "assetPreference",
      "timestamp": new Date().toISOString(),
      "_techmarketingdemos": {
        "PreferredInvestmentVehicle": assetClass,
        "Email": customerEmail,
        "FirstName": customerName
      },
      "identityMap": {
        "Email": [{
          "id": customerEmail,
          "primary": true
        }]
      }
    };

    const response = await axios.post(
      process.env.DCS_ENDPOINT,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          "sandbox-name": process.env.AEP_SANDBOX,
          "Authorization": `Bearer ${process.env.AEP_TOKEN}`
        }
      }
    );

    res.json({ success: true, aepResponse: response.data });

  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, error: e.message });
  }
});

const port = 3000;
app.listen(port, () => console.log("Server running on port", port));
