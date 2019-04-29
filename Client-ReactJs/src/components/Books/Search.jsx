import React, { Component } from "react";
import axios from "axios";
import ListBook from "./ListBook";
const API_URL = "http://localhost:8080/library/findAll";

class Search extends Component {
  state = {
    query: "",
    books: []
  };

  getInfo = () => {
    axios
      .get(`${API_URL}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          books: data.data // MusicGraph returns an object named data,
          // as does axios. So... data.data
        });
      });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        }
      }
    );
  };

  render() {
    return (
      <div className="container">
        <form>
          <input
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <ListBook books={this.state.books} />
        </form>
      </div>
    );
  }
}
export default Search;
