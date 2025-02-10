import logo from "./logo.svg";
import "./App.css";

export default function App() {
  const name = "Geetha";
  const num1 = 45;
  const num2 = 900;
  function sayhi() {
    return "sample from sayhi";
  }

  return (
    <div>
      <h1> Hey Team, Welcome to React Js</h1>

      <h3> Hello {name} welcome</h3>

      <h5> {45 + 45}</h5>

      <p> {56 + "p"}</p>

      <p>{num1 < num2 ? `${num1} is not greater` : `${num2} is greater`}</p>

      <p> {sayhi()}</p>
    </div>
  );
}

//export default App;
