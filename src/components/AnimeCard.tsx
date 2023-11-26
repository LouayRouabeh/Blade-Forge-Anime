import { FaCheckCircle } from "react-icons/fa";
import { Anime } from "../hooks/useAnime";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import NbEpisodes from "./NbEpisodes";

interface Props {
  anime: Anime;
}
const AnimeCard = ({ anime }: Props) => {
  return (
    <Card width={250} borderRadius={10} overflow="hidden">
      <Image src={anime.image}></Image>
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Heading fontSize="2xl">{anime.title}</Heading>
        <Text>{anime.genres.join(", ")}</Text>
        <HStack justifyContent="space-between" alignItems="flex-end">
          {anime.status === "Finished Airing" ? (
            <FaCheckCircle color="green" />
          ) : (
            <FaCheckCircle color="orange" />
          )}
          <NbEpisodes episodes={anime.episodes}></NbEpisodes>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
