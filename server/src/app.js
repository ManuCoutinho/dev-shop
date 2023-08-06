
const express = require('express');
const cors = require('cors');
const http= require('node:http');
const bodyParser = require('body-parser');

require('dotenv/config');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials:  true }));
const SECRET_KEY = process.env.STRIPE_SECRET_KEY ?? ''
const stripe= require('stripe')(SECRET_KEY);

const serverHttp = http.createServer(app);


app.post('/checkout', async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.product],
          },
            unit_amount: item.price * 100
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.SERVER_URL}/success.html`,
      cancel_url:`${process.env.SERVER_URL}/cancel.html`,
    })


    res.status(200).json(session);

  } catch (error) {
    res.status(400).json({ message: error});
    next(error);
  }
})


module.exports = serverHttp




