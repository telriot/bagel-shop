import * as Yup from "yup";
export const emailSchema = Yup.object().shape({
	email: Yup.string().required("Required"),
});
export const newsletterSchema = Yup.object().shape({
	newsletterEmail: Yup.string().required("Required"),
});

export const contactSchema = Yup.object().shape({
	firstName: Yup.string().required("Required"),
	lastName: Yup.string().required("Required"),
	company: Yup.string(),
	email: Yup.string()
		.required("Required")
		.email("Please enter a valid email address"),
	phone: Yup.string(),
	message: Yup.string(),
});
export const contactSchemaJP = Yup.object().shape({
	firstName: Yup.string().required("RequiredJP"),
	lastName: Yup.string().required("RequiredJP"),
	company: Yup.string(),
	email: Yup.string()
		.required("RequiredJP")
		.email("Please enter a valid email addressJP"),
	phone: Yup.string(),
	message: Yup.string(),
});
