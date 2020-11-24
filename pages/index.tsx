import Layout from "@components/layout/Layout";
import Image from "@components/Image";
import styled from "styled-components";
import Heading from "@components/Heading";
import Paragraph from "@components/Paragraph";
import Wrapper from "@components/TextWrapper";
import Button from "@components/Button";
import { staples } from "../config/index";
import StapleCard from "@components/StapleCard";

const MainBanner = styled.div`
	grid-column: 1/-1;
	height: 70vh;
`;
const IntroBannerText = styled.div`
	grid-column: 1/7;
	margin: 12em 0 6em;
	padding: 4vw;
	${({ theme }) => theme.breakpoints.down("md")} {
		grid-column: 1/-1;
		margin: 4em 0 0;
	}
`;
const IntroBannerPic = styled.div`
	grid-column: 7/-1;
	margin: 12em 0 6em;
	padding-left: 2vw;
	${({ theme }) => theme.breakpoints.down("lg")} {
		margin: 6em 0 3em;
	}
	${({ theme }) => theme.breakpoints.down("md")} {
		position: relative;
		grid-column: 1/-1;
		margin: 0;
		height: 35vh;
	}
`;
const ButtonDivText = styled.div`
	margin-top: 6em;
	${({ theme }) => theme.breakpoints.down("md")} {
		display: none;
	}
`;
const ButtonDivImg = styled.div`
	display: none;
	${({ theme }) => theme.breakpoints.down("md")} {
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;
const HeadingDiv = styled.div`
	grid-column: 1/-1;
	display: flex;
	justify-content: center;
	margin-top: ${({ theme }) => theme.margin("d3").top};
	margin-bottom: ${({ theme }) => theme.margin("d3").bottom};
`;
const StaplesGrid = styled.div`
	grid-column: 1/-1;
	display: grid;
	gap: 3vw;
	grid-template-columns: repeat(3, 1fr);
	${({ theme }) => theme.breakpoints.down("md")} {
		grid-template-columns: 1fr;
		gap: 12vw;
	}
`;
const GalleryGrid = styled.div`
	grid-column: 1/-1;
	display: grid;
	gap: 3vw;
	grid-template-columns: repeat(4, 1fr);
	margin-bottom: 4vw;

	${({ theme }) => theme.breakpoints.down("xl")} {
		grid-template-columns: repeat(3, 1fr);
	}
	${({ theme }) => theme.breakpoints.down("lg")} {
		grid-template-columns: repeat(2, 1fr);
	}
	${({ theme }) => theme.breakpoints.down("md")} {
		grid-template-columns: 1fr;
	}
`;
const GalleryImgDiv = styled.div`
	height: 25em;
	width: 100%;
`;

const galleryPics = Array(12).fill("pic");
export default function Home() {
	return (
		<Layout>
			<MainBanner>
				<Image objectFit="cover" alt="Food Truck" src="/pics/foodTruck.jpg" />
			</MainBanner>
			<IntroBannerText>
				<Heading variant={3}>
					We are a small home bakery specialized in bagels, scones and a few
					more tasty things.
				</Heading>
				<Wrapper maxWidth="90%">
					<Paragraph>
						Some of the things I write here have no sense, but it is important
						to understand that it is not about the contents, it is just about
						the text. I would rather do this than using lorem ipsum everywhere.
					</Paragraph>
				</Wrapper>
				<ButtonDivText>
					<Button>To our menu</Button>
				</ButtonDivText>
			</IntroBannerText>
			<IntroBannerPic>
				<Image
					objectFit="cover"
					alt="Lots of bagels"
					src="/pics/mainBagels.jpg"
				/>
				<ButtonDivImg>
					<Button invert>To our menu</Button>
				</ButtonDivImg>
			</IntroBannerPic>
			<HeadingDiv>
				<Heading variant={3}>Our Staples</Heading>
			</HeadingDiv>
			<StaplesGrid>
				{staples.map((staple, i) => (
					<StapleCard key={staple.title} index={i} staple={staple} />
				))}
			</StaplesGrid>
			<HeadingDiv>
				<Heading variant={3}>Recent bakes & fun stuff</Heading>
			</HeadingDiv>

			<GalleryGrid>
				{galleryPics.map((_, i) => (
					<GalleryImgDiv key={`gall-img-${i}`}>
						<Image
							objectFit="cover"
							alt={`bakes ${i}`}
							src={`/pics/${i}-600w.jpg`}
						/>
					</GalleryImgDiv>
				))}
			</GalleryGrid>
		</Layout>
	);
}
