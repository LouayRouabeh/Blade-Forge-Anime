import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  episodes: number;
}

const NbEpisodes = ({ episodes }: Props) => {
  return (
    <div>
      <Badge fontSize="14px" padding={2} borderRadius="4px">
        {episodes}
      </Badge>
      <span style={{ marginLeft: "8px", fontSize: "12px", color: "#777" }}>
        Episodes
      </span>
    </div>
  );
};

export default NbEpisodes;
