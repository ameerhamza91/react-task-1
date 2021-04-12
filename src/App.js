import "./App.css";
import Button from "./components/core/button/Button";
import Header from "./components/core/header/Header";
import NewsList from "./components/core/newsList/List";

function App() {
  return (
    <div id="wrapper" className="App">
      <Header />
      <NewsList />
    </div>
  );
}

export default App;
