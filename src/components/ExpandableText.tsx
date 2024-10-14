import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isSummarized, setSummarized] = useState(true);
  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;

  const content = isSummarized ? children.slice(0, limit) + ".... " : children;
  return (
    <>
      <Text>{content}</Text>
      <Button
        colorScheme="yellow"
        onClick={() =>
          isSummarized ? setSummarized(false) : setSummarized(true)
        }
      >
        {isSummarized ? "Show more" : "Show less"}
      </Button>
    </>
  );
};

export default ExpandableText;
