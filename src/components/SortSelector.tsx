import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  sortBy: string | null;
  onSelect: (sortSelected: string) => void;
}
const SortSelector = ({ sortBy, onSelect }: Props) => {
  const sortDropdown = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-released", label: "New" },
  ];
  const sortOrder = sortDropdown.find((item) => item.value === sortBy);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {sortOrder?.label || "Sort By"}
      </MenuButton>
      <MenuList>
        {sortDropdown.map((item) => (
          <MenuItem key={item.value} onClick={() => onSelect(item.value)}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
