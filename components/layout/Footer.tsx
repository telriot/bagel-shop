import styled from "styled-components";
import { navLinks, contactData, siteInfo } from "@config/index";
import Copyright from "@components/Copyright";
import PhoneLink from "@components/PhoneLink";
import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import SocialMedia from "@components/SocialMedia";
const StyledFooter = styled.footer`
	max-width: ${({ theme }) => theme.screenMaxWidth};
	margin: 0 auto;
	padding: 2em;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-items: center;
	${({ theme }) => theme.breakpoints.down("sm")} {
		grid-template-columns: repeat(2, 1fr);
	}
`;
const Divider = styled.div`
	border-top: 1px #d3d3d3 solid;
	grid-column: 1/-1;
	height: 1px;
	width: 70%;
	margin-bottom: 2em;
`;
const DisplayParagraph = styled(Paragraph)`
	font-family: ${({ theme }) => theme.fontFamily.display};
`;
const ShopInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-self: flex-start;
	${({ theme }) => theme.breakpoints.down("sm")} {
		grid-column: 1/2;
		order: 2;
	}
`;
const ThingsWeLike = styled.div`
	display: flex;

	flex-direction: column;
	align-items: flex-end;
	justify-self: flex-end;
	${({ theme }) => theme.breakpoints.down("sm")} {
		grid-column: 2/-1;
		order: 3;
	}
`;
const SocialMediaDiv = styled.div`
	align-self: center;
	display: grid;
	place-items: center;
	${({ theme }) => theme.breakpoints.down("sm")} {
		grid-column: 1/-1;
		order: 4;
		padding: 2em 0;
	}
`;
const { addressLine1, addressLine2, addressLine3 } = contactData;
const shopInfo = [addressLine1, addressLine2, addressLine3];
const thingsWeLike = [
	{ name: "Sumurera Flour", href: "https://www.google.com" },
	{ name: "De Buyer Pans", href: "https://www.google.com" },
	{ name: "Mamapan", href: "https://www.google.com" },
	{ name: "Tarako", href: "https://www.google.com" },
];
function Footer() {
	return (
		<StyledFooter>
			<Divider />
			<ShopInfo>
				<Heading variant={4}>Juri&rsquo; BAGELS</Heading>
				{shopInfo.map((el, i) => (
					<DisplayParagraph key={`shopinfo-${i}`}>{el}</DisplayParagraph>
				))}
			</ShopInfo>
			<SocialMediaDiv>
				<SocialMedia />
				<Copyright />
			</SocialMediaDiv>
			<ThingsWeLike>
				<Heading variant={4}>Things we like</Heading>
				{thingsWeLike.map((el, i) => (
					<DisplayParagraph key={`things-we-like-${i}`}>
						{el.name}
					</DisplayParagraph>
				))}
			</ThingsWeLike>
		</StyledFooter>
	);
}

export default Footer;
