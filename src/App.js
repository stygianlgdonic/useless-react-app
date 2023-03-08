import React, { Component } from "react"
import "./App.css"
import Login from "./SignIn"

class App extends Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
  }
  clicked() {
    window.eyelet.identify('UNIQUE_USER_ID', {
      name: "John Doe",
      email: "johndoe@example.com"
    })
  }
  render() {
    return (
      <div>
        <p>home</p>
        <p>items</p>
        <Login></Login>
      </div>
    )
  }
}

export default App
