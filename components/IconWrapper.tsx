import { HTMLAttributes } from "react";
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
interface IIconWrapper extends HTMLAttributes<HTMLDivElement> {
	invert?: boolean;
	size?: string;
}

const IconWrapper = styled.div<IIconWrapper>`
	${StyledIconBase} {
		height: ${({ size }) => (size ? size : "2.75em")};
		width: ${({ size }) => (size ? size : "2.75em")};
		transition: color 0.3s;
		outline: none;
		cursor: pointer;
		color: ${({ invert, theme }) =>
			invert ? theme.palette.text.secondary : theme.palette.text.primary};
		&:hover,
		&:focus {
			color: ${({ theme }) => theme.palette.secondary};
		}
		${({ theme }) => theme.breakpoints.down("md")} {
			height: ${({ size }) => (size ? "calc(" + size + "*.75)" : "2.25em")};
			width: ${({ size }) => (size ? "calc(" + size + "*.75)" : "2.25em")};
		}
	}
`;

export default IconWrapper;
