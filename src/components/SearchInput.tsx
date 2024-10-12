import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../state management/store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchQuery = useGameQueryStore((s) => s.setSearchQuery);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchQuery(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} placeholder="Search games..." borderRadius="20px" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
