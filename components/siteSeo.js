export default function SiteSeo({ description, title }) {
  return (
    <>
      <meta name="name" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="Zleed, Twitch, streaming, live, urmom" />
      <meta name="theme-color" content="#00796B" />

      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://zleed.ga" />
      <meta property="og:image" content="https://zleed.ga/favicon.ico" />
      <meta property="og:description" content={description} />
    </>
  );
}

/*
<meta name="name" content="TheClashFruit &bull; Home" />
    <meta name="description" content="" />
    <meta name="keywords" content="TheClashFruit, tcf, blokkok, susman, the, clash, fruit" />
    <meta name="theme-color" content="#00796B" />

    <meta property="og:title" content="TheClashFruit &bull; Home" />
    <meta property="og:url" content="https://theclashfruit.me" />
    <meta property="og:image" content="https://www.theclashfruit.me/favicon.ico" />
    <meta property="og:description" content="" />
 */