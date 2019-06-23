import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { extractStyles } from "evergreen-ui";

interface DocumentProps {
  css: string;
  hydrationScript: React.ReactChild;
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

  render() {
    const { css, hydrationScript } = this.props;

    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: css }} />
          <style>{`* {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
}

.monaco-editor {
    padding-top: 15px;
}

.rc-collapse {
  width: 100%;
}
`}</style>
        </Head>

        <body>
          <Main />
          {hydrationScript}
          <NextScript />
        </body>
      </html>
    );
  }
}
