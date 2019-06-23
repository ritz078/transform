import React from "react";
import App, { Container } from "next/app";
import { Pane } from "evergreen-ui";
import Navigator from "@components/Navigator";
import { ThemeContext } from "@utils/theme";
import "@styles/main.css";

interface State {
  theme: string;
  toggleTheme: () => void;
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  toggleTheme = () => {
    this.setState((state: State) => ({
      theme: state.theme === "dark" ? "light" : "dark"
    }));
  };

  state = {
    theme: "light",
    toggleTheme: this.toggleTheme
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeContext.Provider value={this.state}>
          <Pane display="flex" flexDirection="row">
            <Navigator />
            <Component {...pageProps} />
          </Pane>
        </ThemeContext.Provider>
      </Container>
    );
  }
}

export default MyApp;
