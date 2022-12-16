import React from "react";
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const theme = createTheme();

const App = ({ history, onSignIn }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="/auth/signin"
              element={<SignIn onSignIn={onSignIn} />}
            />
            <Route
              path="/auth/signup"
              element={<SignUp onSignIn={onSignIn} />}
            />
          </Routes>
        </HistoryRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
