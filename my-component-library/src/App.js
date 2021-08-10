import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from "./utils";

function App() {
  return (
    <>
      <PrimaryButton modifiers="error">Submit</PrimaryButton>
      <PrimaryButton modifiers="warning">Submit</PrimaryButton>
      <PrimaryButton modifiers="success">Submit</PrimaryButton>
      <SecondaryButton
        modifiers={["large", "success", "secondaryButtonSuccess"]}
      >
        Submit
      </SecondaryButton>
      <SecondaryButton
        modifiers={["large", "warning", "secondaryButtonWarning"]}
      >
        Submit
      </SecondaryButton>
      <SecondaryButton modifiers={["large", "error", "secondaryButtonError"]}>
        Submit
      </SecondaryButton>
      <TertiaryButton modifiers={["warning", "ternaryButtonWarning"]}>
        Submit
      </TertiaryButton>
      <TertiaryButton modifiers={["error", "ternaryButtonError"]}>
        Submit
      </TertiaryButton>
      <TertiaryButton modifiers={["success", "ternaryButtonSuccess"]}>
        Submit
      </TertiaryButton>
      <GlobalStyle />
    </>
  );
}

export default App;
