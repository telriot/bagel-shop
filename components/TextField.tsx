import React, { HTMLAttributes } from "react";
import InputLabel from "@components/InputLabel";
import styled from "styled-components";

interface ITextFieldProps extends HTMLAttributes<HTMLElement> {
	label: string;
	error?: string;
	field?: any;
	type: string;
	variant?: "default" | "filled";
	labelColor: "primary" | "secondary";
	textarea?: boolean;
	required?: boolean;
	placeholder?: string;
	noError?: boolean;
}
interface IInputFieldProps extends HTMLAttributes<HTMLInputElement> {
	error?: string;
	variant?: "default" | "filled";
	id: string;
}

const Wrapper = styled.div`
	margin-bottom: 0.25rem;
	position: relative;
`;
const InputField = styled.input.attrs((props) => ({
	id: props.name,
}))<IInputFieldProps>`
	font-family: ${({ theme }) => theme.fontFamily.body};

	background: ${({ theme, variant }) =>
		variant === "filled" ? theme.palette.formGreyLight : theme.palette.primary};
	width: 100%;
	/* max-width: 24em; */
	padding: 0.5625rem;
	outline: none;
	font-size: ${({ theme }) => theme.typography.base};
	line-height: ${({ theme }) => theme.lineHeight.base};
	color: ${({ theme }) => theme.palette.text.primary};
	border: ${({ theme, variant }) =>
		variant === "filled" ? "1px solid rgba(0,0,0,.1)" : 0};
	box-shadow: ${({ theme }) => theme.shadows(1)};

	border-radius: 2px;
	margin-bottom: 0.75rem;
	transition: background 0.3s;

	&:focus {
		background: ${({ theme, variant }) =>
			variant === "filled"
				? theme.palette.hoverFormGrey
				: theme.palette.secondary};
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
		font-size: ${({ theme }) => theme.typography.m};
		line-height: ${({ theme }) => theme.lineHeight.m};
	}
	${({ theme }) => theme.breakpoints.down("xs")} {
		max-width: 100%;
	}
`;
const Textarea = styled.textarea.attrs((props) => ({
	id: props.name,
}))<IInputFieldProps>`
	font-family: ${({ theme }) => theme.fontFamily.body};

	background: ${({ theme, variant }) =>
		variant === "filled" ? theme.palette.formGreyLight : theme.palette.primary};
	width: 100%;
	max-width: 24em;
	padding: 0.5625rem;
	outline: none;
	font-size: ${({ theme }) => theme.typography.base};
	line-height: ${({ theme }) => theme.lineHeight.base};
	color: ${({ theme }) => theme.palette.text.primary};
	border: ${({ theme, variant }) =>
		variant === "filled" ? "1px solid rgba(0,0,0,.1)" : 0};
	box-shadow: ${({ theme }) => theme.shadows(1)};

	border-radius: 2px;
	margin-bottom: 0.75rem;
	transition: background 0.3s;
	resize: none;
	&::placeholder {
		font-family: ${({ theme }) => theme.fontFamily.body};
	}
	&:focus {
		background: ${({ theme, variant }) =>
			variant === "filled"
				? theme.palette.hoverFormGrey
				: theme.palette.secondary};
	}

	${({ theme }) => theme.breakpoints.down("sm")} {
		font-size: ${({ theme }) => theme.typography.m};
		line-height: ${({ theme }) => theme.lineHeight.m};
	}
	${({ theme }) => theme.breakpoints.down("xs")} {
		max-width: 100%;
	}
`;
const ErrorMessage = styled.span`
	position: absolute;
	bottom: -0.375em;
	left: 0;
	font-size: ${({ theme }) => theme.typography.xs};
	color: ${({ theme }) => theme.palette.danger};
`;
function TextField({
	field,
	label,
	error,
	type,
	variant = "default",
	labelColor = "primary",
	textarea = false,
	required = false,
	placeholder = "",
	noError = false,
}: ITextFieldProps) {
	return (
		<Wrapper>
			<InputLabel
				required={required}
				labelColor={labelColor}
				htmlFor={field.name}
			>
				{label}
			</InputLabel>
			{textarea ? (
				<Textarea
					rows={3}
					variant={variant}
					error={error}
					type={type}
					placeholder={placeholder}
					id={field.name}
					{...field}
				/>
			) : (
				<>
					<InputField
						placeholder={placeholder}
						variant={variant}
						error={error}
						type={type}
						id={field.name}
						{...field}
					/>
					{error && !noError && <ErrorMessage>{error}</ErrorMessage>}
				</>
			)}
		</Wrapper>
	);
}

export default TextField;
