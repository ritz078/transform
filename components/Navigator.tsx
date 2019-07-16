import React, { useCallback } from "react";
import { Heading, Pane, Text, Autocomplete, SearchInput } from "evergreen-ui";
import { categorizedRoutes, Route, routes } from "@utils/routes";
import Link from "next/link";
import { useRouter } from "next/router";

function Logo() {
  return (
    <svg
      width="75px"
      height="71px"
      viewBox="0 0 75 71"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M65.38 12.571c-3.907 0-7.063 2.286-8.566 5.429L18.637 9.429v-.572C18.637 4 14.43 0 9.32 0 4.209 0 0 4 0 8.857c0 4.429 3.307 8 7.816 8.714V53.43C3.456 54.143 0 57.714 0 62.143 0 67 4.208 71 9.319 71c4.659 0 8.416-3.143 9.168-7.429h25.1C44.34 67.714 48.097 71 52.756 71c5.11 0 9.318-4 9.318-8.857 0-3.429-2.104-6.286-4.96-7.857l7.215-24.143c.45 0 .901.143 1.352.143 5.11 0 9.319-4 9.319-8.857-.3-4.858-4.509-8.858-9.62-8.858zm0 14.715c-3.456 0-6.312-2.715-6.312-6 0-3.286 2.856-6 6.313-6s6.312 2.714 6.312 6c0 3.285-2.855 6-6.312 6zM9.47 2.857c3.457 0 6.313 2.714 6.313 6s-2.856 6-6.313 6-6.313-2.714-6.313-6 2.856-6 6.313-6zM15.63 62c0 3.286-2.855 6-6.312 6-3.457 0-6.313-2.714-6.313-6s2.856-6 6.313-6c3.607.143 6.312 2.714 6.312 6zm37.125 6c-3.457 0-6.313-2.714-6.313-6s2.856-6 6.313-6c3.456 0 6.312 2.714 6.312 6s-2.856 6-6.312 6zm1.352-14.714c-.45 0-.902-.143-1.352-.143-4.66 0-8.417 3.143-9.169 7.428h-24.95c-.751-3.714-3.757-6.571-7.665-7.285V17.57c3.156-.428 5.862-2.571 7.064-5.285l38.176 8.571v.572c0 3.428 2.105 6.428 5.11 7.857l-7.214 24z"
        fill="#888"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default function() {
  const router = useRouter();

  const onSearchSelect = useCallback(changedItem => {
    const route = routes.find(route => changedItem === route.searchTerm);
    router.push(route.path);
  }, []);

  return (
    <Pane
      width={240}
      height={"100vh"}
      borderRight
      display="flex"
      flexDirection="column"
    >
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingX={20}
        paddingY={20}
      >
        <Heading size={900}>Transform</Heading>
      </Pane>

      <Pane paddingX={15}>
        <Autocomplete
          onChange={onSearchSelect}
          items={routes.map(a => a.searchTerm)}
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

      <Pane
        display="flex"
        flex={1}
        overflowY="scroll"
        flexDirection="column"
        paddingBottom={10}
      >
        {categorizedRoutes.map(route => {
          return (
            <>
              <Pane
                paddingX={10}
                display="flex"
                flexDirection="row"
                alignItems="center"
                marginTop={15}
                marginBottom={2}
              >
                <Heading marginLeft={5} size={400}>
                  {route.category}
                </Heading>
              </Pane>

              {(route.content as Route[]).map((a: Route) => {
                const isActive = router.pathname === a.path;
                return (
                  <Link key={a.label} href={a.path} prefetch>
                    <a>
                      <Pane
                        paddingLeft={16}
                        paddingY={3}
                        backgroundColor={isActive ? "#f3f3f3" : undefined}
                        borderLeft={
                          isActive
                            ? "3px solid #009688"
                            : "3px solid transparent"
                        }
                      >
                        <Text fontSize={13}>{a.label}</Text>
                      </Pane>
                    </a>
                  </Link>
                );
              })}
            </>
          );
        })}
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
