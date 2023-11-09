import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  const locations = {
    first: "Jungle",
    second: "River",
    third: "Waterfall",
  };

  const { first, second, third } = locations;

  return (
    <div className="App">
      Hello
      <Header />
      <br />
      <Home jungle={first} river={second} waterfall={third} />
    </div>
  );
}

export default App;
