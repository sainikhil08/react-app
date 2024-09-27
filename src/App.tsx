import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import MainGrid from "./components/MainGrid";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <NavigationBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <MainGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
