import "./App.css";
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
