import { Grid, GridItem, Show, Flex, Box } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import MainGrid from "./components/MainGrid";
import SidePanel from "./components/SidePanel";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import MainLabel from "./components/MainLabel";

export interface GameQuery {
  genreId: number | null; //alternate genreId?: number
  platformId: number | null;
  sortOrder: string | null;
  searchQuery: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavigationBar
          onSearch={(searchQuery) =>
            setGameQuery({ ...gameQuery, searchQuery })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <SidePanel
            selectedGenreId={gameQuery.genreId}
            onClick={(genre) => setGameQuery({ ...gameQuery, genreId: genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <Box>
          <MainLabel gameQuery={gameQuery}></MainLabel>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelect={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform })
                }
              ></PlatformSelector>
            </Box>
            <SortSelector
              sortBy={gameQuery.sortOrder}
              onSelect={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>
          </Flex>
        </Box>
        <MainGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
