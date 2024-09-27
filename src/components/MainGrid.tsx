import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const MainGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard game={game} key={game.id}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MainGrid;
