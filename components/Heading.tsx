import { HTMLAttributes } from "react";
import styled from "styled-components";

interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
	variant?: 1 | 2 | 3 | 4 | 5 | 6;
	color?: string;
	noMargin?: boolean;
}

export const HeadingDiv = styled.div`
	max-width: 40em;
	${({ theme }) => theme.breakpoints.down("md")} {
		max-width: 80%;
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
		max-width: 100%;
	}
`;

const StyledH1 = styled.h1<IHeading>`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.d4};
	line-height: ${({ theme }) => theme.lineHeight.d4};
	color: ${({ theme, color }) =>
		color === "secondary"
			? theme.palette.text.secondary
			: theme.palette.text.primary};
	text-align: left;
	font-weight: 400;
	margin-bottom: ${({ theme, noMargin }) =>
		noMargin ? 0 : theme.margin("d1").bottom};
	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.d1M};
		line-height: ${({ theme }) => theme.lineHeight.d1M};
		margin-bottom: ${({ theme, noMargin }) =>
			noMargin ? 0 : theme.margin("d1M").bottom};
	}
	${({ theme }) => theme.breakpoints.down("xs")} {
		font-size: ${({ theme }) => theme.typography.d1S};
		line-height: ${({ theme }) => theme.lineHeight.d1S};
		margin-bottom: ${({ theme, noMargin }) =>
			noMargin ? 0 : theme.margin("d1S").bottom};
	}
`;

const StyledH2 = styled.h2<IHeading>`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.d2};
	line-height: ${({ theme }) => theme.lineHeight.d2};
	color: ${({ theme, color }) =>
		color === "secondary"
			? theme.palette.text.secondary
			: theme.palette.text.primary};
	text-align: left;
	font-weight: 400;
	margin-bottom: ${({ theme, noMargin }) =>
		noMargin ? 0 : theme.margin("d2").bottom};
	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.d2M};
		line-height: ${({ theme }) => theme.lineHeight.d2M};
		margin-bottom: ${({ theme, noMargin }) =>
			noMargin ? 0 : theme.margin("d2M").bottom};
	}
	${({ theme }) => theme.breakpoints.down("xs")} {
		font-size: ${({ theme }) => theme.typography.d2S};
		line-height: ${({ theme }) => theme.lineHeight.d2S};
		margin-bottom: ${({ theme, noMargin }) =>
			noMargin ? 0 : theme.margin("d2S").bottom};
	}
`;

const StyledH3 = styled.h3<IHeading>`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.d3};
	line-height: ${({ theme }) => theme.lineHeight.d3};
	color: ${({ theme, color }) =>
		color === "secondary"
			? theme.palette.text.secondary
			: theme.palette.text.primary};
	text-align: left;
	font-weight: 400;
	margin-bottom: ${({ theme, noMargin }) =>
		noMargin ? 0 : theme.margin("d3").bottom};
	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.d3M};
		line-height: ${({ theme }) => theme.lineHeight.d3M};
		margin-bottom: ${({ theme, noMargin }) =>
			noMargin ? 0 : theme.margin("d3M").bottom};
	}
	${({ theme }) => theme.breakpoints.down("xs")} {
		font-size: ${({ theme }) => theme.typography.d3S};
		line-height: ${({ theme }) => theme.lineHeight.d3S};
		margin-bottom: ${({ theme, noMargin }) =>
			noMargin ? 0 : theme.margin("d3S").bottom};
	}
`;
const StyledH4 = styled.h4<IHeading>`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.d4};
	line-height: ${({ theme }) => theme.lineHeight.d4};
	color: ${({ theme, color }) =>
		color === "secondary"
			? theme.palette.text.secondary
			: theme.palette.text.primary};
	text-align: left;
	font-weight: 400;
	margin-bottom: ${({ theme, noMargin }) =>
		noMargin ? 0 : theme.margin("d4").bottom};

	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.d4M};
		line-height: ${({ theme }) => theme.lineHeight.d4M};
		margin-bottom: ${({ theme, noMargin }) =>
			noMargin ? 0 : theme.margin("d4M").bottom};
	}
	${({ theme }) => theme.breakpoints.down("xs")} {
		font-size: ${({ theme }) => theme.typography.d4S};
		line-height: ${({ theme }) => theme.lineHeight.d4S};
		margin-bottom: ${({ theme, noMargin }) =>
			noMargin ? 0 : theme.margin("d4S").bottom};
	}
`;
const StyledH5 = styled.h5<IHeading>`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.d5};
	line-height: ${({ theme }) => theme.lineHeight.d5};
	color: ${({ theme, color }) =>
		color === "secondary"
			? theme.palette.text.secondary
			: theme.palette.text.primary};
	text-align: left;
	font-weight: 400;
	margin-bottom: ${({ theme, noMargin }) =>
		noMargin ? 0 : theme.margin("d5").bottom};

	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.d5M};
		line-height: ${({ theme }) => theme.lineHeight.d5M};
		margin-bottom: ${({ theme, noMargin }) =>
			noMargin ? 0 : theme.margin("d5M").bottom};
	}
	${({ theme }) => theme.breakpoints.down("xs")} {
		font-size: ${({ theme }) => theme.typography.d5S};
		line-height: ${({ theme }) => theme.lineHeight.d5S};
		margin-bottom: ${({ theme, noMargin }) =>
			noMargin ? 0 : theme.margin("d5S").bottom};
	}
`;
const StyledH6 = styled.h6<IHeading>`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.d6};
	line-height: ${({ theme }) => theme.lineHeight.d6};
	color: ${({ theme, color }) =>
		color === "secondary"
			? theme.palette.text.secondary
			: theme.palette.text.primary};
	text-align: left;
	font-weight: 400;
	margin-bottom: ${({ theme, noMargin }) =>
		noMargin ? 0 : theme.margin("d6").bottom};

	${({ theme }) => theme.breakpoints.down("md")} {
		font-size: ${({ theme }) => theme.typography.d6M};
		line-height: ${({ theme }) => theme.lineHeight.d6M};
		margin-bottom: ${({ theme, noMargin }) =>
			noMargin ? 0 : theme.margin("d6M").bottom};
	}
	${({ theme }) => theme.breakpoints.down("xs")} {
		font-size: ${({ theme }) => theme.typography.d6S};
		line-height: ${({ theme }) => theme.lineHeight.d6S};
		margin-bottom: ${({ theme, noMargin }) =>
			noMargin ? 0 : theme.margin("d6S").bottom};
	}
`;

function Heading({ children, variant = 1, color, noMargin }: IHeading) {
	return variant === 1 ? (
		<StyledH1 noMargin={noMargin} color={color}>
			{children}
		</StyledH1>
	) : variant === 2 ? (
		<StyledH2 noMargin={noMargin} color={color}>
			{children}
		</StyledH2>
	) : variant === 3 ? (
		<StyledH3 noMargin={noMargin} color={color}>
			{children}
		</StyledH3>
	) : variant === 4 ? (
		<StyledH4 noMargin={noMargin} color={color}>
			{children}
		</StyledH4>
	) : variant === 5 ? (
		<StyledH5 noMargin={noMargin} color={color}>
			{children}
		</StyledH5>
	) : variant === 6 ? (
		<StyledH6 noMargin={noMargin} color={color}>
			{children}
		</StyledH6>
	) : null;
}

export default Heading;
