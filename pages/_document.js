import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(
      ctx,
    );
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          <meta charSet="utf-8" />
          <meta
            httpEquiv="x-ua-compatible"
            content="ie=edge"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <meta name="description" content="Mükemmel işini bul" />
          <meta
            property="og:url"
            content="https://mukemmelis.com"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="mukemmelis" />
          <meta
            property="og:description"
            content="Mükemmel işini bul"
          />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:url"
            content="https://mukemmelis.com"
          />
          <meta name="twitter:title" content="mukemmelis" />
          <meta
            name="twitter:description"
            content="Mükemmel işini bul"
          />
          <meta name="theme-color" content="#000000" />
          <meta name="application-name" content="mukemmelis" />
          <meta
            name="apple-mobile-web-app-capable"
            content="yes"
          />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json"></link>
          <meta
            name="apple-mobile-web-app-title"
            content="mukemmelis"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
