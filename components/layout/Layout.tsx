import React, { HTMLAttributes } from "react";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import styled from "styled-components";

interface ILayout extends HTMLAttributes<HTMLDivElement> {}
const Grid = styled.div`
	max-width: ${({ theme }) => theme.screenMaxWidth};
	margin: 0 auto;
	padding: 0 3vw;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
`;
function Layout({ children }: ILayout) {
	return (
		<>
			<Header />
			<Grid>{children}</Grid>
			<Footer />
		</>
	);
}

export default Layout;
