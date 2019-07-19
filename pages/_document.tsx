import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { extractStyles } from "evergreen-ui";

interface DocumentProps {
  css: string;
  hydrationScript: React.ReactChild;
}

function trackingScript() {
  window["dataLayer"] = window["dataLayer"] || [];
  function gtag() {
    window["dataLayer"].push(arguments);
  }
  // @ts-ignore
  gtag("js", new Date());

  // @ts-ignore
  gtag("config", "UA-60624235-5");
}

export default class MyDocument extends Document<DocumentProps> {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const { css, hydrationScript } = extractStyles();

    return {
      ...page,
      css,
      hydrationScript
    };
  }

  componentDidMount(): void {
    trackingScript();
  }

  render() {
    const { css, hydrationScript } = this.props;

    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="google-site-verification"
            content="bjJSOEahdert-7mwVScrwTTUVR3nSe0bEj5YjevUNn0"
          />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>

        <body>
          <Main />
          {hydrationScript}
          <NextScript />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-60624235-5"
          />
        </body>
      </html>
    );
  }
}
