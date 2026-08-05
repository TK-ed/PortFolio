import { React, useEffect } from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/themes.css";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		if (localStorage.getItem("theme")) {
			document.documentElement.setAttribute(
				"data-theme",
				localStorage.getItem("theme"),
			);
		}
	}, []);

	return (
		<Layout>
			<Head title={`TK-ed | ${pageProps.title}`} />
			<Component {...pageProps} />
			<Analytics />
		</Layout>
	);
}

export default MyApp;
