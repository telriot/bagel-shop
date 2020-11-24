import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { checkoutSchema } from "@validators/index";
import TextField from "@components/TextField";
import styled from "styled-components";
import Button from "@components/Button";
import {
	checkoutStepChanged,
	createPaymentIntent,
	TOrderInfo,
} from "./checkoutSlice";
import { selectCartItemsList } from "@features/cart/cartSlice";

interface IValues {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	city: string;
	prefecture: string;
	addressLine1: string;
	addressLine2: string;
	zipCode: string;
}
const FieldsDiv = styled.div`
	margin-bottom: 1em;
	padding-right: 2em;
`;
const CombinedRow = styled.div`
	display: grid;
	max-width: 100%;
	grid-template-columns: 0.7fr 0.3fr;
	gap: 1em;
`;
function CheckoutForm() {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItemsList);
	const handleSubmit = async (values: IValues) => {
		const orderInfoObj: TOrderInfo = {
			shipping: {
				address: {
					line1: values.addressLine1,
					city: values.city,
					postal_code: values.zipCode,
					line2: values.addressLine2,
					state: values.prefecture,
				},
				name: `${values.lastName} ${values.firstName}`,
				phone: values.phone,
			},
			metadata: { email: values.email, items: cartItems.join(",") },
		};
		await dispatch(createPaymentIntent(orderInfoObj));
	};

	return (
		<Formik
			initialValues={{
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				prefecture: "",
				city: "",
				zipCode: "",
				addressLine1: "",
				addressLine2: "",
			}}
			//validationSchema={checkoutSchema}
			onSubmit={async (
				values: IValues,
				{ setSubmitting }: FormikHelpers<IValues>
			) => {
				console.log("clicked");
				setSubmitting(true);
				await handleSubmit(values);
				setSubmitting(false);
				dispatch(checkoutStepChanged(1));
			}}
		>
			{({ errors, touched, isSubmitting }) => (
				<Form>
					<FieldsDiv>
						<Field
							variant="filled"
							name="firstName"
							value="firstName"
							component={TextField}
							label="First Name"
							placeholder="John"
							required
							error={
								errors.firstName && touched.firstName ? errors.firstName : ""
							}
						/>
						<Field
							variant="filled"
							name="lastName"
							value="lastName"
							component={TextField}
							label="Last Name"
							placeholder="Doe"
							required
							error={errors.lastName && touched.lastName ? errors.lastName : ""}
						/>
						<CombinedRow>
							<Field
								variant="filled"
								name="prefecture"
								value="prefecture"
								component={TextField}
								label="Prefecture"
								placeholder="Gifu-ken"
								error={
									errors.prefecture && touched.prefecture
										? errors.prefecture
										: ""
								}
							/>
							<Field
								variant="filled"
								name="zipCode"
								value="zipCode"
								component={TextField}
								label="Zip Code"
								placeholder="880-0824"
								error={errors.zipCode && touched.zipCode ? errors.zipCode : ""}
							/>
						</CombinedRow>

						<Field
							variant="filled"
							name="city"
							value="city"
							component={TextField}
							label="City"
							placeholder="Gifu city"
							error={errors.city && touched.city ? errors.city : ""}
						/>
						<Field
							variant="filled"
							name="addressLine1"
							value="addressLine1"
							component={TextField}
							label="Address 1"
							placeholder="Oshimacho"
							error={
								errors.addressLine1 && touched.addressLine1
									? errors.addressLine1
									: ""
							}
						/>
						<Field
							variant="filled"
							name="addressLine2"
							value="addressLine2"
							component={TextField}
							label="Address 2"
							placeholder="Tateno 1469-2"
							error={
								errors.addressLine2 && touched.addressLine2
									? errors.addressLine2
									: ""
							}
						/>
						<Field
							variant="filled"
							name="email"
							value="email"
							component={TextField}
							label="Email"
							placeholder="j.doe@gmail.com"
							required
							error={errors.email && touched.email ? errors.email : ""}
						/>
						<Field
							variant="filled"
							name="phone"
							value="phone"
							component={TextField}
							label="Phone"
							placeholder="+81 080 1234 5678"
							error={errors.phone && touched.phone ? errors.phone : ""}
						/>
					</FieldsDiv>

					<Button
						disabled={isSubmitting}
						onClick={() => console.log("clicked")}
						type="submit"
						size="small"
					>
						Continue to Payment
					</Button>
				</Form>
			)}
		</Formik>
	);
}

export default CheckoutForm;
