import styled from "styled-components";
import { siteInfo } from "@public/config";
const StyledSpan = styled.span`
	font-family: ${({ theme }) => theme.fontFamily.body};
	font-weight: 300;
	font-size: ${({ theme }) => theme.typography.s};
	color: ${({ theme }) => theme.palette.text.primary};
	cursor: default;
	${({ theme }) => theme.breakpoints.down("lg")} {
		font-size: ${({ theme }) => theme.typography.xs};
	}
`;

export default function Copyright() {
	const date = new Date();
	return (
		<StyledSpan>
			&copy; Copyright {date.getFullYear()} - {siteInfo.name}
		</StyledSpan>
	);
}
