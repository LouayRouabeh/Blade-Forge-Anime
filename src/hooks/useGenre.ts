import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    _id: string;
  }
  
  interface FetchGenreResponse {
    data: Genre[];
  }

const useGenres = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genre", {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setGenres(res.data.map((genreObject) => genreObject._id));
        } else {
          console.error("Data structure in response is not as expected");
        }
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
        console.error(err);
      });

    return () => controller.abort();
  }, [genres]);

  return { genres, error, isLoading };
};


export default useGenres;