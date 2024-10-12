import { Grid, GridItem, Show, Flex, Box } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import MainGrid from "./components/MainGrid";
import SidePanel from "./components/SidePanel";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import MainLabel from "./components/MainLabel";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavigationBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <SidePanel />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <Box>
          <MainLabel></MainLabel>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector></PlatformSelector>
            </Box>
            <SortSelector></SortSelector>
          </Flex>
        </Box>
        <MainGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
