const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/proxy', async (req, res) => {
  try {
    const { url } = req.query;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy error' });
  }
});

app.listen(port, () => {
  console.log(`CORS proxy server is running on port ${port}`);
});
