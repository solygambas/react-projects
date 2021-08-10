import { useState } from "react";
import { ThemeProvider } from "styled-components";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
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
        <PrimaryButton onClick={() => setUseDarkTheme((prev) => !prev)}>
          Toggle Dark Theme
        </PrimaryButton>
        <PrimaryButton>Submit</PrimaryButton>
        <SecondaryButton>Submit</SecondaryButton>

        <TertiaryButton>Submit</TertiaryButton>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
