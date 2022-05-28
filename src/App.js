import React, { useState } from "react";
import { Stack, Box, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Add from "./components/Add";

//use flexible box
function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: { mode: mode },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
