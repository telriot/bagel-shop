import IconWrapper from "@components/IconWrapper";
import { ShoppingCart } from "@styled-icons/entypo/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectCartItemsList } from "./cartSlice";

const ItemCounter = styled.div`
	position: absolute;
	display: grid;
	place-items: center;
	background-color: red;
	color: ${({ theme }) => theme.palette.text.secondary};
	border-radius: 100px;
	height: 1rem;
	width: 1rem;
	z-index: 1000000;
	font-size: ${({ theme }) => theme.typography.xs};
	font-family: ${({ theme }) => theme.fontFamily.body};
	transform: translate(1em, -0.5em);
`;
function CartButton() {
	const dispatch = useDispatch();
	const itemsList = useSelector(selectCartItemsList);

	return (
		<IconWrapper size="2em">
			<ItemCounter>{itemsList.length}</ItemCounter>
			<ShoppingCart />
		</IconWrapper>
	);
}

export default CartButton;
