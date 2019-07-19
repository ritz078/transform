import React, { Fragment } from "react";
import { Heading, Pane, Text } from "evergreen-ui";
import { categorizedRoutes, Route } from "@utils/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchBox from "@components/Searchbox";
import Twtr from "react-share/lib/TwitterShareButton";
import TwtrIcon from "react-share/lib/TwitterIcon";

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

              {(route.content as Route[]).map((a: Route) => {
                const isActive = router.pathname === a.path;
                return (
                  <Link key={a.label} href={a.path}>
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

      <Pane
        backgroundColor="#fff"
        borderTop
        paddingY={10}
        paddingX={10}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <a
          href="https://www.producthunt.com/posts/transform-3?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-transform-3"
          target="_blank"
          style={{
            display: "inline-flex"
          }}
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=161868&theme=light"
            alt="transform - A polyglot web converter. | Product Hunt Embed"
            style={{ width: 170, height: 40 }}
            width="250px"
            height="54px"
          />
        </a>

        <a
          style={{
            cursor: "pointer"
          }}
        >
          <Twtr
            round
            via="ritz078"
            title="Transform - A polyglot web converter to convert JSON, GraphQL, HTML, SVG, TypeScript and many more."
            url="https://transform.tools"
          >
            <TwtrIcon size={36} round />
          </Twtr>
        </a>
      </Pane>

      <Pane paddingY={15} background="#f6f6f6" borderTop>
        <Heading size={400} textAlign="center">
          Created by{" "}
          <Link href="https://twitter.com/ritz078">
            <a target="_blank">@ritz078</a>
          </Link>
        </Heading>
      </Pane>
    </Pane>
  );
}
