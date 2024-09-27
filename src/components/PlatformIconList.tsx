import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { platform } from "../hooks/useGames";
import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    xbox: FaXbox,
    playstation: FaPlaystation,
    pc: FaWindows,
    linux: FaLinux,
    macos: FaApple,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  const normalizePlatformSlug = (slug: string) => {
    if (slug.includes("xbox")) return "xbox";
    if (slug.includes("playstation")) return "playstation";
    if (slug.includes("pc")) return "pc";
    if (slug.includes("mac")) return "macos";
    if (slug.includes("nintendo")) return "nintendo";
    // Add more normalization rules as needed
    return slug; // fallback to original slug
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        const normalizedSlug = normalizePlatformSlug(platform.slug);
        return <Icon as={iconMap[normalizedSlug]} color="gray.500" />;
      })}
    </HStack>
  );
};

export default PlatformIconList;
