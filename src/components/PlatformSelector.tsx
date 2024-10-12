import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../state management/store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const platform = data?.results.find((p) => p.id === gameQuery.platformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
