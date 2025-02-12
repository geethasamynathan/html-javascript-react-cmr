import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import DataBinding1 from "./components/DataBinding1";
import DataBinding2 from "./components/DataBinding2";
import EventBinding1 from "./components/EventBiding";
import EventBinding2 from "./components/EventBinding2";
//import Greeting from "./components/propsdemo1";
import UserProfile from "./components/propsdemo1";
import Button from "./components/propsdemo1";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import MainContent0 from "./components/MainContent";
import { useState } from "react";
import MainContent from "./components/MainContent";
function App() {
  // const handleClick = () => {
  //   alert("Button cliked thrrough parent");
  // };

  const [selectedCourse, setSelectedCourse] = useState(null);
  // console.log("App Rendered.SelectedCourse:", selectedCourse);
  return (
    <>
      <div className="app-container">
        <Header />
        <NavBar onSelectCourse={setSelectedCourse} />
        <MainContent selectedCourse={selectedCourse} />
        <Footer />
      </div>
      {/* <div className="App"> */}
      {/* <Button onClick={handleClick} /> */}
      {/* <UserProfile username="testuser" age="23" />
      <UserProfile username="admin" age="23" />
      <UserProfile /> */}
      {/* <Greeting name="Geetha" />
      <Greeting name="Capgemini" /> */}
      {/* <EventBinding2 /> */}
      {/* <EventBinding1 /> */}
      {/* <DataBinding1 /> */}
      {/* <DataBinding2 /> */}
      {/* </div> */}
    </>
  );
}

export default App;
