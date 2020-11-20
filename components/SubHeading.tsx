import styled from "styled-components";

const SubHeading = styled.p`
	font-size: ${({ theme }) => theme.typography.base};
	line-height: ${({ theme }) => theme.lineHeight.base};
	color: ${({ theme }) => theme.palette.text.secondary};
	text-align: left;
	font-weight: 300;
	padding-left: 2.25rem;
	position: relative;
	max-width: 26em;

	&:before {
		content: "";
		display: inline-block;
		position: absolute;
		left: 0;
		top: 0.4375rem;
		bottom: 0;
		height: calc(100% - 0.9375rem);
		width: 1.25rem;
		background: ${({ theme }) => theme.palette.secondary};
	}

	${({ theme }) => theme.breakpoints.down("sm")} {
		font-size: ${({ theme }) => theme.typography.m};
		line-height: ${({ theme }) => theme.lineHeight.m};
		padding-left: 2.25rem;

		&:before {
			content: "";
			display: inline-block;
			position: absolute;
			left: 0;
			top: 0.3125rem;
			bottom: 0;
			height: calc(100% - 0.6875rem);
			width: 1.125rem;
			background: ${({ theme }) => theme.palette.secondary};
		}
	}
`;

export default SubHeading;
