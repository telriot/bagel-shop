import IconWrapper from "@components/IconWrapper";
import { ShoppingCart } from "@styled-icons/entypo/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";

function CartButton() {
	const dispatch = useDispatch();

	return (
		<div>
			<IconWrapper size="2em">
				<ShoppingCart />
			</IconWrapper>
		</div>
	);
}

export default CartButton;
