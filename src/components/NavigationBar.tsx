import {
  HStack,
  Image,
  Input,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavigationBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Input placeholder="Enter to Search" size="20px" />
      <Switch
        isChecked={colorMode === "dark"}
        colorScheme="green"
        size="lg"
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default NavigationBar;
