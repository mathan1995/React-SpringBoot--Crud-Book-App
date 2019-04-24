import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListBook from "./ListBook";
import AddBook from "./AddBook";

class Bookindex extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={ListBook} />
            <Route path="/AddBook" exact component={AddBook} />
            <Route path="/BackBookList" exact component={ListBook} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default Bookindex;
