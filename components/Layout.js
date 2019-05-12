import React, { PureComponent } from "react";
import isBrowser from "is-in-browser";
import Link from "next/link";
import Router from "next/router";
import GithubCorner from "react-github-corner";
import FuzzyPicker, { FuzzyWrapper } from "react-fuzzy-picker";
import Collapse, { Panel } from "rc-collapse";
import findIndex from "lodash/findIndex";
import { categorizedRoutes, routes } from "../utils/routes";
import Switch from "react-switch";
import store from "store2";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      fill="#ffffff"
      width="190"
    >
      <style jsx>{`
        svg {
          height: 125px;
        }
      `}</style>
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

export const ThemeContext = React.createContext("mode");

export default class Layout extends PureComponent {
  state = {
    checked: false
  };

  getClass(path) {
    return path === this.props.pathname ? "active" : "";
  }

  componentWillMount() {
    this.setKey(this.props.pathname);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.alertExistHandler);
  }

  componentDidMount() {
    Layout.loadCarbonAds();

    this.setState({
      checked: store.get("mode") === "dark"
    });

    window.addEventListener("beforeunload", this.alertExistHandler);
  }

  componentWillReceiveProps({ pathname }) {
    this.setKey(pathname);
  }

  alertExistHandler(event) {
    event.preventDefault();
    return (event.returnValue = "Are you sure you want to close?"); // currently newer version of chrome and other browsers deosn't support customized string so returning a string or empty string won't be of much impact
  }
  static loadCarbonAds() {
    // const script = document.createElement("script");
    //
    // script.src =
    //   "//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=transformnowsh";
    // script.async = true;
    // script.id = "_carbonads_js";
    //
    // document.getElementById("carbonads_nav").appendChild(script);
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
    return (
      <div className="main-wrapper">
        <style jsx>{`
          .sidebar {
            height: 100vh;
            background-color: #424242;
            font-size: 15px;
            display: flex;
            flex-direction: column;
            min-width: 250px;
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
            flex: 1;
            overflow-y: auto;
          }

          .twitter {
            color: #6dc7ff;
          }

          .logo {
            height: 105px;
            margin: 0 auto;
            overflow: hidden;
          }

          .footer {
            padding: 20px 5px 30px;
            text-align: center;
            color: #fff;
            font-family: "Lato", sans-serif;
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

          .beta {
            background-color: #fff;
            border-radius: 2px;
            margin-left: 10px;
            color: #666;
            font-size: 12px;
            padding: 2px 6px;
          }

          .dark-mode {
            background-color: #2f2f2f;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 10px;
            font-family: Lato;
          }
        `}</style>

        <style jsx global>{`
          .Collapsible__trigger {
            color: whitesmoke;
            font-family: "Lato", sans-serif;
            line-height: 34px;
            cursor: pointer;
            outline: 0;
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
            line-height: 34px;
            padding-left: 20px;
            background-color: #3c3c3c;
            font-size: 13px;
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
          <div className="info">Use Ctrl/Cmd + P for quick search</div>
          <div className="nav">
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
                      <Link key={a.path} href={a.path}>
                        <a className={this.getClass(a.path)}>
                          {a.label}{" "}
                          {a.beta && <span className="beta">Beta</span>}
                        </a>
                      </Link>
                    ))}
                  </Panel>
                );
              })}
            </Collapse>
          </div>

          {/*<div id="carbonads_nav" />*/}

          <div className="dark-mode">
            Dark Mode{" "}
            <Switch
              checked={this.state.checked}
              onChange={() =>
                this.setState(
                  {
                    checked: !this.state.checked
                  },
                  () => store.set("mode", this.state.checked ? "dark" : "light")
                )
              }
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={10}
              width={28}
              className="react-switch"
              id="material-switch"
            />
          </div>

          <div className="footer">
            Created by{" "}
            <a
              target="_blank"
              className="twitter"
              href="https://twitter.com/ritz078"
            >
              @ritz078
            </a>
          </div>
        </div>
        <ThemeContext.Provider value={this.state.checked}>
          <div className="content">{this.props.children}</div>
        </ThemeContext.Provider>
        <script>{isBrowser && trackingScript()}</script>
      </div>
    );
  }
}
