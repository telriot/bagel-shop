import Layout from "@components/layout/Layout";
import CheckoutForm from "@features/checkout/CheckoutForm";
import Heading from "@components/Heading";
import CartOverlay from "@features/cart/CartOverlay";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCheckoutStep } from "@features/checkout/checkoutSlice";
import CardPaymentForm from "@features/checkout/CardPaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderComplete from "@features/checkout/OrderComplete";

const LeftCol = styled.div`
	grid-column: 3/8;
`;
const RightCol = styled.div`
	grid-column: 8/11;
`;
function Checkout() {
	const step = useSelector(selectCheckoutStep);
	const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

	return (
		<Layout>
			{step === 2 ? (
				<OrderComplete />
			) : (
				<>
					<Elements stripe={stripePromise}>
						<LeftCol>
							<Heading variant={3}>Checkout</Heading>
							{step === 0 ? (
								<CheckoutForm />
							) : step === 1 ? (
								<CardPaymentForm />
							) : null}
						</LeftCol>
					</Elements>

					<RightCol>
						<Heading variant={4}>Your Products</Heading>

						<CartOverlay visible relative noButton />
					</RightCol>
				</>
			)}
		</Layout>
	);
}

export default Checkout;
