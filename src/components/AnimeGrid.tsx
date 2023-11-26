import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useAnime from "../hooks/useAnime";
import AnimeCard from "./AnimeCard";
import AnimeCardSkeleton from "./AnimeCardSkeleton";

const AnimeGrid = () => {
  const { animeseries, error, isLoading } = useAnime();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((Skeleton) => (
            <AnimeCardSkeleton key={Skeleton}></AnimeCardSkeleton>
          ))}
        {animeseries &&
          animeseries.map((anime) => (
            <AnimeCard key={anime.id} anime={anime}></AnimeCard>
          ))}
      </SimpleGrid>
    </>
  );
};

export default AnimeGrid;
