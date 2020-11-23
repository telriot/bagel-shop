import * as Yup from "yup";
export const emailSchema = Yup.object().shape({
	email: Yup.string().required("Required"),
});
export const newsletterSchema = Yup.object().shape({
	newsletterEmail: Yup.string().required("Required"),
});

export const checkoutSchema = Yup.object().shape({
	firstName: Yup.string().required("Required"),
	lastName: Yup.string().required("Required"),
	email: Yup.string()
		.required("Required")
		.email("Please enter a valid email address"),
	phone: Yup.string(),
	city: Yup.string().required("Required"),
	prefecture: Yup.string().required("Required"),
	addressLine1: Yup.string().required("Required"),
	addressLine2: Yup.string(),
	zipCode: Yup.string().required("Required"),
});
