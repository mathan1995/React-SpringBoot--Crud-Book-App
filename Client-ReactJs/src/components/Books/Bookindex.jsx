import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListBook from "./ListBook";
import AddBook from "./AddBook";
import EditBook from "./EditBook";
import Test from "./Test";
class Bookindex extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={ListBook} />
            <Route path="/AddBook" exact component={AddBook} />
            <Route path="/EditBook" exact component={EditBook} />
            <Route path="/BackBookList" exact component={ListBook} />
            <Route path="/TestEdit" exact component={Test} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default Bookindex;
