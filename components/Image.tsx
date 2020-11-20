import { HTMLAttributes } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

interface IStyledImageProps extends HTMLAttributes<HTMLImageElement> {
	objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
	lazy?: string;
	src?: string;
	flatten?: boolean;
	expandOnHover?: boolean;
	webp?: string;
	type: string;
}

interface IImageProps extends HTMLAttributes<HTMLImageElement> {
	objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
	lazy?: string;
	flatten?: boolean;
	expandOnHover?: boolean;
	alt: string;
	src: string;
	webp?: string;
	srcSet?: string;
	webpSrcSet?: string;
}
const StyledImage = styled.img<IStyledImageProps>`
	width: 100%;
	height: 100%;
	object-fit: ${({ objectFit }) => objectFit};
	background-image: ${({ lazy }) => (lazy ? lazy : "")};
	background-repeat: no-repeat;
	background-size: cover;
	transition: transform 0.5s ease;
	&:hover {
		transform: ${({ expandOnHover }) => (expandOnHover ? "scale(1.05)" : "")};
	}
	filter: ${({ flatten }) => (flatten ? "brightness(0%) opacity(83%)" : "")};
`;

function Image({
	objectFit = "fill",
	lazy,
	flatten,
	alt,
	src,
	webp,
	srcSet,
	webpSrcSet,
	...props
}: IImageProps) {
	const themeContext = useContext(ThemeContext);
	const buildResponsiveSizes = (breakpoints: any) => {
		const sizes = Object.values(breakpoints).map((value: any) => {
			const parsedSize = parseFloat(value.replace("em", "")) + "px";
			return `(max-width: ${parsedSize}) ${parsedSize} `;
		});
		return sizes.join();
	};
	const sizes = buildResponsiveSizes(themeContext.breakpoints.values);
	return (
		<picture>
			<source sizes={sizes} srcSet={webpSrcSet || webp} type="image/webp" />
			<StyledImage
				lazy={lazy}
				flatten={flatten}
				objectFit={objectFit}
				alt={alt}
				{...props}
				type="image/jpg"
				sizes={sizes}
				srcSet={srcSet || src}
			/>
		</picture>
	);
}

export default Image;
