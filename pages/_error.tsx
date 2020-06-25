import { Heading, Pane } from "evergreen-ui";
import React from "react";
import SearchBox from "@components/Searchbox";
import Error404 from "@assets/svgs/Error404";
import Error500 from "@assets/svgs/Error500";

export default function Error({ statusCode }) {
  return (
    <Pane display="flex" flex={1} alignItems="center">
      <Pane display="flex" flexDirection="column" alignItems="center" flex={1}>
        {statusCode === 404 ? (
          <>
            <Error404 />
            <Heading marginTop={50} size={600}>
              You seem to have landed on the wrong place. Search what you are
              looking for below.
            </Heading>
            <Pane marginTop={30} width="70%">
              <SearchBox />
            </Pane>
          </>
        ) : (
          <>
            <Error500 />
            <Heading marginTop={50} size={600}>
              Something Broke. Check back again in some time.
            </Heading>
          </>
        )}
      </Pane>
    </Pane>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};
