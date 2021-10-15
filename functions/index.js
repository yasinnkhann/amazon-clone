const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51Jkdb8Hu3wcNXM1Qdk3sFtjZByNZBFUVldMs0A9Z2aKsi03dCXwedY9EG1CIzfm5KEEjtrEyi4KRU8KgJJGxZ24c00ibGAFu4u'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;

  console.log('Payment Request Received BOOM!!! for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// '/' endpoint:
// http://localhost:5001/clone-ce636/us-central1/api