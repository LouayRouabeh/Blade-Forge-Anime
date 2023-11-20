import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface fetchMatchesResponse {
  results;
}

const MatchGrid = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    apiClient.get("/matches/v2/list-live").then((res) => setGames());
  });
  return <div>MatchGrid</div>;
};

export default MatchGrid;
