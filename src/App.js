import "./App.css";
import MovieLIst from "./Components/MovieList/MovieList";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieLIst />
    </div>
  );
}

export default App;
