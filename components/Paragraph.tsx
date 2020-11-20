import { HTMLAttributes } from "react";
import styled from "styled-components";
interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {
	color?: string;
	noMargin?: boolean;
	small?: boolean;
	light?: boolean;
}

const StyledParagraph = styled.p<IParagraph>`
	font-family: ${({ theme }) => theme.fontFamily.body};
	font-size: ${({ theme, small }) =>
		small ? theme.typography.m : theme.typography.l};
	line-height: ${({ theme, small }) =>
		small ? theme.lineHeight.m : theme.lineHeight.l};
	font-weight: ${({ light }) => (light ? 300 : 400)};
	margin-bottom: ${({ theme, noMargin, small }) =>
		noMargin ? 0 : small ? theme.margin("m").bottom : theme.margin("l").bottom};
	color: ${({ theme, color }) =>
		color === "primary"
			? theme.palette.text.primary
			: color === "secondary"
			? theme.palette.text.secondary
			: theme.palette.text.primary};
	${({ theme }) => theme.breakpoints.down("sm")} {
		font-size: ${({ theme, small }) =>
			small ? theme.typography.s : theme.typography.base};
		line-height: ${({ theme, small }) =>
			small ? theme.lineHeight.s : theme.lineHeight.base};
		margin-bottom: ${({ theme, noMargin, small }) =>
			noMargin
				? 0
				: small
				? theme.margin("s").bottom
				: theme.margin("m").bottom};
	}
`;

export default StyledParagraph;
