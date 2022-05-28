import React from "react";
import { Box } from "@mui/material";
import Post from "../Post";
function Feed() {
  return (
    <Box bgcolor="#bde0fe" flex={1} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
