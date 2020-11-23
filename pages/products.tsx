import Layout from "@components/layout/Layout";
import Image from "@components/Image";
import styled from "styled-components";
import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import Wrapper from "@components/TextWrapper";
import Button from "@components/Button";
import { staples, products, TProduct } from "@config/index";
import ProductCard from "@components/ProductCard";

const HeadingDiv = styled.div`
	grid-column: 1/-1;
	display: flex;
	justify-content: center;
	margin-top: ${({ theme }) => theme.margin("d3").top};
	margin-bottom: ${({ theme }) => theme.margin("d3").bottom};
`;

const ProductsDiv = styled.div`
	display: grid;
	gap: 3vw;
	grid-column: 1/-1;
	margin-bottom: 4vw;

	${({ theme }) => theme.breakpoints.down("xl")} {
	}
	${({ theme }) => theme.breakpoints.down("lg")} {
	}
	${({ theme }) => theme.breakpoints.down("md")} {
	}
`;

export default function Home() {
	return (
		<Layout>
			<HeadingDiv>
				<Heading variant={2}>Our Products</Heading>
			</HeadingDiv>
			<ProductsDiv>
				{products.map((product: TProduct, i: number) => (
					<ProductCard
						key={`product-card-${product.title}`}
						product={product}
					/>
				))}
			</ProductsDiv>
		</Layout>
	);
}
