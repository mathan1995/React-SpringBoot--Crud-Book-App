import React from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";

class ListBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [], name: null, query: "" };
    this.deleteBook = this.deleteBook.bind(this);
    this.refreshBook = this.refreshBook.bind(this);
    this.routeAddBook = this.routeAddBook.bind(this);
  }

  //REDIRECT PAGE
  routeAddBook() {
    let path = `/AddBook`;
    this.props.history.push(path);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/library/findAll").then(response => {
      this.setState({ books: response.data });
      //console.table(response.data);
      console.warn("Books Service is working");
    });

    // CALLING REFRESH BOOK METHOD
    this.refreshBook();
  }

  //REFRESH BOOK METHOD
  refreshBook() {
    axios.get("http://localhost:8080/library/findAll").then(response => {
      console.warn("Refresh Service is working");
      this.setState({ books: response.data });
    });
  }
  /*END OF REFRESH METHOD */

  //Route Edit BOOK
  routeEditBook(id) {
    // let pathedit = `/EditBook`;
    // this.props.history.push(pathedit);
    this.props.history.push(`/EditBook/${id}`);
  }

  //DELETE-METHOD 1 = WORKING
  deleteBook(id) {
    axios
      .delete("http://localhost:8080/library/deleteBook/" + id)
      .then(response => {
        console.warn("Delete Service is working");
        this.refreshBook(response);

        alert(" Book deleted successfully");
      });
  }
  /*END OF DELETE METHOD = 1*/

  render() {
    return (
      <div className="col-sm-12">
        <br />

        <h3 align="center">LIST-BOOKS</h3>
        <br />
        <div className="container" onLoad={this.refreshBook}>
          <button
            className="btn btn-success"
            type="submit"
            onClick={this.routeAddBook}
          >
            <i className="fa fa-plus"> Add</i>
          </button>
          <br />

          <br />

          <table className="table">
            <thead>
              <tr>
                <th>BOOK-ID</th>
                <th>BOOK-ISBN</th>
                <th>BOOK-NAME</th>
                <th> &nbsp; &nbsp; &nbsp; &nbsp;ACTION</th>
              </tr>
            </thead>
            <tbody>
              {this.state.books.map(book => (
                <tr key={book.bookId}>
                  <td>{book.bookId}</td>
                  <td>{book.bookISBN}</td>
                  <td>{book.bookName}</td>
                  <td>
                    <button className="btn btn-primary" type="submit">
                      <i
                        className="fa fa-edit"
                        onClick={() => this.routeEditBook(book.bookId)}
                      >
                        Edit
                      </i>
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      //NORMAL CALL
                      // onClick={() => this.deleteBook(book.bookId)}

                      //CALL WITH CONFIRM MESSAGE
                      onClick={() =>
                        window.confirm(
                          "Are you sure you wish to delete this Book? "
                        ) && this.deleteBook(book.bookId)
                      }
                    >
                      <i className="fa fa-trash"> Delete</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListBook;
