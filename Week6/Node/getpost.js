const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET request
app.get('/data', (req, res) => {
  res.send('This is a GET request');
});

// POST request
app.post('/data', (req, res) => {
  const receivedData = req.body;
  res.send(`Received data: ${JSON.stringify(receivedData)}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
