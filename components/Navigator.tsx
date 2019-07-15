import React, { useCallback, useContext, useState } from "react";
import {
  Heading,
  Pane,
  Switch,
  Icon,
  Text,
  Autocomplete,
  SearchInput
} from "evergreen-ui";
import { ThemeContext } from "@utils/theme";
import { categorizedRoutes, Route, routes } from "@utils/routes";
import Link from "next/link";
import Router from "next/router";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      fill="#888"
      width="190"
      height={125}
    >
      <path d="M68.6 34c-2.6 0-4.7 1.6-5.7 3.8l-25.4-6v-.4c0-3.4-2.8-6.2-6.2-6.2-3.4 0-6.2 2.8-6.2 6.2 0 3.1 2.2 5.6 5.2 6.1v25.1c-2.9.5-5.2 3-5.2 6.1 0 3.4 2.8 6.2 6.2 6.2 3.1 0 5.6-2.2 6.1-5.2h16.7c.5 2.9 3 5.2 6.1 5.2 3.4 0 6.2-2.8 6.2-6.2 0-2.4-1.4-4.4-3.3-5.5l4.8-16.9c.3 0 .6.1.9.1 3.4 0 6.2-2.8 6.2-6.2-.2-3.4-3-6.2-6.4-6.2zm0 10.3c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2zM31.4 27.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2zm4.1 41.4c0 2.3-1.9 4.2-4.2 4.2-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c2.4.1 4.2 1.9 4.2 4.2zm24.7 4.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2zm.9-10.3c-.3 0-.6-.1-.9-.1-3.1 0-5.6 2.2-6.1 5.2H37.5C37 65 35 63 32.4 62.5v-25c2.1-.3 3.9-1.8 4.7-3.7l25.4 6v.4c0 2.4 1.4 4.5 3.4 5.5l-4.8 16.8z" />
    </svg>
  );
}

export default function() {
  const [active, setActive] = useState([categorizedRoutes[0].category]);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const onSearchSelect = useCallback(changedItem => {
    const route = routes.find(route => changedItem === route.label);
    Router.push(route.path);
  }, []);

  return (
    <Pane
      width={240}
      height={"100vh"}
      borderRight
      display="flex"
      flexDirection="column"
    >
      <Pane display="flex" alignItems="center" justifyContent="center">
        <Logo />
      </Pane>

      <Pane paddingX={15}>
        <Autocomplete
          onChange={onSearchSelect}
          items={routes.map(a => a.label)}
          width="100%"
        >
          {props => {
            const { getInputProps, getRef, inputValue } = props;
            return (
              <SearchInput
                width="100%"
                marginBottom={10}
                placeholder="Search"
                value={inputValue}
                innerRef={getRef}
                {...getInputProps()}
              />
            );
          }}
        </Autocomplete>
      </Pane>

      <Pane display="flex" flex={1} overflowY="scroll" flexDirection="column">
        {categorizedRoutes.map(route => {
          return (
            <>
              <Pane
                paddingY={5}
                paddingX={10}
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <Heading marginLeft={5} size={400}>
                  {route.category}
                </Heading>
              </Pane>

              {(route.content as Route[]).map((a: Route) => (
                <Link key={a.label} href={a.path}>
                  <a>
                    <Pane
                      className="rc-collapse-item-"
                      paddingLeft={25}
                      paddingY={3}
                      backgroundColor={
                        active && active.includes(a.label)
                          ? "aliceblue"
                          : undefined
                      }
                    >
                      <Text fontSize={13}>{a.label}</Text>
                    </Pane>
                  </a>
                </Link>
              ))}
            </>
          );
        })}
      </Pane>

      <Pane display="flex" alignItems="center" paddingX={20} paddingY={20}>
        <Heading flex={1} size={400}>
          Dark Mode
        </Heading>
        <Switch height={20} onChange={toggleTheme} />
      </Pane>

      <Pane paddingY={15} background="#f6f6f6" borderTop>
        <Heading size={400} textAlign="center">
          Created by{" "}
          <Link>
            <a>@ritz078</a>
          </Link>
        </Heading>
      </Pane>
    </Pane>
  );
}
