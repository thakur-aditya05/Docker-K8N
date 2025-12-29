
require('dotenv').config();



const express = require('express');
const app = express();
const cors = require('cors');

// const stripe = require('stripe')('your-stripe-secret-key');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>we are learning Stripe Payment </h1>');
});

app.post('/payment', async (req, res) => {
    try {
        const product = await stripe.products.create({
            name: "T-Shirt",
        });

        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: 100 * 100, // 100 INR
            currency: 'inr',
        });

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: price.id,
                    quantity: 1,
                }
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
            customer_email: 'demo@gmail.com',
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creating payment session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});



