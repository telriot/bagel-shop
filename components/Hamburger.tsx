import React from "react";
import styled from "styled-components";

interface IHamburgerProps {
	onClick: () => any;
}

const HamburgerButton = styled.div`
	display: grid;
	place-items: center;
	height: 23px;
	width: 21px;
	cursor: pointer;
	& > span {
		width: 21px;
		height: 3px;
		background: ${({ theme }) => theme.palette.text.primary};
		display: block;
	}
	${(props) => props.theme.breakpoints.up("xs")} {
		display: none;
	}
`;

const Line = styled.span`
	width: 21px;
	border-radius: 4px;
`;

function Hamburger({ onClick }: IHamburgerProps) {
	return (
		<HamburgerButton onClick={onClick}>
			<Line />
			<Line />
			<Line />
		</HamburgerButton>
	);
}

export default Hamburger;
