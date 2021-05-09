import User from "./components/User";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Skeleton Screens</h1>
      </header>

      <div className="content">
        <Articles />
        <User />
      </div>
    </div>
  );
}

export default App;
