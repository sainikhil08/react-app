import React from "react";
import useGameShots from "../hooks/useGameShots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  id: number;
}

const GameShots = ({ id }: Props) => {
  const { data, isLoading, error } = useGameShots(id);

  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((s) => (
        <Image key={s.id} src={s.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameShots;
