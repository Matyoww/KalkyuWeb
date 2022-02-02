import * as React from "react";
import Homepage from "./components/Homepage";
import BasicCalc from "./components/BasicCalc";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Conversion from "./components/Conversion";

export default function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#fff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="basiccalc" element={<BasicCalc />} />
          <Route path="conpage" element={<Conversion />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
