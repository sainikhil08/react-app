import { Grid, Show, GridItem, Box, Flex } from "@chakra-ui/react";
import MainGrid from "../components/MainGrid";
import MainLabel from "../components/MainLabel";
import PlatformSelector from "../components/PlatformSelector";
import SidePanel from "../components/SidePanel";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
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
};

export default HomePage;
