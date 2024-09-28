import { HStack, List, Skeleton, SkeletonText } from "@chakra-ui/react";

const SidePanelSkeleton = () => {
  return (
    <List>
      <HStack>
        <Skeleton boxSize="40px"></Skeleton>
        <SkeletonText></SkeletonText>
      </HStack>
    </List>
  );
};

export default SidePanelSkeleton;
