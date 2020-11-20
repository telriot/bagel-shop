import { HTMLAttributes } from "react";
import styled from "styled-components";

interface IStyledButton extends HTMLAttributes<HTMLButtonElement> {
	invert?: boolean;
	expandAtSm?: boolean;
	size?: "default" | "small";
	fullWidth?: boolean;
	type?: string;
	disabled?: boolean;
}
const StyledButton = styled.button<IStyledButton>`
	font-size: ${({ theme, size }) =>
		size === "small" ? theme.typography.l : theme.typography.l};
	font-family: ${({ theme }) => theme.fontFamily.body};

	font-weight: 500;
	background-color: ${({ theme, invert, disabled }) =>
		disabled
			? theme.palette.formGreyLight
			: invert
			? "rgba(255,255,255,.9)"
			: theme.palette.secondary};
	color: ${({ theme, disabled, invert }) =>
		disabled
			? theme.palette.hoverFormGrey
			: invert
			? theme.palette.text.primary
			: theme.palette.text.secondary};
	text-transform: uppercase;
	border: none;
	padding: ${({ size }) =>
		size === "small" ? "0.5em 1.5em" : "0.5675em 2.25em"};
	cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
	transition: ${({ theme }) =>
		"background-color" + ", " + theme.transition.normal};
	width: ${({ fullWidth }) => (fullWidth ? "100%" : "")};
	&:hover,
	&:focus {
		background-color: ${({ theme, invert, disabled }) =>
			disabled
				? theme.palette.formGreyLight
				: invert
				? theme.palette.secondary
				: theme.palette.secondaryLight};
		color: ${({ theme, disabled }) =>
			disabled ? theme.palette.hoverFormGrey : theme.palette.tertiary};
	}

	${({ theme }) => theme.breakpoints.down("lg")} {
		font-size: ${({ theme }) => theme.typography.base};
		padding: 0.5em 1.75em;
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
		min-width: ${({ expandAtSm }) => (expandAtSm ? "100%" : "")};
	}

	${({ theme }) => theme.breakpoints.down("xs")} {
	}
`;

export default StyledButton;
