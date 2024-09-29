import { Game } from "../hooks/useGames";
import { Card, CardBody, Flex, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import Score from "./Score";
import CropImage from "../services/CropImage";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={CropImage(game.background_image)}></Image>
      <CardBody>
        <Flex justifyContent="space-between" marginBottom={2}>
          <PlatformIconList
            platforms={game.platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <Score score={game.metacritic}></Score>
        </Flex>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
