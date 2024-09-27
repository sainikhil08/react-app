import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import Score from "./Score";
import CropImage from "../services/CropImage";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={CropImage(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <Score score={game.metacritic}></Score>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
