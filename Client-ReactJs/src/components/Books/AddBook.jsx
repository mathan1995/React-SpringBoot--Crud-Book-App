import React, { Component } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [], name: null };
    this.state = { bookId: "", bookISBN: "", bookName: "" };
    this.handleChangeid = this.handleChangeid.bind(this);
    this.handleChangename = this.handleChangename.bind(this);
    this.handleChangeisbn = this.handleChangeisbn.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.routeListBook = this.routeListBook.bind(this);
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
    const save = {
      bookId: this.state.txtbookid,
      bookISBN: this.state.txtbookisbn,
      bookName: this.state.txtbookname
    };
    axios.post("http://localhost:8080/library/saveBook", save).then(res => {
      if (res.status === 200) {
        alert("Book Added successfully.!");
        window.location.reload();
      }
    });

    this.setState({
      bookId: "",
      bookISBN: "",
      bookName: ""
    });

    this.routeListBook();
  }

  //BACK FUNCTION TO BOOK lIST
  routeListBook() {
    let path = `/`;
    this.props.history.push(path);
  }

  //RENDERING PATTERN
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
          <h3 align="center">ADD-BOOKS</h3>
        </div>

        <Formik>
          <Form className="container" onSubmit={this.onSubmit}>
            <fieldset>
              <label>Book Id</label>
              <Field
                className="form-control"
                type="text"
                name="txtid"
                value={this.state.txtid}
                onChange={this.handleChangeid}
                placeholder="Boook Id Here"
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
              <i className="fa fa-plus"> Add</i>
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

export default AddBook;
