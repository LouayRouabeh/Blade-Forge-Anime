import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Anime {
  id: string;
  title: string;
}

interface fetchAnimesResponse {
  data: Anime[];
}

const AnimeGrid = () => {
  const [animeseries, setAnime] = useState<Anime[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<fetchAnimesResponse>("/anime", {
        params: {
          Page: 1,
          Size: 10,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setAnime(res.data.data);
      })
      .catch((err) => {
        setError(err.message);
        console.error(err);
      });
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {animeseries &&
          animeseries.map((anime) => <li key={anime.title}>{anime.title}</li>)}
      </ul>
    </>
  );
};

export default AnimeGrid;
