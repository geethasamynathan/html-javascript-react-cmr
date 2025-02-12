import logo from "./logo.svg";
import "./App.css";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import Counter from "./components/Counter";
function App() {
  return (
    <>
      <h1>Redux Counter App</h1>
      <Counter />
      {/* <PostDetail id={10} /> */}
      {/* <PostList /> */}
    </>
  );
}

export default App;
