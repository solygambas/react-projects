import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@material-ui/core/styles";

import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { purple } from "@material-ui/core/colors";
import Layout from "./components/Layout";

// see: https://material-ui.com/customization/default-theme/#default-theme
// https://material-ui.com/customization/color/#color

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Notes />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
