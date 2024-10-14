import { Spinner } from "@chakra-ui/react";
import useGameVideo from "../hooks/useGameVideo";
interface Props {
  id: number;
}

const GameVideos = ({ id }: Props) => {
  const { data, isLoading, error } = useGameVideo(id);
  if (isLoading) return <Spinner />;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameVideos;
