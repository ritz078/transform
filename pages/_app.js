import App, { Container } from "next/app";
import React from "react";
import { withRouter } from "next/router";
import Layout from "../components/Layout";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Layout pathname={router.pathname}>
        <Container>
          <Component url={router} {...pageProps} />
        </Container>
      </Layout>
    );
  }
}

export default withRouter(MyApp);
