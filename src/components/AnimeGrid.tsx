import { SimpleGrid, Text } from "@chakra-ui/react";
import useAnime from "../hooks/useAnime";
import AnimeCard from "./AnimeCard";

const AnimeGrid = () => {
  const { animeseries, error } = useAnime();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {animeseries &&
          animeseries.map((anime) => (
            <AnimeCard key={anime.id} anime={anime}></AnimeCard>
          ))}
      </SimpleGrid>
    </>
  );
};

export default AnimeGrid;
