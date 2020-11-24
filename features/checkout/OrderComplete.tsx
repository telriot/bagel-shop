import React from "react";
import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectOrderReview } from "./checkoutSlice";
const CenterCol = styled.div`
	grid-column: 3/11;
`;
function OrderComplete() {
	const review = useSelector(selectOrderReview);
	const { name, address, items, total } = review;
	return (
		<CenterCol>
			<Heading variant={3}>Your Order</Heading>
			<Paragraph>{name}</Paragraph>
			<Paragraph>
				{address.line1} {address.line2} {address.city}
			</Paragraph>
			<Paragraph>{items.join(",")}</Paragraph>
			<Paragraph>{total} Yen</Paragraph>
		</CenterCol>
	);
}

export default OrderComplete;
