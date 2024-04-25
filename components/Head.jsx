import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Tharun's Portfolio."
      />
      <meta
        name="keywords"
        content="pf"
      />
      <meta property="og:title" content="TK-ed Portfolio" />
      <meta
        property="og:description"
        content="TK-ed Portfolio"
      />
      <meta property="og:image" content="/home.png" />
      <meta property="og:url" content="tk-ed.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'TK-ed',
};
