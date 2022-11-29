import React from "react";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = ({ history }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HistoryRouter history={history}>
          <Routes>
            <Route exact path="/pricing" element={<Pricing />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </HistoryRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
