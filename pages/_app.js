import dynamic from "next/dynamic";
import Head from "next/head";

// Css - Global
import "@styles/globals.css";

// Layouts - Components
const Layouts = dynamic(() => import("@layouts/Layouts"));

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <meta name="keywords" content="" />
        <meta name="author" content="Coinvestasi" />
        <meta name="theme-color" content="#2B4A86" />
        <meta name="msapplication-navbutton-color" content="#2B4A86" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#2B4A86" />
      </Head>

      {/* Main */}
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
};

export default MyApp;
