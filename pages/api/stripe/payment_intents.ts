import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { variants } from "../../../config/index";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	// https://github.com/stripe/stripe-node#configuration
	apiVersion: "2020-08-27",
});

//TODO: define products
const calculateOrderAmount = async (products: Array<keyof typeof variants>) => {
	let amount = 0;
	for (let product of products) {
		amount += variants[product].price;
	}
	return amount;
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { shipping, metadata } = req.body.orderInfo;
	console.log(shipping, metadata, "ssbody shipping and metadata");
	const { products } = req.body;
	const currency = "usd";
	const amount = await calculateOrderAmount(products);
	console.log(amount);
	if (req.method === "POST") {
		console.log("POST");
		try {
			const paymentIntent = await stripe.paymentIntents.create({
				amount,
				currency,
				shipping,
				metadata,
			});
			console.log(paymentIntent, "pintent");
			res.status(200).send({
				clientSecret: paymentIntent.client_secret,
			});
		} catch (error) {
			console.log(error);

			res.status(500).json({ statusCode: 500, message: error.message });
		}
	} else if (req.method === "PUT") {
		console.log("PUT");

		const { clientSecret } = req.body;
		try {
			const paymentIntent = await stripe.paymentIntents.update(clientSecret, {
				amount,
				currency,
				shipping,
				metadata,
			});
			res.status(200).send({
				clientSecret: paymentIntent.client_secret,
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({ statusCode: 500, message: error.message });
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
};
