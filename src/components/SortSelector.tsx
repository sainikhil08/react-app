import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../state management/store";

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortDropdown = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-released", label: "New" },
  ];
  const sortOrder = sortDropdown.find(
    (item) => item.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {sortOrder?.label || "Sort By"}
      </MenuButton>
      <MenuList>
        {sortDropdown.map((item) => (
          <MenuItem key={item.value} onClick={() => setSortOrder(item.value)}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
