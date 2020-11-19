import "styled-components";
export type TSize = "xs" | "sm" | "md" | "lg" | "xl";
type TTypographySize =
	| "xxs"
	| "xs"
	| "s"
	| "m"
	| "base"
	| "l"
	| "xl"
	| "xxl"
	| "d1S"
	| "d1M"
	| "d1"
	| "d2S"
	| "d2M"
	| "d2"
	| "d3S"
	| "d3M"
	| "d3"
	| "d4"
	| "d4S"
	| "d4M"
	| "d5S"
	| "d5M"
	| "d5"
	| "d6S"
	| "d6M"
	| "d6";
// type TPaletteScheme = { light"| main: string; dark: string };
type TPaletteText = {
	primary: string;
	secondary: string;
	tertiary: string;
	extra: string;
};

type TTypography = {
	xxs: string;
	xs: string;
	s: string;
	m: string;
	base: string;
	l: string;
	xl: string;
	xxl: string;
	d1S: string;
	d1M: string;
	d1: string;
	d2S: string;
	d2M: string;
	d2: string;
	d3S: string;
	d3M: string;
	d3: string;
	d4: string;
	d4S: string;
	d4M: string;
	d5S: string;
	d5M: string;
	d5: string;
	d6S: string;
	d6M: string;
	d6: string;
};
type TShadows = {
	light: string;
	base: string;
	dark: string;
};
type TSpeed = {
	slow: string;
	normal: string;
	fast: string;
};

declare module "styled-components" {
	export interface DefaultTheme {
		breakpoints: {
			values: {
				xs: string | number;
				sm: string | number;
				md: string | number;
				lg: string | number;
				xl: string | number;
			};
			up: (value: TSize) => string;
			down: (value: TSize) => string;
		};
		palette: {
			primary: string;
			secondary: string;
			hover: string;
			hoverSecondary: string;
			secondaryLight: string;
			tertiary: string;
			hoverTertiary: string;
			tertiaryLight: string;
			formGrey: string;
			formGreyLight: string;
			hoverFormGrey: string;
			danger: string;
			complimentary: string;

			text: TPaletteText;
		};
		typography: TTypography;
		fontFamily: {
			body: string;
			display: string;
		};
		lineHeight: TTypography;
		margin: (value: TTypographySize) => any;
		shadows: (value: 1 | 2 | 3 | 4 | 5 | 6) => any;
		//shadows: TShadows;
		letterSpacing: { tight: string };
		transition: TSpeed;
		screenMaxWidth: string;
		screenMaxWidthWide: string;
	}
}
