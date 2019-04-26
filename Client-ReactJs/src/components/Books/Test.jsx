import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookId: "", bookISBN: "", bookName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Axios.get(
      "http://localhost:8080/library/geBookById/" +
        this.props.match.params.bookId
    ).then(result => {
      console.log(result);
      this.setState({
        bookId: result.bookId,
        bookISBN: result.bookISBN,
        bookName: result.bookName
      });
    });
  }
  handleChange(event) {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }
  handleSubmit(event) {
    event.preventDefault();
    const update = {
      bookId: this.state.bookId,
      bookISBN: this.state.bookISBN,
      bookName: this.state.bookName
    };
    Axios.put("http://localhost:8080/library/updateBook", update).then(
      response => {
        if (response.status === 200) {
          alert("Book update successfully.");
        }
      }
    );
  }

  render() {
    return (
      <div id="container">
        <Link to="/">hello</Link>
        <p />
        <form onSubmit={this.handleSubmit}>
          <label>Id:</label>
          <input type="text" name="bookId" value={this.state.bookId} />
          <p>
            <label>Title:</label>
            <input
              type="text"
              name="bookISBN"
              value={this.state.bookISBN}
              onChange={this.handleChange}
              placeholder="Title"
            />
          </p>
          <p>
            <label>URL:</label>
            <input
              type="text"
              name="bookName"
              value={this.state.bookName}
              onChange={this.handleChange}
              placeholder="URL"
            />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </div>
    );
  }
}

export default Test;
