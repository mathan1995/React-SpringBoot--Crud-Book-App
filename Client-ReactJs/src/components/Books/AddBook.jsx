import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

class AddBook extends Component {
  render() {
    return (
      <div>
        <h3 align="center">ADD-BOOKS</h3>
        <Formik>
          <Form className="container">
            <fieldset>
              <label>Book Id</label>
              <Field
                className="form-control"
                type="text"
                name="id"
                placeholder="Boook Id Here"
              />
            </fieldset>
            <fieldset className="form-group">
              <label> Book Isbn</label>
              <Field
                className="form-control"
                type="text"
                name="txtbookisbn"
                placeholder="Book ISBN Here"
              />
            </fieldset>
            <fieldset className="form-group">
              <label> Book Name</label>
              <Field
                className="form-control"
                type="text"
                name="txtbookname"
                placeholder="Book Name Here"
              />
            </fieldset>
            <button className="btn btn-success" type="submit" align="center">
              <i className="fa fa-plus"> Add</i>
            </button>
            &nbsp;
            <button className="btn btn-danger" type="reset" align="center">
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
