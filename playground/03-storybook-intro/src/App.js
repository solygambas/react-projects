import { Provider } from "react-redux";

import "./index.css";
import store from "./lib/store";
import InboxScreen from "./components/InboxScreen";

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
