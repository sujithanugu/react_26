import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props){
        super(props)
        //console.log("Parent Constructor");
    }
    componentDidMount(){
        //console.log("Parent Component Did Mount");
    }
    render(){
        //console.log("Parent Render");
        return (
        <div>
            <h1>About Us</h1>
            <h2>This is About page for react learning!!</h2>
            {/* <User name={"SujithKumar function"} location={"Mumbai"} contact = {1234567}/> */}
            <UserClass name={"Sujith "} location={"Mumbai"} contact = {1123456}/>
            {/*<UserClass name={"Ajit "} location={"Mumbai"} contact = {1123456}/>*/}
        </div>
    )
    }
}

export default About;

/*
Lifecycle process console logouts..
 - Parent Constuctor
 - Parent Render
    -Sujith Constructor
    -Sujith Render
    -Ajit Constructor
    -Ajit Render
    -Sujith Component Did Mount
    -Ajit Component Did Mount
-Parent Component Did Mount

Here 1st rendering part took place and then the mounting part where DOM is updated/ manipulated.
So this is how it works, it batches up the rendering and mounting(DOM update) so the execution is such.
We have react lifecycle diagram refer for better understanding.
 */