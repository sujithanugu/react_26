import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // needs only if write something in constructor other wise fine
    this.state = {
        userInfo: {
            name: "dummy",
            location: "default",
        }
    }
    //console.log(this.props.name + "Constructor");
  }
async componentDidMount(){
    //console.log(this.props.name + "Component Did Mount");
    const data = await fetch("https://api.github.com/users/sujithanugu");
    const json = await data.json();
    this.setState({
        userInfo: json,
    })
}
componentDidUpdate(){
    console.log("Updated");
}
componentWillUnmount(){
    console.log("Unmounted");
}
  render() {
    const { name, location, id } = this.state.userInfo;
    //console.log(this.props.name + "Render");
    return (
      <div className="user">
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Id: {id}</h3>
      </div>
    );
  }
}

export default UserClass;
