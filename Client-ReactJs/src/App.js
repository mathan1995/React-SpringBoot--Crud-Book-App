import React, { Component } from "react";
import "./App.css";
// import ListBooks from "./components/Books/ListBook";
// import AddBook from "./components/Books/AddBook";
import SearchAppBar from "./components/Header/AppHeader";
import Bookindex from "./components/Books/Bookindex";
import MiniDrawer from "./components/Test/Test";
class App extends Component {
  render() {
    return (
      <div>
        <MiniDrawer />
        <Bookindex />
        {/* <SearchAppBar /> */}

        {/* <ListBooks /> */}
        {/* <AddBook /> */}
      </div>
    );
  }
}

export default App;
