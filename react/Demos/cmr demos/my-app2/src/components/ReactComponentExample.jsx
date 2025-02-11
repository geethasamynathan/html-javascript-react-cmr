import React from "react";
function Greeting(props) {
  return <h1> Hello, {props.name}</h1>;
}

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.username}</h2>
        <p>Age: {this.props.age}</p>
        <p>Email:{this.props.email}</p>
      </div>
    );
  }
}

function UserCard(props) {
  return (
    <div className="user-card">
      <h1>{props.title}</h1>
      <UserProfile
        username={props.username}
        age={props.age}
        email={props.email}
      />
    </div>
  );
}

const ReactComponentExample = () => {
  return (
    <div>
      <Greeting name="React Developer" />
      <UserCard
        title="User Details"
        username="Geetha"
        age={34}
        email="geethasamynathan2011@gmail.com"
      />
    </div>
  );
};

export default ReactComponentExample;
