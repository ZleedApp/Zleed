export default function SiteSeo({ description, title }) {
  return (
    <>
      <meta name="name" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="Zleed, Twitch, streaming, live, urmom" />
      <meta name="theme-color" content="#00B758" />

      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://zleed.ga" />
      <meta property="og:image" content="https://zleed.ga/favicon.ico" />
      <meta property="og:description" content={description} />
    </>
  );
}