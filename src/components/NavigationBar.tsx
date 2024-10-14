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
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
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
