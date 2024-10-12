import {
  HStack,
  Image,
  Input,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

const NavigationBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <Switch
        isChecked={colorMode === "dark"}
        colorScheme="green"
        size="lg"
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default NavigationBar;
