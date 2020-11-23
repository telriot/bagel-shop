import React, { HTMLAttributes } from "react";
import styled from "styled-components";
interface ILabelProps extends HTMLAttributes<HTMLDivElement> {
	labelColor?: "primary" | "secondary";
	required?: boolean;
	htmlFor: string;
}
interface IStyledLabelProps extends HTMLAttributes<HTMLLabelElement> {
	labelColor?: "primary" | "secondary";
	required?: boolean;
}
const Label = styled.div<IStyledLabelProps>`
	font-family: ${({ theme }) => theme.fontFamily.body};
	font-size: ${({ theme }) => theme.typography.base};
	line-height: ${({ theme }) => theme.lineHeight.base};
	font-weight: 500;
	color: ${({ theme, labelColor }) =>
		labelColor === "secondary"
			? theme.palette.text.secondary
			: theme.palette.text.primary};
	margin-bottom: 0.625rem;
	${({ theme }) => theme.breakpoints.down("sm")} {
		font-size: ${({ theme }) => theme.typography.m};
		line-height: ${({ theme }) => theme.lineHeight.m};
	}
`;
const RequiredMark = styled.span`
	color: ${({ theme }) => theme.palette.danger};
	margin-left: 0.125em;
`;

function InputLabel({
	children,
	labelColor = "primary",
	required = false,
	htmlFor,
}: ILabelProps) {
	return (
		<Label labelColor={labelColor}>
			<label htmlFor={htmlFor}>
				{children}
				{required && <RequiredMark>*</RequiredMark>}
			</label>
		</Label>
	);
}

export default InputLabel;
