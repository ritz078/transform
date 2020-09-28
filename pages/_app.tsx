import React from "react";
import App from "next/app";
import { Button, Pane } from "evergreen-ui";
import Navigator from "@components/Navigator";
import "@styles/main.css";

import NProgress from "nprogress";
import Router from "next/router";
import { activeRouteData } from "@utils/routes";
import Head from "next/head";

const logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="90px"
    height="19px"
    viewBox="0 0 306 62"
    style={{
      marginTop: -4
    }}
  >
    <path
      fill="#fff"
      fillRule="nonzero"
      stroke="none"
      strokeWidth={1}
      d="M172.339 71.14V98h-7.91V71.14h-3.376v-7.382h3.375V51.207h7.91v12.55h6.153v7.384h-6.152zm11.989-7.382h7.91v3.058c1.453-1.523 2.742-2.566 3.867-3.129 1.149-.585 2.508-.878 4.078-.878 2.086 0 4.266.68 6.54 2.039L203.1 72.09c-1.5-1.078-2.964-1.617-4.394-1.617-4.313 0-6.469 3.257-6.469 9.773V98h-7.91V63.758zm52.138 0h7.945V98h-7.945v-3.586c-3.258 3.047-6.762 4.57-10.512 4.57-4.734 0-8.648-1.71-11.742-5.132-3.07-3.493-4.606-7.852-4.606-13.079 0-5.132 1.536-9.41 4.606-12.832 3.07-3.421 6.914-5.132 11.531-5.132 3.985 0 7.559 1.64 10.723 4.921v-3.972zm-18.774 17.015c0 3.282.88 5.954 2.637 8.016 1.805 2.086 4.078 3.129 6.82 3.129 2.93 0 5.297-1.008 7.102-3.023 1.805-2.086 2.707-4.735 2.707-7.946 0-3.21-.902-5.86-2.707-7.945-1.805-2.04-4.148-3.059-7.031-3.059-2.719 0-4.992 1.032-6.82 3.094-1.805 2.086-2.708 4.664-2.708 7.734zm37.162-17.015h7.945v3.164c2.766-2.742 5.883-4.113 9.352-4.113 3.984 0 7.09 1.253 9.316 3.761 1.922 2.133 2.883 5.614 2.883 10.442V98h-7.945V78.875c0-3.375-.47-5.707-1.407-6.996-.914-1.313-2.578-1.969-4.992-1.969-2.625 0-4.488.867-5.59 2.602-1.078 1.71-1.617 4.699-1.617 8.965V98h-7.945V63.758zm59.837 5.836l-6.54 3.48c-1.03-2.11-2.308-3.164-3.831-3.164-.727 0-1.348.24-1.864.72-.515.481-.773 1.097-.773 1.847 0 1.312 1.523 2.613 4.57 3.902 4.196 1.805 7.02 3.469 8.473 4.992 1.453 1.524 2.18 3.574 2.18 6.152 0 3.305-1.22 6.07-3.657 8.297-2.367 2.11-5.226 3.164-8.578 3.164-5.742 0-9.808-2.8-12.199-8.402l6.75-3.129c.938 1.64 1.652 2.684 2.145 3.129.96.89 2.109 1.336 3.445 1.336 2.672 0 4.008-1.219 4.008-3.656 0-1.407-1.032-2.719-3.094-3.938-.797-.398-1.594-.785-2.39-1.16-.798-.375-1.606-.762-2.426-1.16-2.297-1.125-3.914-2.25-4.852-3.375-1.195-1.43-1.793-3.27-1.793-5.52 0-2.976 1.02-5.437 3.059-7.382 2.086-1.946 4.617-2.918 7.593-2.918 4.383 0 7.641 2.261 9.774 6.785zm17.966 1.547V98h-7.945V71.14h-2.813v-7.382h2.813V50.539c0-4.312.75-7.36 2.25-9.14 2.062-2.485 5.062-3.727 9-3.727 1.406 0 3.175.41 5.308 1.23v8.086l-.808-.422c-1.711-.867-3.118-1.3-4.22-1.3-1.405 0-2.355.504-2.847 1.511-.492.985-.738 2.883-.738 5.696v11.285h8.613v7.383h-8.613zm12.903 9.492c0-4.946 1.77-9.153 5.309-12.621 3.539-3.469 7.851-5.203 12.937-5.203 5.11 0 9.446 1.746 13.008 5.238 3.516 3.492 5.274 7.781 5.274 12.867 0 5.133-1.77 9.434-5.309 12.902-3.562 3.446-7.933 5.168-13.113 5.168-5.133 0-9.434-1.757-12.903-5.273-3.468-3.469-5.203-7.828-5.203-13.078zm8.086.14c0 3.422.914 6.13 2.742 8.122 1.875 2.015 4.348 3.023 7.418 3.023 3.094 0 5.567-.996 7.418-2.988 1.852-1.993 2.778-4.653 2.778-7.98 0-3.329-.926-5.99-2.778-7.981-1.875-2.016-4.347-3.024-7.418-3.024-3.023 0-5.472 1.008-7.347 3.024-1.875 2.015-2.813 4.617-2.813 7.804zm37.267-17.015h7.91v3.058c1.453-1.523 2.742-2.566 3.867-3.129 1.149-.585 2.508-.878 4.079-.878 2.085 0 4.265.68 6.539 2.039l-3.622 7.242c-1.5-1.078-2.964-1.617-4.394-1.617-4.313 0-6.469 3.257-6.469 9.773V98h-7.91V63.758zm28.478 0h7.91v3.164c1.523-1.594 2.824-2.672 3.902-3.234 1.149-.586 2.59-.88 4.324-.88 3.868 0 6.926 1.688 9.176 5.063 2.485-3.375 5.848-5.062 10.09-5.062 7.711 0 11.566 4.675 11.566 14.027V98h-7.945V78.98c0-3.28-.398-5.601-1.195-6.96-.82-1.383-2.168-2.075-4.043-2.075-2.18 0-3.768.82-4.764 2.461-.996 1.64-1.494 4.278-1.494 7.91V98h-7.945V79.086c0-6.094-1.758-9.14-5.274-9.14-2.226 0-3.85.831-4.869 2.495-1.02 1.664-1.53 4.29-1.53 7.875V98h-7.91V63.758z"
      transform="translate(-161 -37)"
    />
  </svg>
);

