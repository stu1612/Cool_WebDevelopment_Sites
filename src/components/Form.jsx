import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Formik } from "formik";

const STATUS = {
  IDLE: "IDLE",
  SUBMITTED: "SUBMITTED",
  SUBMITTING: "SUBMITTING",
  COMPLETED: "COMPLETED",
};

export default function Form({ setCards, cards }) {
  const { toggleModal, addURL } = useContext(AppContext);
  const [values, setValues] = useState({});
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("react");
  // const [url, setUrl] = useState("");
  const [isTrueURL, setIsTrueURL] = useState(false);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [saveError, setSaveError] = useState(null);
  const [touched, setTouched] = useState({});

  const resetValues = () => {
    setValues({});
    // setTitle("");
    // setDescription("");
    // setCategory(category);
    // setUrl("");
  };

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

  // const getErrors = (title, description) => {
  //   const result = {};
  //   if (title.length < 4 || title.length > 15)
  //     result.title = "Title must be between 4 and 15 chars";
  //   if (description.length < 4 || description.length > 15)
  //     result.description = "Description must be between 4 and 15 chars";
  //   return result;
  // };

  // const errors = getErrors(title, description);

  // const isValid = Object.keys(errors).length === 0;

  // const blurHandler = (e) => {
  //   setTouched((value) => {
  //     return { ...value, [e.target.id]: true };
  //   });
  // };

  // const urlPatternValidation = (url) => {
  //   const regex = new RegExp(
  //     "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
  //   );
  //   return regex.test(url);
  // };

  // const changeURLHandler = (e) => {
  //   const { value } = e.target;
  //   setIsTrueURL(!value || urlPatternValidation(url));
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   setStatus(STATUS.SUBMITTING);

  //   try {
  //     addURL(title, description, category, url);
  //     resetValues();
  //     toggleModal();
  //     setStatus(STATUS.COMPLETED);
  //   } catch (e) {
  //     setSaveError(e);
  //   }
  // };

  return (
    // <form onSubmit={submitHandler} className="form-container">
    //   <div className="input-wrapper">
    //     <label>Name:</label>
    //     <input
    //       type="text"
    //       value={title}
    //       onChange={(e) => setTitle(e.target.value)}
    //       onBlur={blurHandler}
    //       placeholder="Web Name"
    //     />
    //     <span className="error">
    //       {(touched.title || status === STATUS.SUBMITTED) && errors.title}
    //     </span>
    //   </div>
    //   <div className="input-wrapper">
    //     <label>Description:</label>
    //     <input
    //       type="text"
    //       value={description}
    //       placeholder="Web Description"
    //       onChange={(e) => setDescription(e.target.value)}
    //       onBlur={blurHandler}
    //     />
    //     <span className="error">
    //       {(touched.description || status === STATUS.SUBMITTED) &&
    //         errors.description}
    //     </span>
    //   </div>
    //   <div className="input-wrapper">
    //     <label>Web Link: </label>
    //     <input
    //       type="text"
    //       value={url}
    //       placeholder="Web Url"
    //       onChange={(e) => setUrl(e.target.value)}
    //     />
    //     <span className="error">
    //       {(touched.url || status === STATUS.SUBMITTED) && errors.url}
    //     </span>
    //   </div>
      <div className="btn-container">
        <select
          name="Web Cat"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
          className="select-btn"
        >
          <option value="react">React</option>
          <option value="css">CSS</option>
          <option value="design">Design</option>
          <option value="js">JS</option>
          <option value="frontend">Frontend</option>
        </select>
        <button className="btn btn-yellow">Add</button>
      </div>
      <button className="form-delete" onClick={toggleModal}>
        x
      </button>
    // </form>
   
  );
}
