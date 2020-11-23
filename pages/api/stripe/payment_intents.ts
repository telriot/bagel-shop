import { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//TODO: define products
const calculateOrderAmount = async (products: any) => {
	let amount = 0;
	//Check for prices server-side

	//   for (let product of Object.values(products)) {
	//     const dbProduct = await Product.findById(product._id);
	//     amount += parseFloat(dbProduct.price).toFixed(2) * product.itemsInCart;
	//   }
	return 100;
};
module.exports = {
	createIntent: async (req: NextApiRequest, res: NextApiResponse) => {
		const { products } = req.body;
		const currency = "usd";
		const amount = await calculateOrderAmount(products);
		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency,
		});
		res.send({
			clientSecret: paymentIntent.client_secret,
		});
	},
};
