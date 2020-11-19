import { TTypographySize } from "@declarations/styled";
import { DefaultTheme } from "styled-components";
const materialDesignScale: any = {
	xxs: 9.22,
	xs: 9.22,
	s: 11.52,
	m: 14.4,
	base: 18,
	l: 22.5,
	xl: 28.13,
	xxl: 28,
	d1: 20,
	d2: 24,
	d3: 34,
	d4: 48,
	d5: 60,
	d6: 96,
};
const multipliers: any = {
	base: 1, //Base font size multiplier
	m: 0.875, //Responsive multiplier for M
	s: 0.75, //Responsive multiplier for S
	lhb: 1.5, //Line height multiplier for body
	lhd: 1.3, //Line height multiplier for display
	mt: 1.5, //margin-top multiplier for display or separated paragraphs
	mb: 0.5, //margin-bottom multiplier for display or separated paragraphs
};

const getSize = (
	value: string,
	mod: "base" | "m" | "s" = "base",
	lineHeightMod: "base" | "lhb" | "lhd" = "base",
	fontSizes: any = materialDesignScale,
	mult: any = multipliers
) => {
	const measure = lineHeightMod === "base" ? "em" : "rem";
	const respMultiplier = mult[mod];
	const lhMultiplier = mult[lineHeightMod];
	return (fontSizes[value] / 16) * respMultiplier * lhMultiplier + measure;
};

const getMargin = (size: string, mult: any = multipliers) => {
	const parsedSize = parseFloat(size.replace("em", ""));
	return {
		top: parsedSize * mult["mt"] + "rem",
		bottom: parsedSize * mult["mb"] + "rem",
	};
};

const theme: DefaultTheme = {
	breakpoints: {
		values: {
			xs: "28.75em",
			sm: "37.5em",
			md: "52.25em",
			lg: "64em",
			xl: "88em",
		},
		up: function (value) {
			return `@media only screen and (min-width: ${theme.breakpoints.values[value]})`;
		},
		down: function (value) {
			return `@media only screen and (max-width: ${theme.breakpoints.values[value]})`;
		},
	},
	fontFamily: {
		body: `"Open Sans",Meiryo,"Hiragino Kaku Gothic ProN","MS PGothic",sans-serif `,
		display: `"Roboto",Meiryo,"Hiragino Kaku Gothic ProN","MS PGothic",sans-serif`,
		// body: "Open Sans",
		// display: "Roboto",
	},
	palette: {
		primary: "#fff",
		hover: "#f8f8f8",
		secondary: "#1e1e1e",
		hoverSecondary: "#111",
		secondaryLight: "#222",
		tertiary: "#111",
		hoverTertiary: "#444",
		tertiaryLight: "#666",
		formGrey: "#d3d3d3",
		hoverFormGrey: "#c9c9c9",
		formGreyLight: "#e5e5e5",
		danger: "#f50057",
		complimentary: "#348AA7",
		text: {
			primary: "#222",
			secondary: "#f3f3f3",
			tertiary: "#444",
			extra: "#4F4F4F",
		},
	},

	typography: {
		xxs: getSize("xxs"),
		xs: getSize("xs"),
		s: getSize("s"),
		m: getSize("m"),
		base: getSize("base"),
		l: getSize("l"),
		xl: getSize("xl"),
		xxl: getSize("xxl"),
		d1S: getSize("d1", "s"),
		d1M: getSize("d1", "m"),
		d1: getSize("d1"),
		d2S: getSize("d2", "s"),
		d2M: getSize("d2", "m"),
		d2: getSize("d2"),
		d3S: getSize("d3", "s"),
		d3M: getSize("d3", "m"),
		d3: getSize("d3"),
		d4S: getSize("d4", "s"),
		d4M: getSize("d4", "m"),
		d4: getSize("d4"),
		d5S: getSize("d5", "s"),
		d5M: getSize("d5", "m"),
		d5: getSize("d5"),
		d6S: getSize("d6", "s"),
		d6M: getSize("d6", "m"),
		d6: getSize("d6"),
	},
	lineHeight: {
		xxs: getSize("xxs", "base", "lhb"),
		xs: getSize("xs", "base", "lhb"),
		s: getSize("s", "base", "lhb"),
		m: getSize("m", "base", "lhb"),
		base: getSize("base", "base", "lhb"),
		l: getSize("l", "base", "lhb"),
		xl: getSize("xl", "base", "lhb"),
		xxl: getSize("xxl", "base", "lhb"),
		d1S: getSize("d1", "s", "lhd"),
		d1M: getSize("d1", "m", "lhd"),
		d1: getSize("d1", "base", "lhd"),
		d2S: getSize("d2", "s", "lhd"),
		d2M: getSize("d2", "m", "lhd"),
		d2: getSize("d2", "base", "lhd"),
		d3S: getSize("d3", "s", "lhd"),
		d3M: getSize("d3", "m", "lhd"),
		d3: getSize("d3", "base", "lhd"),
		d4S: getSize("d4", "s", "lhd"),
		d4M: getSize("d4", "m", "lhd"),
		d4: getSize("d4", "base", "lhd"),
		d5S: getSize("d5", "s", "lhd"),
		d5M: getSize("d5", "m", "lhd"),
		d5: getSize("d5", "base", "lhd"),
		d6S: getSize("d6", "s", "lhd"),
		d6M: getSize("d6", "m", "lhd"),
		d6: getSize("d6", "base", "lhd"),
	},
	margin: function (value: TTypographySize) {
		return getMargin(theme.typography[value]);
	},
	shadows: function (value: number) {
		switch (value) {
			case 1:
				return "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)";

			case 2:
				return "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)";
			case 3:
				return "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)";
			case 4:
				return "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)";
			case 5:
				return "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)";
			case 6:
				return "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)";

			default:
				return "";
		}
	},
	letterSpacing: {
		tight: "-0.035em",
	},
	transition: {
		slow: ".4s",
		normal: ".3s",
		fast: ".2s",
	},
	screenMaxWidth: "77.5em",
	screenMaxWidthWide: "85em",
};

export default theme;
