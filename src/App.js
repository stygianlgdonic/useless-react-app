import React, { Component } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"

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
  clicked(path) {
    window.location.assign(path)
  }
  render() {
    return (
      <div>
        <button onClick={() => this.clicked('/')}>home</button>
        <button onClick={() => this.clicked('/items')}>items</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </div>
    )
  }
}

export default App
