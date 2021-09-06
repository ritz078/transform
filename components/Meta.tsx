import Head from "next/head";

export const Meta = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta name="og:url" content={url} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="ritz078" />
    </Head>
  );
};
