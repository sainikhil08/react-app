import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number | null;
}

const Emoji = ({ rating }: Props) => {
  if (rating === null || rating < 4) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    5: { src: bullsEye, alt: "Top Rated", boxSize: "35px" },
    4: { src: thumbsUp, alt: "Recommended", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
