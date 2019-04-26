import React, { Component } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
class EditBook extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [], name: null };
    this.state.books = {
      bookId: this.props.match.params.id,
      bookISBN: "",
      bookName: ""
    };
    this.handleChangeid = this.handleChangeid.bind(this);
    this.handleChangename = this.handleChangename.bind(this);
    this.handleChangeisbn = this.handleChangeisbn.bind(this);
    this.routeListBook = this.routeListBook.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/library/geBookById/" + this.props.match.params.id
      )
      .then(result => {
        console.table(result);
        this.setState({
          id: result.data.bookId,
          txtbookisbn: result.data.bookISBN,
          txtbookname: result.data.bookName
        });
      });
  }

  //GET ID METHOD
  handleChangeid(e) {
    this.setState({
      txtbookid: e.target.value
    });
  }

  //GET ISBN METHOD
  handleChangeisbn(f) {
    this.setState({
      txtbookisbn: f.target.value
    });
  }

  //GET NAME METHOD
  handleChangename(g) {
    this.setState({
      txtbookname: g.target.value
    });
  }

  //ON SUBMIT FORM METHOD
  onSubmit(e) {
    e.preventDefault();

    const update = {
      bookId: this.state.id,
      bookISBN: this.state.txtbookisbn,
      bookName: this.state.txtbookname
    };
    axios.put("http://localhost:8080/library/updateBook", update).then(res => {
      if (res.status === 200) {
        alert("Book update successfully.");
        window.location.reload();
      }
    });

    this.routeListBook();
  }

  //BACK BOOK LIST
  routeListBook() {
    let path = `/`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="col-sm-12">
        <div className="container">
          <br />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={this.routeListBook}
          >
            <i className="fa fa-arrow-circle-left  "> Back</i>
          </button>
          <h3 align="center">EDIT-BOOKS</h3>
        </div>

        <Formik>
          <Form className="container" onSubmit={this.onSubmit}>
            <fieldset>
              <label>Book Id</label>
              <Field
                className="form-control"
                type="text"
                name="id"
                value={this.state.id}
                onChange={this.handleChangeid}
                placeholder="Boook Id Here"
                disabled
              />
            </fieldset>
            <fieldset className="form-group">
              <label> Book Isbn</label>
              <Field
                className="form-control"
                type="text"
                name="txtbookisbn"
                value={this.state.txtbookisbn}
                onChange={this.handleChangeisbn}
                placeholder="Book ISBN Here"
              />
            </fieldset>
            <fieldset className="form-group">
              <label> Book Name</label>
              <Field
                className="form-control"
                type="text"
                name="txtbookname"
                value={this.state.txtbookname}
                onChange={this.handleChangename}
                placeholder="Book Name Here"
              />
            </fieldset>
            <button
              className="btn btn-success"
              value="Submit"
              type="submit"
              align="center"
            >
              <i className="fa fa-plus"> Update</i>
            </button>
            &nbsp;
            <button
              className="btn btn-danger"
              type="reset"
              onClick={this.routeListBook}
              align="center"
            >
              <i className="fa fa-location-arrow"> cancel</i>
            </button>
            <br />
            &nbsp; &nbsp; &nbsp;
          </Form>
        </Formik>
      </div>
    );
  }
}

export default EditBook;
