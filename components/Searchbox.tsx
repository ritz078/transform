import { routes } from "@utils/routes";
import { Autocomplete, SearchInput } from "evergreen-ui";
import React, { useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";

const SearchBox: React.FunctionComponent<{}> = () => {
  const navigate = useNavigate();

  const onSearchSelect = useCallback(
    changedItem => {
      const route = routes.find(route => changedItem === route.searchTerm);
      if (route) navigate({ to: route.path });
    },
    [navigate]
  );

  return (
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
  );
};

export default SearchBox;
