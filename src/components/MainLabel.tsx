import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const MainLabel = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((genre) => gameQuery.genreId == genre.id);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const label = `${platform?.name || ""}` + ` ${genre?.name || ""}` + ` Games`;
  return (
    <Heading as="h1" marginBottom={4}>
      {label}
    </Heading>
  );
};

export default MainLabel;
