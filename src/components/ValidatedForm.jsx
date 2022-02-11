import { useContext } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { AppContext } from "../context/AppContext";

const urlSchema = yup.object({
  title: yup
    .string()
    .min(4, "Must be 4 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  notes: yup
    .string()
    .min(4, "Must be 4 characters or more")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  url: yup.string().url("Invalid url pattern").required("Required"),
  category: yup.string().required("Required"),
});

export default function ValidatedForm() {
  const { toggleModal, addBookmark } = useContext(AppContext);

  return (
    <Formik
      initialValues={{
        title: "",
        notes: "",
        url: "",
        category: "",
      }}
      validationSchema={urlSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        addBookmark(values);
      }}
    >
      {(props) => (
        <div className="form-container">
          <div className="input-wrapper">
            <div className="row">
              <label htmlFor="title">Title:</label>
              {props.touched.title && props.errors.title ? (
                <span className="error">{props.errors.title}</span>
              ) : null}
            </div>
            <input
              id="title"
              name="title"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.title}
              placeholder="Ex: Learn React Hooks"
            />
          </div>
          <div className="input-wrapper">
            <div className="row">
              <label htmlFor="notes">Notes:</label>
              {props.touched.notes && props.errors.notes ? (
                <span className="error">{props.errors.notes}</span>
              ) : null}
            </div>
            <input
              id="notes"
              name="notes"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.notes}
              placeholder="Ex: useState, useEffect .."
            />
          </div>
          <div className="input-wrapper">
            <div className="row">
              <label htmlFor="url">URL Address:</label>
              {props.touched.url && props.errors.url ? (
                <span className="error">{props.errors.url}</span>
              ) : null}
            </div>
            <input
              id="url"
              name="url"
              type="url"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.url}
              placeholder="Ex: https://reactjs.org/"
            />
          </div>
          <div className="input-wrapper">
            <div className="row">
              <label htmlFor="category">Category:</label>
              {props.touched.category && props.errors.category ? (
                <span className="error">{props.errors.category}</span>
              ) : null}
            </div>
            <div className="btn margin-left">
              <select
                id="category"
                name="category"
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.category}
              >
                <option value="">Category</option>
                <option value="react">React</option>
                <option value="css">CSS</option>
                <option value="design">Design</option>
                <option value="js">JS</option>
                <option value="frontend">Frontend</option>
              </select>
            </div>
          </div>
          <div className="btn-tab margin-2">
            <button type="submit" className="btn" onClick={props.handleSubmit}>
              Add
            </button>
          </div>
          <button className="form-delete" onClick={toggleModal}>
            x
          </button>
        </div>
      )}
    </Formik>
  );
}
