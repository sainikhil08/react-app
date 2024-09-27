import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const Score = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      paddingX="8px"
      borderRadius="5px"
    >
      {score}
    </Badge>
  );
};

export default Score;
