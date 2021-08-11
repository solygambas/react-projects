import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { SignUpModal } from "./components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <div
        style={{
          backgroundColor: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <SignUpModal />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
