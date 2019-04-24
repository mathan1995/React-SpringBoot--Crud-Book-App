import React, { Component } from "react";
import "./App.css";
// import ListBooks from "./components/Books/ListBook";
// import AddBook from "./components/Books/AddBook";
import PrimarySearchAppBar from "./components/Header/AppHeader";
import Bookindex from "./components/Books/Bookindex";

class App extends Component {
  render() {
    return (
      <div>
        <PrimarySearchAppBar />
        <Bookindex />
        {/* <ListBooks /> */}
        {/* <AddBook /> */}
      </div>
    );
  }
}

export default App;
