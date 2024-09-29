import { Grid, GridItem, Show, HStack, Flex, Box } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import MainGrid from "./components/MainGrid";
import SidePanel from "./components/SidePanel";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import MainLabel from "./components/MainLabel";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
            selectedGenre={gameQuery.genre}
            onClick={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <Box>
          <MainLabel gameQuery={gameQuery}></MainLabel>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatfrom={gameQuery.platform}
                onSelect={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
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
