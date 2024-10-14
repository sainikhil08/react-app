import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import DefinitionItem from "./DefinitionItem";
import Score from "./Score";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map((p) => (
          <Text key={p.platform.id}>{p.platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <Score score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((g) => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((g) => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
