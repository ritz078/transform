import React, { Fragment } from "react";
import { Heading, Pane, Text } from "evergreen-ui";
import { categorizedRoutes, Route } from "@utils/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchBox from "@components/Searchbox";

export default function() {
  const router = useRouter();

  return (
    <Pane
      width={240}
      height={"calc(100vh - 40px)"}
      borderRight
      display="flex"
      flexDirection="column"
      paddingTop={20}
    >
      <Pane paddingX={15}>
        <SearchBox />
      </Pane>

      <Pane
        display="flex"
        flex={1}
        overflowY="scroll"
        flexDirection="column"
        paddingBottom={10}
      >
        {categorizedRoutes.map(route => {
          return (
            <Fragment key={route.category}>
              <Pane paddingX={10} marginTop={15} marginBottom={2}>
                <Heading marginLeft={5} size={400}>
                  {route.category}
                </Heading>
              </Pane>

              {(route.content as Route[])
                .sort((a, b) => a.label.localeCompare(b.label))
                .map((a: Route) => {
                  const isActive = router.pathname === a.path;
                  return (
                    <Link key={a.label} href={a.path} prefetch={false}>
                      <a
                        style={{
                          textDecoration: "none"
                        }}
                      >
                        <Pane
                          paddingLeft={16}
                          paddingY={3}
                          backgroundColor={isActive ? "#f3f3f3" : undefined}
                          borderLeft={
                            isActive
                              ? "3px solid #009688"
                              : "3px solid transparent"
                          }
                          css={{
                            "&:hover": {
                              backgroundColor: "#f5f5f5"
                            }
                          }}
                        >
                          <Text fontSize={13}>{a.label}</Text>
                        </Pane>
                      </a>
                    </Link>
                  );
                })}
            </Fragment>
          );
        })}
      </Pane>

      <Pane borderTop>
        <Heading size={400} paddingY={15} textAlign="center">
          Created by{" "}
          <a href="https://twitter.com/ritz078" target="_blank">
            @ritz078
          </a>
        </Heading>
      </Pane>
    </Pane>
  );
}
