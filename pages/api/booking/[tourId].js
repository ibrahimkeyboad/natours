const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Tour = require('../../../models/tourModel');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const tour = await Tour.findById(req.query.tourId);

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              unit_amount: tour.price * 100,
              currency: 'usd',
              product_data: {
                name: `${tour.name} Tour`,
                description: tour.summary,
              },
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `http://${req.headers.host}/tour/${tour.slug}/?success=true`,
        cancel_url: `http://${req.headers.host}/?canceled=true`,
        // customer_email: req.user.email,
        client_reference_id: req.query.tourId,
      });
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
