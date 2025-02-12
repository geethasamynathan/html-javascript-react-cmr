import logo from "./logo.svg";
import "./App.css";
import React, { useContext, createContext } from "react";
const userContext = createContext();
function App() {
  const user = "Geetha Eswaramurthi";
  return (
    <userContext.Provider value={user}>
      <div className="App">
        <Parent />
      </div>
    </userContext.Provider>
  );
}
const Parent = ({ user }) => {
  return <Child user={user} />;
};

const Child = ({ user }) => {
  return <ProfileDetails user={user} />;
};

const ProfileDetails = ({ user }) => {
  const userinfo = useContext(userContext);
  return <h2>User: {userinfo}</h2>;
};
export default App;
