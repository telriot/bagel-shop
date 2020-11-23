import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import Copyright from "@components/Copyright";
import IconWrapper from "@components/IconWrapper";
import { useDispatch, useSelector } from "react-redux";
import { Cross } from "@styled-icons/entypo/Cross";
import {
	mobileNavClosed,
	mobileNavDisabled,
	selectMobileNavIsOpen,
	selectMobileNavIsRendered,
} from "./layoutSlice";
import { navLinks } from "@config/index";
import Link from "next/link";
import Heading from "@components/Heading";

interface IMobileMenuProps {
	isOpen: boolean;
	isRendered: boolean;
}
interface IMenuProps extends HTMLAttributes<HTMLDivElement> {
	isOpen: boolean;
	isRendered: boolean;
}

const Overlay = styled.div<IMenuProps>`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.8);
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	transform: ${({ isOpen }) =>
		isOpen ? "translateX(0px)" : "translateX(-1800em)"};
	transition: ${({ isOpen }) =>
		isOpen
			? "opacity 0.5s, transform 0s 0s"
			: "opacity 0.5s, transform 0s 0.5s"};
	z-index: 100000;
`;
const Menu = styled.div<IMenuProps>`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 90vw;
	background-color: ${({ theme }) => theme.palette.secondary};
	color: ${({ theme }) => theme.palette.text.secondary};
	padding: 3vw;
	transform: ${({ isOpen }) =>
		isOpen ? "translateX(0px)" : "translateX(-90vw)"};
	transition: transform 0.5s ease-in;
	z-index: 100001;
	display: flex;
	flex-direction: column;
	visibility: ${({ isRendered }) => (isRendered ? "visible" : "hidden")};
	${({ theme }) => theme.breakpoints.down("sm")} {
		padding: 1em 1.5em;
	}
`;
const BrandContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5em 0;
`;

const Nav = styled.ul`
	padding: 2em 0;
	flex: 1;
	margin-bottom: auto;
	display: flex;
	flex-direction: column;
`;
const NavItem = styled.li`
	cursor: pointer;
	list-style: none;
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.d3S};
	line-height: ${({ theme }) => theme.lineHeight.d3S};
	margin-bottom: ${({ theme }) => theme.margin("d3S").bottom};
`;

function MobileMenu() {
	const isOpen = useSelector(selectMobileNavIsOpen);
	const isRendered = useSelector(selectMobileNavIsRendered);

	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(mobileNavClosed());
		setTimeout(() => dispatch(mobileNavDisabled()), 500);
	};

	return (
		<>
			<Overlay isOpen={isOpen} isRendered={isRendered} onClick={handleClose} />
			<Menu isOpen={isOpen} isRendered={isRendered}>
				<BrandContainer>
					<Heading noMargin color="secondary" variant={2}>
						Juri&rsquo; BAGELS
					</Heading>
					<IconWrapper invert size={"3em"}>
						<Cross onClick={handleClose} />
					</IconWrapper>
				</BrandContainer>

				<Nav>
					{navLinks.map((item, i) => (
						<NavItem key={`mobile-nav-link-${i}`}>
							<Link href={item.link}>{item.name}</Link>
						</NavItem>
					))}
				</Nav>
				<Copyright invert />
			</Menu>
		</>
	);
}

export default MobileMenu;
