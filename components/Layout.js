import React, { PureComponent } from "react";
import isBrowser from "is-in-browser";
import Link from "next/link";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import GithubCorner from "react-github-corner";
import FuzzyPicker, { FuzzyWrapper } from "react-fuzzy-picker";
import Collapse, { Panel } from "rc-collapse";
import flatten from "lodash/flatten";
import findIndex from "lodash/findIndex";
import { categorizedRoutes, routes, activeRouteData } from "../utils/routes";

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = url => {
  if (url.indexOf("code=") === -1) {
    NProgress.start();
  }
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      fill="#ffffff"
      width="190"
    >
      <path d="M68.6 34c-2.6 0-4.7 1.6-5.7 3.8l-25.4-6v-.4c0-3.4-2.8-6.2-6.2-6.2-3.4 0-6.2 2.8-6.2 6.2 0 3.1 2.2 5.6 5.2 6.1v25.1c-2.9.5-5.2 3-5.2 6.1 0 3.4 2.8 6.2 6.2 6.2 3.1 0 5.6-2.2 6.1-5.2h16.7c.5 2.9 3 5.2 6.1 5.2 3.4 0 6.2-2.8 6.2-6.2 0-2.4-1.4-4.4-3.3-5.5l4.8-16.9c.3 0 .6.1.9.1 3.4 0 6.2-2.8 6.2-6.2-.2-3.4-3-6.2-6.4-6.2zm0 10.3c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2zM31.4 27.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2zm4.1 41.4c0 2.3-1.9 4.2-4.2 4.2-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c2.4.1 4.2 1.9 4.2 4.2zm24.7 4.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2zm.9-10.3c-.3 0-.6-.1-.9-.1-3.1 0-5.6 2.2-6.1 5.2H37.5C37 65 35 63 32.4 62.5v-25c2.1-.3 3.9-1.8 4.7-3.7l25.4 6v.4c0 2.4 1.4 4.5 3.4 5.5l-4.8 16.8z" />
    </svg>
  );
}

