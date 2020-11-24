import React from "react";
import { useDispatch } from "react-redux";
import {
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import styled from "styled-components";
import Button from "@components/Button";
import styles from "./stripe.module.css";
import {
	checkoutStepChanged,
	selectClientSecret,
	clientSecretSet,
	selectPaymentStatus,
	paymentStatusChanged,
	selectCheckoutStep,
	orderReviewCreated,
	TOrderReview,
} from "@features/checkout/checkoutSlice";
import { cartEmptied, selectCartItemsList } from "@features/cart/cartSlice";
import { useSelector } from "react-redux";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { PaymentIntent, StripeError } from "@stripe/stripe-js";
interface IPaymentIntent extends PaymentIntent {
	metadata?: { email: string; items: string };
}
const Label = styled.legend`
	font-family: ${({ theme }) => theme.fontFamily.body};
	font-size: ${({ theme }) => theme.typography.base};
	line-height: ${({ theme }) => theme.lineHeight.base};
	color: ${({ theme }) => theme.palette.text.primary};
`;
function CardPaymentForm() {
	const paymentStatus = useSelector(selectPaymentStatus);
	const [errorMessage, setErrorMessage] = React.useState("");
	const dispatch = useDispatch();
	const items = useSelector(selectCartItemsList);
	const stripe = useStripe();
	const step = useSelector(selectCheckoutStep);
	const elements = useElements();
	const clientSecret = useSelector(selectClientSecret);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(paymentStatusChanged("pending"));
		if (!stripe || !elements) {
			return;
		}
		const cardElement = elements.getElement(CardNumberElement);
		const {
			error,
			paymentIntent,
		}: {
			error?: StripeError;
			paymentIntent?: IPaymentIntent;
		} = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: cardElement!,
				//billing_details: { name: input.cardholderName },
			},
		});
		if (error) {
			console.error(error);
			await dispatch(paymentStatusChanged("rejected"));
			setErrorMessage(error.message ?? "An unknown error occured");
		} else if (paymentIntent) {
			if (paymentIntent.status === "succeeded") {
				console.log(paymentIntent);

				await dispatch(paymentStatusChanged("fulfilled"));
				const { amount, shipping } = paymentIntent;
				console.log(paymentIntent);
				const orderReview: TOrderReview = {
					items,
					total: amount,
					name: shipping!.name!,
					address: {
						line1: shipping?.address?.line1!,
						city: shipping?.address?.city!,
						postal_code: shipping?.address?.postal_code!,
						line2: shipping?.address?.line2 || undefined,
						state: shipping?.address?.state || undefined,
					},
				};
				await dispatch(orderReviewCreated(orderReview));
				dispatch(clientSecretSet(""));
				dispatch(cartEmptied());
				destroyCookie(null, "clientSecretBS");
			} else {
				console.log("Payment did not succeed, but something else happened");
				//handle other possible paymentIntent statuses
			}
			dispatch(checkoutStepChanged(2));
		}
	};
	// React.useEffect(() => {
	// 	return function cleanup() {
	// 		paymentStatus === "idle" && dispatch(checkoutStepChanged(0));
	// 	};
	// }, []);

	const styleOptions = {
		style: {
			base: {
				fontFamily: "Lato, Open Sans, sans-serif",
				fontSize: "16px",
				fontSmoothing: "antialiased",
			},
			invalid: {
				iconColor: "#e81eab",
				color: "#e81eab",
			},
		},
	};

	return (
		<form onSubmit={handleSubmit}>
			<Label>Card Number</Label>
			<CardNumberElement options={styleOptions} className={styles.wrapper} />
			<Label>Expires</Label>
			<CardExpiryElement options={styleOptions} className={styles.wrapper} />
			<Label>Security code</Label>
			<CardCvcElement options={styleOptions} className={styles.wrapper} />
			<Button type="submit" disabled={!stripe || paymentStatus === "pending"}>
				Pay
			</Button>
		</form>
	);
}

export default CardPaymentForm;
