import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../hooks/useGenres";
import CropImage from "../services/CropImage";
import SidePanelSkeleton from "./SidePanelSkeleton";

interface Props {
  selectedGenreId: number | null;
  onClick: (genre: number) => void;
}
const SidePanel = ({ selectedGenreId, onClick }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Heading fontSize="2xl" marginBottom={5}>
        Genres
      </Heading>
      <List spacing={1}>
        {isLoading && skeletons.map((s) => <SidePanelSkeleton key={s} />)}
        {data?.results.map((genre: Genre) => (
          <HStack key={genre.id}>
            <Image
              boxSize="40px"
              borderRadius="5px"
              objectFit="cover"
              src={CropImage(genre.image_background)}
            />
            <Button
              fontWeight={genre.id == selectedGenreId ? "bold" : ""}
              color={genre.id == selectedGenreId ? "yellow" : ""}
              onClick={() => onClick(genre.id)}
              variant="link"
              fontSize="20px"
              whiteSpace="normal"
              textAlign="left"
            >
              {genre.name}
            </Button>
          </HStack>
        ))}
      </List>
    </>
  );
};

export default SidePanel;
