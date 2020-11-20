import { HTMLAttributes } from "react";
import { navLinks } from "@public/config";
import Hamburger from "@components/Hamburger";
import Link from "next/link";
import styled from "styled-components";

interface INavMenu extends HTMLAttributes<HTMLHeadingElement> {}
interface INavContainer extends HTMLAttributes<HTMLHeadingElement> {}
const NavContainer = styled.nav<INavContainer>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.l};
	color: ${({ theme }) => theme.palette.text.primary};
	${({ theme }) => theme.breakpoints.down("md")} {
		justify-content: flex-end;
	}
	${({ theme }) => theme.breakpoints.down("xs")} {
		display: none;
	}
`;
const NavList = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-width: 17vw;
	${({ theme }) => theme.breakpoints.down("lg")} {
	}
	${({ theme }) => theme.breakpoints.down("md")} {
		min-width: 9em;
	}
`;
const NavItem = styled.li`
	cursor: pointer;
	list-style: none;
	position: relative;
	margin: 0 1rem;
	&:before {
		content: "";
		display: inline-block;
		position: absolute;
		left: -2.5%;
		bottom: -1px;
		height: 3px;
		width: 105%;
		background: ${({ theme }) => theme.palette.secondary};
		transform: scaleX(0) translateY(3px);
		transform-origin: left;
		transition: ${({ theme }) => "transform" + ", " + theme.transition.normal};
	}
	&:hover:before,
	&:focus:before {
		transform: scaleX(1) translateY(3px);
		transition: ${({ theme }) => "transform" + ", " + theme.transition.normal};
	}
	${({ theme }) => theme.breakpoints.down("xs")} {
		display: none;
	}
`;

const menuItems = [...navLinks];

function NavMenu() {
	const handleMenuClick = () => {
		console.log("click");
	};
	// const { t } = useTranslation();

	return (
		<>
			<NavContainer>
				<NavList>
					{menuItems.map((item) => (
						<NavItem key={`item-${item.title}`}>
							<Link href={item.link}>{item.name}</Link>
						</NavItem>
					))}
				</NavList>
			</NavContainer>
			<Hamburger onClick={handleMenuClick} />
		</>
	);
}

export default NavMenu;
