import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGenres from "../hooks/useGenre";
import { List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, isLoading } = useGenres();
  if (isLoading) return <Spinner></Spinner>;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre} paddingY="5px">
          <Text fontSize="large">{genre}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
