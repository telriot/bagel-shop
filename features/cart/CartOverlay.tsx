import styled from "styled-components";
import {
	selectCartItemsById,
	selectCartItemsList,
	selectCartTotal,
	toggleCartIsOpen,
} from "./cartSlice";
import { useSelector, useDispatch } from "react-redux";
import OverlayProductCard from "./OverlayProductCard";
import Button from "@components/Button";
import { HTMLAttributes } from "react";
import { useRouter } from "next/router";
import { checkoutStepChanged } from "@features/checkout/checkoutSlice";
interface IOverlay extends HTMLAttributes<HTMLDivElement> {
	visible: boolean;
	relative?: boolean;
}
const Overlay = styled.div<IOverlay>`
	position: ${({ relative }) => (relative ? "relative" : "absolute")};
	background-color: ${({ theme }) => theme.palette.primary};
	z-index: 1000000;
	min-height: 10em;
	min-width: 18em;
	transform: ${({ relative }) => (relative ? "" : "translate(-80%, 1em)")};
	box-shadow: ${({ theme }) => theme.shadows(4)};
	padding: 0.5em 0.75em;
	display: ${({ visible, relative }) =>
		visible || relative ? "block" : "none"};
	visibility: ${({ visible, relative }) =>
		visible || relative ? "visible" : "hidden"};
`;
const ItemsDiv = styled.div`
	max-height: 22em;
	overflow-y: scroll;
	scrollbar-width: thin;
	scrollbar-color: ${({ theme }) =>
		theme.palette.secondaryLight + " " + theme.palette.primary};
	&::-webkit-scrollbar {
		width: 3px;
	}
	&::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.palette.primary};
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.palette.secondaryLight};
	}
`;
const Divider = styled.div`
	background-color: ${({ theme }) => theme.palette.formGreyLight};
	width: 90%;
	margin: 1em auto;
	height: 1px;
`;
const CartTotalDiv = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${({ theme }) => theme.margin("m").bottom};
`;
const CustomSpan = styled.span`
	font-family: ${({ theme }) => theme.fontFamily.body};
	font-size: ${({ theme }) => theme.typography.m};
	line-height: ${({ theme }) => theme.lineHeight.m};
	color: ${({ theme }) => theme.palette.text.tertiary};
`;
const TotalPrice = styled.span`
	font-family: ${({ theme }) => theme.fontFamily.body};
	font-size: ${({ theme }) => theme.typography.m};
	line-height: ${({ theme }) => theme.lineHeight.m};
	font-weight: 700;
`;

function CartOverlay({
	visible,
	relative,
	noButton,
}: {
	visible: boolean;
	relative?: boolean;
	noButton?: boolean;
}) {
	const itemsById = useSelector(selectCartItemsById);
	const total = useSelector(selectCartTotal);
	const router = useRouter();
	const dispatch = useDispatch();
	const handleCheckout = () => {
		dispatch(checkoutStepChanged(0));
		dispatch(toggleCartIsOpen());
		router.push("/checkout");
	};
	return (
		<Overlay relative={relative} visible={visible}>
			<ItemsDiv>
				{itemsById.length ? (
					itemsById.map((item) => (
						<OverlayProductCard
							key={item.id}
							product={itemsById.find((el) => el.id === item.id)!}
						/>
					))
				) : (
					<CustomSpan>There is nothing here yet!</CustomSpan>
				)}
			</ItemsDiv>

			<Divider />
			<CartTotalDiv>
				<CustomSpan>Total cart price:</CustomSpan>
				<TotalPrice>{total} Yen</TotalPrice>
			</CartTotalDiv>
			{noButton ? null : (
				<Button onClick={handleCheckout} size="small" fullWidth>
					Checkout
				</Button>
			)}
		</Overlay>
	);
}

export default CartOverlay;
