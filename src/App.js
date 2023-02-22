import React, { Component } from "react"
import "./App.css"

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
        <p>home</p>
        <p>items</p>
      </div>
    )
  }
}

export default App
