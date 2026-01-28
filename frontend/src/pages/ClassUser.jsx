import React from "react";

class ClassUser extends React.Component {
  constructor(props) {
    super(props); // mandatory

    // all the state variables wriiten in this constructor under one object
    this.state = {
      count: 1,
      count2: 100, // if multiple states are there we can write like this
      userInfo: {
        username: "default user",
        blog: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SravanamCharan20");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: {
        username: json.name,
        blog: json.blog,
      },
    });
  }
    /**
     * LIFECYCLE
     * constructor -> renders -> shimmer or dummy data(
     * userInfo: {
        username: "default user",
        blog: "",
        }
     * next componentDidMount Runs ->  when componentDidMount gives API Data -> 
        componentDidUpdate updates the dom with real data(API Data) by replacing dummy data
     * 
     * 
     */
  componentDidUpdate(){
    console.log("component DID Updated");
    
  }

  
  componentWillUnmount(){
    console.log("component willUnmount")
  }

  render() {
    const { name, age, sex } = this.props;
    const { count, count2 } = this.state;
    const { username, blog } = this.state.userInfo;

    return (
      <div className="m-5 border-b">
        <div>
          <h1>
            This is from <span className="text-red-600 text-lg">Class</span>{" "}
            Based Component
          </h1>
        </div>
        <h1>Counter : {count}</h1>
        <button
          className="border rounded-lg bg-teal-200 p-2 cursor-pointer"
          onClick={() => {
            this.setState({
              // this is how we use to change the state variables in class components
              count: this.state.count + 1,
              count2: this.state.count2 - 1, // we can write as many as we want
            });
          }}
        >
          Action
        </button>
        <h1>username from github : {username}</h1>
        <h1>BIO from github : {blog}</h1>
        <h1>Counter2 : {count2}</h1>
        <h1>This is {name}</h1>
        <h1>age : {age}</h1>
        <h1>sex : {sex}</h1>
      </div>
    );
  }
}

export default ClassUser;
