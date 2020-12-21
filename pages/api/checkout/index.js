import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const getBasketTotal = (itemsArray) =>
  itemsArray?.reduce((sum, curr) => sum + curr.price * curr.quantity, 0);

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const basket = req.body;
      const totalAmount = getBasketTotal(basket) * 100;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: totalAmount,
        currency: 'gbp',
      });
      res.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (e) {
      // console.log(`create-customer:: Error: ${e.message}`);
      res.status(500).json({ statusCode: 500, message: e.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
