import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import MainGrid from "./components/MainGrid";
import SidePanel from "./components/SidePanel";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
            selectedGenre={gameQuery.genre}
            onClick={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <HStack marginBottom={5} spacing={2}>
          <PlatformSelector
            selectedPlatfrom={gameQuery.platform}
            onSelect={(platform) => setGameQuery({ ...gameQuery, platform })}
          ></PlatformSelector>
          <SortSelector
            sortBy={gameQuery.sortOrder}
            onSelect={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
          ></SortSelector>
        </HStack>
        <MainGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
