import theme from "@styles/theme";
import styled from "styled-components";
import { contactData } from "@config/index";
const Link = styled.a`
	color: ${({ theme }) => theme.palette.text.primary};
	transition: color 0.3s;
	&:hover {
		color: ${({ theme }) => theme.palette.hoverSecondary};
	}
`;
function EmailLink() {
	return (
		<Link href={`mailto ${contactData.email}`}>{`${contactData.email} `}</Link>
	);
}

export default EmailLink;
