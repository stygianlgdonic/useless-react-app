import React, { Component } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Login from "./SignIn"

class Items extends Component {
  render() {
    return (
      <div>Items</div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>Home</div>
    )
  }
}

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
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </div>
    )
  }
}

export default App
