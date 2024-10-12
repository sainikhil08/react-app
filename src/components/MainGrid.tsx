import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "../state management/store";

const MainGrid = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const totalItemsFetched =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  if (error) return <Text>{error.message}</Text>;
  return (
    <InfiniteScroll
      dataLength={totalItemsFetched}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game}></GameCard>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default MainGrid;
