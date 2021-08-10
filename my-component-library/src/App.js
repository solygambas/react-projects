import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from "./utils";

function App() {
  return (
    <>
      <PrimaryButton disabled>Submit</PrimaryButton>
      <SecondaryButton disabled>Submit</SecondaryButton>
      <TertiaryButton disabled>Submit</TertiaryButton>
      <GlobalStyle />
    </>
  );
}

export default App;
