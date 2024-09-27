import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface Response {
  count: number;
  results: Game[];
}
const MainGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Response>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
  });
  return (
    <>
      {error && <p>{error}</p>}
      {games.map((game) => (
        <ul key={game.id}>{game.name}</ul>
      ))}
    </>
  );
};

export default MainGrid;
