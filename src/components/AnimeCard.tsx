import React from "react";
import { Anime } from "../hooks/useAnime";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  anime: Anime;
}
const AnimeCard = ({ anime }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={anime.image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{anime.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default AnimeCard;