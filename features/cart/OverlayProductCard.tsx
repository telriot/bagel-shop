import React from "react";
import { TProduct } from "./cartSlice";
import styled from "styled-components";
import Paragraph from "@components/Paragraph";
import Image from "@components/Image";
import ProductCard from "@components/ProductCard";
import { CircleWithPlus as Plus } from "@styled-icons/entypo/CircleWithPlus";
import { CircleWithMinus as Minus } from "@styled-icons/entypo/CircleWithMinus";
import IconWrapper from "@components/IconWrapper";
import {
	itemCountDecreased,
	itemCountIncreased,
	itemRemoved,
	selectCartItemsList,
} from "@features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const Card = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 0.75em;
`;

const ImgDiv = styled.div`
	height: 5em;
	width: 5em;
	border-radius: 4px;
	overflow: hidden;
`;

const BodyDiv = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: flex-start;
	padding: 0 0 0 0.75em;
	${({ theme }) => theme.breakpoints.down("md")} {
		padding: 0;
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
		padding: 0;
		margin-top: ${({ theme }) => theme.margin("d4M").top};
	}
`;
const ProductName = styled(Paragraph)`
	font-size: ${({ theme }) => theme.typography.m};
	line-height: ${({ theme }) => theme.lineHeight.m};

	font-weight: 700;
`;
const PriceTag = styled(Paragraph)`
	font-size: ${({ theme }) => theme.typography.m};
	line-height: ${({ theme }) => theme.lineHeight.m};
	margin-bottom: ${({ theme }) => theme.margin("m").bottom};
`;
const AddRemoveDiv = styled.div`
	display: flex;
	align-items: center;
`;
const QuantityTag = styled.span`
	font-size: ${({ theme }) => theme.typography.m};
	color: ${({ theme }) => theme.palette.text.primary};
	padding: 0 0.625em;
	font-family: ${({ theme }) => theme.fontFamily.body};
`;
function OverlayProductCard({ product }: { product: TProduct }) {
	const dispatch = useDispatch();
	const itemsList = useSelector(selectCartItemsList);
	const quantity = itemsList.filter((el) => el === product.id).length;
	const handleAdd = () => dispatch(itemCountIncreased(product.id));
	const handleRemove = () => {
		dispatch(itemCountDecreased(product.id));
		quantity === 1 && dispatch(itemRemoved(product.id));
	};

	return (
		<Card>
			<ImgDiv>
				<Image alt="Cart product" src={product.img} />
			</ImgDiv>
			<BodyDiv>
				<ProductName noMargin>{product.name}</ProductName>
				<PriceTag noMargin>{product.price} yen per unit</PriceTag>
				<AddRemoveDiv>
					<IconWrapper onClick={handleRemove} size="1.5em">
						<Minus />
					</IconWrapper>
					<QuantityTag>{quantity}</QuantityTag>
					<IconWrapper onClick={handleAdd} size="1.5em">
						<Plus />
					</IconWrapper>
				</AddRemoveDiv>
			</BodyDiv>
		</Card>
	);
}

export default OverlayProductCard;
