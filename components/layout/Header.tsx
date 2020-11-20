import styled from "styled-components";
import Brand from "@components/Brand";
import NavMenu from "@components/NavMenu";
import SocialMedia from "@components/SocialMedia";
const Container = styled.header`
	top: 0;
	left: 0;
	right: 0;
	max-width: ${({ theme }) => theme.screenMaxWidth};
	display: flex;
	margin: 0 auto;
	padding: 1em 2em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 1000;
	${({ theme }) => theme.breakpoints.down("md")} {
		flex-direction: row-reverse;
		padding: 1em 1.5em;
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
	}
`;
const NavDiv = styled.div`
	flex: 0.333333;
	${({ theme }) => theme.breakpoints.down("md")} {
		flex: 0.5;
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
		width: max-content;
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
		flex: 0;
	}
`;
const BrandDiv = styled.div`
	flex: 0.333333;
	display: flex;
	justify-content: center;

	${({ theme }) => theme.breakpoints.down("md")} {
		justify-content: flex-start;
		flex: 0.5;
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
		flex: 1;
	}
`;
const SocialDiv = styled.div`
	flex: 0.333333;
	display: flex;
	justify-content: flex-end;

	${({ theme }) => theme.breakpoints.down("md")} {
		display: none;
	}
`;
function Header() {
	return (
		<Container>
			<NavDiv>
				<NavMenu />
			</NavDiv>
			<BrandDiv>
				<Brand />
			</BrandDiv>
			<SocialDiv>
				<SocialMedia />
			</SocialDiv>
		</Container>
	);
}

export default Header;
