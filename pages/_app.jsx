import "../styles.css";
import Head from "next/head";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  document.documentElement.lang = "en";
  return (
    <>
      <Head>
        <title>Room Homepage</title>
        <link
          rel="stylesheet"
          href="https://fonts.google.com/specimen/Spartan"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
