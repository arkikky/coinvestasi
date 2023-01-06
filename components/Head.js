import Head from "next/head";

const HeadSeo = ({ siteTitle, title, siteDescription, description, imags }) => {
  return (
    <>
      <Head>
        <title>{`${siteTitle} | ${title}`}</title>
        <meta name="title" content={title} />
        <meta name="description" content={siteDescription} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.coinvestasi.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteTitle} />
        {imags !== null && <meta property="og:image" content={imags} />}
        <meta property="og:locale" content="id_ID" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@coinvestasi" />
        <meta property="twitter:creator" content={"@coinvestasi"} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        {imags !== null && <meta property="twitter:image" content={imags} />}
      </Head>
    </>
  );
};

export default HeadSeo;
