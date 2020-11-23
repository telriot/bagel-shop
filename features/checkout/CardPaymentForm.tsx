import React from "react";
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
const Label = styled.legend`
	font-family: ${({ theme }) => theme.fontFamily.body};
	font-size: ${({ theme }) => theme.typography.base};
	line-height: ${({ theme }) => theme.lineHeight.base};
	color: ${({ theme }) => theme.palette.text.primary};
`;
function CardPaymentForm() {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}
		const cardElement = elements.getElement(CardNumberElement);
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement!,
		});
		if (error) {
			console.log("[error]", error);
		} else {
			console.log("[PaymentMethod]", paymentMethod);
		}
	};

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
			<Button type="submit" disabled={!stripe}>
				Pay
			</Button>
		</form>
	);
}

export default CardPaymentForm;