function trackingScript() {
  (function(i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function() {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga"
  );

  ga("create", "UA-60624235-5", "auto");
  ga("send", "pageview");
}

function renderFuzzyPicker(isOpen, onClose) {
  return (
    <FuzzyPicker
      isOpen={isOpen}
      onClose={onClose}
      onChange={choice => Router.push(choice.path)}
      items={routes}
      itemValue={item => item.label}
      renderItem={item => <span>{item.label}</span>}
    />
  );
}

// Here, we check what key must be pressed to open the fuzzy picker
// We'll use the '/' key for this example.
function isCorrectKeyPressed(event) {
  return event.metaKey && event.key === "p";
}

export default class Layout extends PureComponent {
  state = {};

  getClass(path) {
    return path === this.props.pathname ? "active" : "";
  }

  componentWillMount() {
    this.setKey(this.props.pathname);
  }

  componentWillReceiveProps({ pathname }) {
    this.setKey(pathname);
  }

  setKey = pathname => {
    this.setState({
      activeKey: `${findIndex(
        categorizedRoutes,
        o => o.content.filter(a => a.path === pathname).length
      ) + 1}`
    });
  };

  onChange = activeKey => {
    this.setState({
      activeKey
    });
  };

  render() {
    const { label, desc, title } = activeRouteData(this.props.pathname);

    return (
      <div className="main-wrapper">
        <Head>
          <title>{title || label}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <meta
            name="google-site-verification"
            content="bjJSOEahdert-7mwVScrwTTUVR3nSe0bEj5YjevUNn0"
          />
          <meta name="description" content={desc} />
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/codemirror.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.min.css"
          />
        </Head>
        <style jsx>{`
          .sidebar {
            height: 100vh;
            width: 250px;
            background-color: #424242;
            font-size: 15px;
            display: flex;
            flex-direction: column;
          }

          .main-wrapper {
            flex-direction: row;
            display: flex;
            flex: 1;
          }

          .content {
            flex: 1;
          }

          .nav {
            padding: 20px 0;
            flex: 1;
            overflow-y: scroll;
          }

          .twitter {
            color: #6dc7ff;
          }

          .logo {
            height: 180px;
            margin: 0 auto;
            overflow: hidden;
          }

          .footer {
            height: 70px;
            text-align: center;
            color: #fff;
            font-family: "Lato", sans-serif;
          }

          .footer svg {
            height: 36px;
            width: 30px;
            color: #fff;
          }

          .badge {
            display: inline-block;
            font-size: 12px;
            position: absolute;
            margin-top: 6px;
            margin-left: 6px;
            background-color: #2196f3;
            height: 13px;
            padding: 2px 4px;
            border-radius: 2px;
            line-height: 12px;
          }

          iframe {
            border: 0;
            overflow: hidden;
            display: table;
            margin: 0 auto;
            width: 61px;
            height: 20px;
          }

          a.active {
            background-color: #505050;
          }

          .info {
            font-family: "Lato";
            color: white;
            border: 1px solid #7b7b7b;
            padding: 8px;
            margin: 0 15px 15px;
            border-radius: 2px;
            font-size: 13px;
            text-align: center;
          }
        `}</style>

        <style jsx global>{`
          .Collapsible__trigger {
            color: whitesmoke;
            font-family: "Lato", sans-serif;
            line-height: 44px;
            cursor: pointer;
          }

          .Collapsible__trigger a:hover {
            color: #fff;
            background-color: #2d2d2d;
          }

          .Collapsible__trigger a:not(.twitter):not(.github) {
            display: block;
            padding-left: 14px;
          }

          .Collapsible__trigger {
            padding-left: 14px;
            color: #fff;
            display: block;
            text-decoration: none;
            background-color: #2f2f2f;
            border-bottom: 1px solid #252525;
          }

          .Collapsible__trigger svg {
            width: 14px;
            height: 14px;
            vertical-align: middle;
          }

          .rc-collapse-content-box a {
            display: block;
            color: #fff;
            font-family: "Lato";
            line-height: 44px;
            padding-left: 20px;
            background-color: #3c3c3c;
            font-size: 14px;
            text-decoration: none;
          }
        `}</style>

        <FuzzyWrapper
          isKeyPressed={isCorrectKeyPressed}
          popup={renderFuzzyPicker}
        />
        <div className="sidebar">
          <GithubCorner
            href="https://github.com/ritz078/transform-www"
            height={80}
            width={80}
            direction="left"
          />
          <div className="logo">
            <Logo />
          </div>
          <div className="nav">
            <div className="info">Use Ctrl/Cmd + P for quick search</div>

            <Collapse
              onChange={this.onChange}
              accordion
              activeKey={this.state.activeKey}
              defaultActiveKey={this.state.activeKey}
            >
              {categorizedRoutes.map((route, i) => {
                return (
                  <Panel
                    key={i + 1}
                    headerClass="Collapsible__trigger"
                    header={
                      <span>
                        {route.iconName ? (
                          <i className={route.iconName} />
                        ) : (
                          route.icon
                        )}{" "}
                        &nbsp; {route.category}
                      </span>
                    }
                  >
                    {route.content.map(a => (
                      <Link key={a.path} prefetch href={a.path}>
                        <a className={this.getClass(a.path)}>{a.label}</a>
                      </Link>
                    ))}
                  </Panel>
                );
              })}
            </Collapse>
          </div>

          <div className="footer">
            <br />Created by{" "}
            <a
              target="_blank"
              className="twitter"
              href="https://twitter.com/ritz078"
            >
              @ritz078
            </a>
          </div>
        </div>
        <div className="content">{this.props.children}</div>
        <script>{isBrowser && trackingScript()}</script>
      </div>
    );
  }
}
