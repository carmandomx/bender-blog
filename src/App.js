import logo from "./logo.svg";
import "./App.css";
import PostsContainer from "./components/PostsContainer";

function App() {
  return (
    <div className="App">
      <h1>El increible Blog de Bender</h1>
      <PostsContainer />
    </div>
  );
}

export default App;
