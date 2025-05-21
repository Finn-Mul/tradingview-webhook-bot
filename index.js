const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  const data = req.body;
  console.log('✅ Webhook received:', data);

  const action = data.action;
  const symbol = data.symbol;
  const price = data.price;

  console.log(`Action: ${action}, Symbol: ${symbol}, Price: ${price}`);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
