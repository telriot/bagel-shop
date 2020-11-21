import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Linkedin, Facebook, Twitter } from "@styled-icons/entypo-social";
import { StyledIconBase } from "@styled-icons/styled-icon";
interface IIconStyleWrapper extends HTMLAttributes<HTMLDivElement> {
	invert?: boolean;
	size?: "default" | "large";
}

export const IconStyleWrapper = styled.div<IIconStyleWrapper>`
	${StyledIconBase} {
		height: 2.25em;
		width: 2.25em;
		margin: 0 1em;
		transition: color 0.3s;
		cursor: pointer;
		color: ${({ invert, theme }) =>
			invert ? theme.palette.text.secondary : theme.palette.text.primary};
		&:hover {
			color: ${({ invert, theme }) =>
				invert ? theme.palette.secondary : "#111"};
		}
		${({ theme }) => theme.breakpoints.down("sm")} {
			height: 2.75em;
			width: 2.75em;
		}
	}
`;
const Container = styled.div`
	max-width: 13em;

	${({ theme }) => theme.breakpoints.down("sm")} {
		max-width: 20em;
	}
`;
const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 1;
	padding: 0.375rem 0;
`;
const HiddenSpan = styled.span`
	clip: rect(1px, 1px, 1px, 1px);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

const links = [
	{
		icon: <Facebook />,
		label: "Facebook",
		href: "https://www.facebook.com//",
	},

	{
		icon: <Linkedin />,
		label: "Linkedin",
		href: "https://www.linkedin.com",
	},

	{
		icon: <Twitter />,
		label: "Twitter",
		href: "https://www.twitter.com/",
	},
];

function SocialNav({ invert }: { invert?: boolean }) {
	return (
		<IconStyleWrapper invert={invert}>
			<Container>
				<StyledNav>
					{links.map((link) => (
						<Link href={link.href} key={link.href}>
							<>
								{link.icon}
								<HiddenSpan>{link.label}</HiddenSpan>
							</>
						</Link>
					))}
				</StyledNav>
			</Container>
		</IconStyleWrapper>
	);
}

export default SocialNav;
