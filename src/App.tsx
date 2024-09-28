import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import MainGrid from "./components/MainGrid";
import SidePanel from "./components/SidePanel";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
          <SidePanel
            selectedGenre={selectedGenre}
            onClick={(v) => setSelectedGenre(v)}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <MainGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
