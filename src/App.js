import React, { Component } from "react";
import "./App.css";

// 1. Make New Context
const MyContext = React.createContext();

// 2. Create Provider Component
class MyProvider extends Component {
  state = {
    name: "Jeff",
    age: 28,
    cool: true
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growOlder: () => this.setState({ age: this.state.age + 1 })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Family = props => (
  <div className="family">
    <Person />
  </div>
);

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <button onClick={context.growOlder}>Get Older</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I'm the app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
