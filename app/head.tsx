export default function Head() {
  return (
    <>
      <title>MattGPT</title>
      <meta property="og:title" content="MattGPT" key="title" />
      <meta
        name="description"
        content="A natural language processing tool driven by AI technology"
      ></meta>
      <meta name="author" content="Matthew Malone" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="language" content="English"></meta>
      <meta property="og:image" content={"/mattGPThomescreen.png"} />
      <meta property="twitter:image" content={"/mattGPThomescreen.png"} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
