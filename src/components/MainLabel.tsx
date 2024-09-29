import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const MainLabel = ({ gameQuery }: Props) => {
  const label =
    `${gameQuery.platform?.name || ""}` +
    ` ${gameQuery.genre?.name || ""}` +
    ` Games`;
  return (
    <Heading as="h1" marginBottom={4}>
      {label}
    </Heading>
  );
};

export default MainLabel;
