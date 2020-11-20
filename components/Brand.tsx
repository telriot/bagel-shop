import { HTMLAttributes } from "react";
import Link from "next/link";
import styled from "styled-components";
import { siteInfo } from "@public/config";
interface IBrand extends HTMLAttributes<HTMLHeadingElement> {}
interface IStyledBrand extends HTMLAttributes<HTMLHeadingElement> {}
const BrandContainer = styled.div`
	position: relative;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const StyledBrand = styled.div<IStyledBrand>`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.d2};
	cursor: pointer;
	color: ${({ theme }) => theme.palette.text.primary};
	${({ theme }) => theme.breakpoints.down("sm")} {
		font-size: ${({ theme }) => theme.typography.d2M};
	}
`;
const StyledSub = styled.div`
	font-family: ${({ theme }) => theme.fontFamily.display};
	font-size: ${({ theme }) => theme.typography.d6};
	transform: translateY(-1.5em);
	${({ theme }) => theme.breakpoints.down("sm")} {
		font-size: ${({ theme }) => theme.typography.d6M};
		transform: translateY(-1.375em);
	}
`;

function Brand() {
	return (
		<div>
			<Link href="/">
				<BrandContainer>
					<StyledBrand>Juri&rsquo; BAGELS</StyledBrand>
					<StyledSub>{siteInfo.subtitle}</StyledSub>
				</BrandContainer>
			</Link>
		</div>
	);
}

export default Brand;
