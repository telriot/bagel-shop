import { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import theme from "@styles/theme";
import fontTheme from "../styles/font";

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;

}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-size: 16px;
  padding: 0;
  margin: 0;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color:#fff;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>
				{fontTheme}
			</style>
			<Head>
				<title>Juri's Bagels</title>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				{" "}
				<Component {...pageProps} />{" "}
			</ThemeProvider>
		</>
	);
}

export default MyApp;
