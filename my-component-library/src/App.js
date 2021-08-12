import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { SignUpModal } from "./components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <div style={{ position: "absolute" }}>
        <button
          style={{
            margin: "16px 24px",
            padding: "8px",
            background: "none",
            color: "white",
          }}
          onClick={() => setUseDarkTheme((prev) => !prev)}
        >
          {useDarkTheme ? "Dark" : "Light"} theme
        </button>
        <button
          style={{
            margin: "16px 24px",
            padding: "8px",
            background: "none",
            color: "white",
          }}
          onClick={() => setShowModal((prev) => !prev)}
        >
          Toggle modal
        </button>
      </div>
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
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
