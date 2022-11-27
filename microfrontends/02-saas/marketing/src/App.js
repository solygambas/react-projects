import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/pricing" element={<Pricing />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
