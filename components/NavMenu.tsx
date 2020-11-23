import { HTMLAttributes } from "react";
import { navLinks } from "@config/index";
import Hamburger from "@components/Hamburger";
import Link from "next/link";
import styled from "styled-components";
import MobileMenuButton from "@features/layout/MobileMenuButton";

interface INavContainer extends HTMLAttributes<HTMLHeadingElement> {}
const NavContainer = styled.nav<INavContainer>`
	display: flex;
	justify-content: space-between;
	align-items: center;

	color: ${({ theme }) => theme.palette.text.primary};
	${({ theme }) => theme.breakpoints.down("md")} {
		justify-content: flex-end;
	}

	${({ theme }) => theme.breakpoints.down("xs")} {
		display: none;
	}
`;
const NavList = styled.div`
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
export const NavItem = styled.div`
	cursor: pointer;
	list-style: none;
	margin: 0 1rem;
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.xl};
	${({ theme }) => theme.breakpoints.down("sm")} {
		font-size: ${({ theme }) => theme.typography.l};
	}
`;

function NavMenu() {
	return (
		<>
			<NavContainer>
				<NavList>
					{navLinks.map((item) => (
						<NavItem key={`item-${item.title}`}>
							<Link href={item.link}>{item.name}</Link>
						</NavItem>
					))}
				</NavList>
			</NavContainer>
			<MobileMenuButton />
		</>
	);
}

export default NavMenu;
