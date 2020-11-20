import { contactData } from "@public/config";
function PhoneLink() {
	const { phone } = contactData;
	const formattedPhone = `${phone.slice(0, 3)} ${phone.slice(
		3,
		6
	)} ${phone.slice(6, 10)} ${phone.slice(10, 14)}`;

	return <a href={`tel:${phone}`}>{formattedPhone}</a>;
}

export default PhoneLink;
