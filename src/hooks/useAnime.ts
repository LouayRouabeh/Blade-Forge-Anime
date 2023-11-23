import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";




export interface Anime {
    id: string;
    title: string;
    alternativeTitles: string[];
    status: string;
    image: string;
    genres: string[];
    episodes: number;
  }
  
  interface fetchAnimesResponse {
    data: Anime[];
  }

const useAnime = () => {
    const [animeseries, setAnime] = useState<Anime[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
      const controller = new AbortController();  
      apiClient
        .get<fetchAnimesResponse>("/anime",{
          params: {
            Page: 1,
            Size: 10,
          },
          signal: controller.signal
        })
        .then((res) => {
          console.log(res.data.data);
          setAnime(res.data.data);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          console.error(err);
        });
        return () => controller.abort();
    }, []);

    return {animeseries,error}
}

export default useAnime;