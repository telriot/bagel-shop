import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import Image from "@components/Image";
import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import Button from "@components/Button";

interface IStapleCard {
	imageSrc: string;
	title: string;
	body: string;
	btnText: string;
}
interface IIndexedDiv extends HTMLAttributes<HTMLDivElement> {
	index: number;
}
const Card = styled.div<IIndexedDiv>`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	${({ theme }) => theme.breakpoints.down("md")} {
		flex-direction: ${({ index }) => (index % 2 === 0 ? "row" : "row-reverse")};
		height: 100%;
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
		flex-direction: column;
	}
`;
const ImgDiv = styled.div`
	height: 20vw;
	margin-bottom: 2vw;
	${({ theme }) => theme.breakpoints.down("md")} {
		flex: 1;
		height: 100%;
		margin-bottom: 0;
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
		margin-bottom: 0;
	}
`;
const StyledParagraph = styled(Paragraph)`
	flex: 1;
	margin-bottom: ${({ theme }) => theme.margin("d4").top};
	${({ theme }) => theme.breakpoints.down("sm")} {
		margin-bottom: ${({ theme }) => theme.margin("d4M").top};
	}
`;
const BodyDiv = styled.div<IIndexedDiv>`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	${({ theme }) => theme.breakpoints.down("md")} {
		padding: ${({ index }) => (index % 2 === 0 ? "0 0 0 5vw" : "0 5vw 0 0")};
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
		padding: 0;
		margin-top: ${({ theme }) => theme.margin("d4M").top};
	}
`;
function StapleCard({ staple, index }: { staple: IStapleCard; index: number }) {
	const { imageSrc, title, body, btnText } = staple;
	return (
		<Card index={index}>
			<ImgDiv>
				<Image objectFit="cover" alt={title} src={imageSrc} />
			</ImgDiv>
			<BodyDiv index={index}>
				{" "}
				<Heading variant={4}>{title}</Heading>
				<StyledParagraph>{body}</StyledParagraph>
				<Button>{btnText}</Button>
			</BodyDiv>
		</Card>
	);
}

export default StapleCard;
