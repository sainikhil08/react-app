import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../hooks/useGenres";
import CropImage from "../services/CropImage";

const SidePanel = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      <List>
        {error && <p>{error}</p>}
        {data.map((genre: Genre) => (
          <HStack>
            <Image
              boxSize="40px"
              borderRadius="5px"
              src={CropImage(genre.image_background)}
            />
            <Text fontSize="20px">{genre.name}</Text>
          </HStack>
        ))}
      </List>
    </>
  );
};

export default SidePanel;
