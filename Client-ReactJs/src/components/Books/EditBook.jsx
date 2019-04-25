import React, { Component } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
class EditBook extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [], name: null };
    this.state = { bookId: "", bookISBN: "", bookName: "" };
    this.handleChange = this.handleChange.bind(this);
    this.routeListBook = this.routeListBook.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/library/findAll" + this.props.match.params.txtid
      )
      .then(result => {
        // console.log(result);
        this.setState({
          bookId: result.txtid,
          bookISBN: result.txtbookisbn,
          bookName: result.txtbookname
        });
      });
  }

  handleChange(event) {
    const state = this.state;
    state[event.target.txtid] = event.target.value;
    this.setState(state);
  }

  //ON SUBMIT FORM METHOD
  onSubmit(e) {
    e.preventDefault();
    const update = {
      bookId: this.state.txtbookid,
      bookISBN: this.state.txtbookisbn,
      bookName: this.state.txtbookname
    };
    axios.put("http://localhost:8080/library/updateBook", update).then(res => {
      if (res.status === 200) {
        alert("Book update successfully.");
      }
    });

    // this.setState({
    //   bookId: res.txtbookid,
    //   bookISBN: res.txtbookisbn,
    //   bookName: res.txtbookname
    // });
    this.routeListBook();
  }

  //BACK BOOK LIST
  routeListBook() {
    let path = `/BackBookList`;
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