function renderHeadWay() {
  if (!IN_BROWSER) return;

  const HW_config = {
    selector: ".transform-changelog", // CSS selector where to inject the badge
    account: "J0B24x",
    trigger: ".transform-changelog"
  };

  (function(src) {
    const tag = document.createElement("script");
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName("body")[0].appendChild(tag);

    tag.onload = () => {
      // @ts-ignore
      window.Headway.init(HW_config);
    };
  })("https://cdn.headwayapp.co/widget.js");
}

export default class extends App {
  timer: any;

  private stopProgress = () => {
    clearTimeout(this.timer);
    NProgress.done();
  };

  private startProgress = () => NProgress.start();

  private showProgressBar = () => {
    this.timer = setTimeout(this.startProgress, 300);
    Router.events.on("routeChangeComplete", this.stopProgress);
    Router.events.on("routeChangeError", this.stopProgress);
  };

  componentDidMount(): void {
    Router.events.on("routeChangeStart", this.showProgressBar);
  }

  componentWillUnmount(): void {
    Router.events.off("routeChangeComplete", this.stopProgress);
    Router.events.off("routeChangeError", this.stopProgress);
    Router.events.off("routeChangeStart", this.showProgressBar);
    this.timer && clearTimeout(this.timer);
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    renderHeadWay();

    const activeRoute = IN_BROWSER
      ? activeRouteData(Router.pathname)
      : undefined;

    return (
      <>
        <Head>
          <title>
            {activeRoute && (activeRoute.title || activeRoute.searchTerm)}
          </title>
          <meta name="description" content={activeRoute && activeRoute.desc} />
          <meta name="viewport" content="width=1024" />
          <script async src="https://unpkg.com/thesemetrics@latest" />
        </Head>
        <Pane
          display="flex"
          alignItems="center"
          flexDirection="row"
          is="header"
          height={40}
          backgroundColor="#0e7ccf"
          paddingRight={20}
        >
          <Pane
            flex={1}
            display="flex"
            paddingX={20}
            className="logo-transform"
          >
            {logo}
          </Pane>

          <Pane display="flex" alignItems={"center"}>
            <a
              style={{
                display: "inline-block",
                height: 20
              }}
              href="https://github.com/ritz078/transform"
            >
              <img
                src="https://img.shields.io/github/stars/ritz078/transform?style=social"
                alt=""
              />
            </a>
            <Button
              appearance="minimal"
              height={40}
              className="transform-changelog"
              css={{
                color: "#fff !important"
              }}
            >
              Changelog
            </Button>
            <a href="https://github.com/ritz078/transform" target="_blank">
              <Button
                appearance="minimal"
                height={40}
                css={{
                  color: "#fff !important"
                }}
              >
                GitHub
              </Button>
            </a>
          </Pane>
        </Pane>
        <Pane display="flex" flexDirection="row">
          <Navigator />
          <Component {...pageProps} />
        </Pane>
      </>
    );
  }
}
