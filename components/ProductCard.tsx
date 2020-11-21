import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import Image from "@components/Image";
import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import Button from "@components/Button";
import { TProduct } from "@features/cart/cartSlice";
import Select, { ValueType } from "react-select";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import theme from "@styles/theme";

interface IProductCard {
	imageSrc: string;
	title: string;
	body: string;
	variants: Array<TProduct>;
}
type TOption = {
	value: string;
	label: string;
};

const Card = styled.div`
	width: 100%;
	display: flex;
	${({ theme }) => theme.breakpoints.down("md")} {
		flex-direction: column;
	}
`;
const ImgDiv = styled.div`
	flex: 0.9;
	padding: 0 3vw;
	${({ theme }) => theme.breakpoints.down("md")} {
		flex: 1;
		padding: 3vw 0;
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
	}
`;
const StyledParagraph = styled(Paragraph)`
	flex: 1;

	margin-bottom: ${({ theme }) => theme.margin("d4").top};
	${({ theme }) => theme.breakpoints.down("sm")} {
		margin-bottom: ${({ theme }) => theme.margin("d4M").top};
	}
`;
const BodyDiv = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: flex-start;
	${({ theme }) => theme.breakpoints.down("md")} {
		padding: 0;
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
		padding: 0;
		margin-top: ${({ theme }) => theme.margin("d4M").top};
	}
`;
const SelectDiv = styled.div`
	min-width: 14em;
	margin-bottom: 1em;
`;

function ProductCard({ product }: { product: IProductCard }) {
	const options: Array<TOption> = product.variants.map(({ id, name }) => ({
		value: id,
		label: name,
	}));
	const { imageSrc, title, body } = product;
	const themeContext = useContext(ThemeContext);
	const [variant, setVariant] = React.useState<TOption>(options[0]);
	const handleSelectChange = (option: any) => setVariant(option);

	return (
		<Card>
			<ImgDiv>
				<Image objectFit="cover" alt={title} src={imageSrc} />
			</ImgDiv>
			<BodyDiv>
				{" "}
				<Heading variant={4}>{title}</Heading>
				<StyledParagraph>{body}</StyledParagraph>
				<SelectDiv>
					<Select
						options={options}
						value={variant}
						onChange={(value) => handleSelectChange(value)}
						label="Product Variants"
						styles={{
							singleValue: () => {
								return {
									fontFamily: theme.fontFamily.body,
								};
							},
							menu: () => {
								return {
									position: "absolute",
									width: "100%",
									zIndex: 1000,
									background: themeContext.palette.formGreyLight,
									fontFamily: theme.fontFamily.body,
								};
							},
						}}
						theme={(theme) => ({
							...theme,
							borderRadius: 0,
							colors: {
								...theme.colors,
								primary25: themeContext.palette.complimentary,
								primary: themeContext.palette.secondary,
							},
						})}
					/>
				</SelectDiv>
				<Button>Add to cart</Button>
			</BodyDiv>
		</Card>
	);
}

export default ProductCard;
