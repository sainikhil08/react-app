import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { Grid, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameVideo from "../hooks/useGameVideo";
import GameVideos from "../components/GameVideos";
import GameShots from "../components/GameShots";

const GamePage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGameDetail(slug!);
  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <GridItem>
        <Heading>{data.name}</Heading>
        <ExpandableText>{data.description_raw}</ExpandableText>
        <GameAttributes game={data}></GameAttributes>
      </GridItem>
      <GridItem>
        <GameVideos id={data.id}></GameVideos>
        <GameShots id={data.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GamePage;
