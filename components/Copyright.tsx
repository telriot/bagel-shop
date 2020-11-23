import styled from "styled-components";
import { siteInfo } from "@config/index";
import { HTMLAttributes } from "react";
interface ICopyright extends HTMLAttributes<HTMLSpanElement> {
	invert?: boolean;
}
const StyledSpan = styled.span<ICopyright>`
	font-family: ${({ theme }) => theme.fontFamily.body};
	font-weight: 300;
	font-size: ${({ theme }) => theme.typography.s};
	color: ${({ theme, invert }) =>
		invert ? theme.palette.text.secondary : theme.palette.text.primary};
	cursor: default;
`;

export default function Copyright({ invert }: ICopyright) {
	const date = new Date();
	return (
		<StyledSpan invert={invert}>
			&copy; Copyright {date.getFullYear()} - {siteInfo.name}
		</StyledSpan>
	);
}
