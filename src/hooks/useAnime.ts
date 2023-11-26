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
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
      const controller = new AbortController();  

      setLoading(true)
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
          setLoading(false)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false)
          console.error(err);
        });
        return () => controller.abort();
    }, []);

    return {animeseries,error, isLoading}
}

export default useAnime;