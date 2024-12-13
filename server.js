// const express = require('express');
// const bodyParser = require('body-parser');
// const { sendSMS } = require('./smsService'); // Import the sendSMS function

// const app = express();
// const port = 3000;

// // Middleware to parse form data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files (HTML, CSS, JS)
// app.use(express.static(__dirname));  // Serve files from the current directory

// // Endpoint to handle form submission and send SMS
// app.post('/send-sms', async (req, res) => {
//   const { userMobile1, userMessage1 } = req.body;
//   try {
//     await sendSMS(userMobile1, userMessage1); // Send SMS using smsService.js
//     res.send('Message sent successfully!');
//   } catch (error) {
//     res.status(500).send('Failed to send message: ' + error.message);
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const express = require('express');
const { Vonage } = require('@vonage/server-sdk');

const app = express();
const port = 3000;

// Initialize Vonage
const vonage = new Vonage({
  apiKey: "ba6fb35e",
  apiSecret: "oA8dmNuXOwy8NmTR",
});

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to send SMS
app.post('/send-sms', async (req, res) => {
  const { to, text } = req.body;
  const from = "Vonage APIs";

  try {
    await vonage.sms.send({ to, from, text });
    res.status(200).send({ message: 'Message sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'There was an error sending the message.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
