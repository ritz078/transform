import App, { Container } from "next/app";
import React from "react";
import Head from "next/head";
import Router, { withRouter } from "next/router";
import Layout from "../components/Layout";
import NProgress from "nprogress";
import { routes, activeRouteData } from "../utils/routes";

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = url => {
  if (url.indexOf("code=") === -1) {
    NProgress.start();
  }
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    routes.forEach(({ path }) => Router.prefetch(path));
  }

  render() {
    const { Component, pageProps, router } = this.props;

    const { label, desc, title } = activeRouteData(router.pathname) || {};

    return (
      <Layout pathname={router.pathname}>
        <Head>
          <title>{title || label}</title>
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <meta
            name="google-site-verification"
            content="bjJSOEahdert-7mwVScrwTTUVR3nSe0bEj5YjevUNn0"
          />
          <meta name="description" content={desc} />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.min.css"
          />
          <link rel="stylesheet" href="/static/styles.css" />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="#2196f3" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Transform" />
          <meta name="apple-mobile-web-app-title" content="Transform" />
          <meta name="theme-color" content="#2196f3" />
          <meta name="msapplication-navbutton-color" content="#2196f3" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="./" />
          <meta name="msapplication-TileColor" content="#2196f3" />
          <meta
            name="msapplication-TileImage"
            content="/static/images/icons/icon-144x144.png"
          />
        </Head>
        <Container>
          <Component url={router} {...pageProps} />
        </Container>
      </Layout>
    );
  }
}

export default withRouter(MyApp);
