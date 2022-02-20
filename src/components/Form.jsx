import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
// utils
import errorSchema from "../utils/errorSchema";

const STATUS = {
  IDLE: "IDLE",
  SUBMITTED: "SUBMITTED",
  SUBMITTING: "SUBMITTING",
  COMPLETED: "COMPLETED",
};

export default function Form() {
  const { toggleModal, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);
  const [saveError, setSaveError] = useState(null);

  const errors = errorSchema(title, notes, category, url);

  const isFormValid = Object.keys(errors).length === 0;

  function blurHandler(event) {
    setTouched((value) => {
      return { ...value, [event.target.id]: true };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    setStatus(STATUS.SUBMITTING);
    if (isFormValid) {
      try {
        dispatch({
          type: "ADD_BOOKMARK",
          bookmark: { title, notes, url, category },
        });
        setStatus(STATUS.COMPLETED);
      } catch (err) {
        setSaveError(err);
      } finally {
        toggleModal();
      }
    } else {
      setStatus(STATUS.SUBMITTED);
    }
  }

  if (saveError) throw saveError;

  return (
    <form onSubmit={submitHandler} className="form-container">
      <div className="input-wrapper">
        <div className="margin-1" />
        <div className="row">
          <label htmlFor="title">Title:</label>
          <span className="error">
            {(touched.title || status === STATUS.SUBMITTED) && errors.title}
          </span>
        </div>
        <input
          id="title"
          name="title"
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          onBlur={blurHandler}
          value={title}
          placeholder="Ex: Learn React Hooks"
        />
      </div>
      <div className="input-wrapper">
        <div className="row">
          <label htmlFor="notes">Notes:</label>
          <span className="error">
            {(touched.notes || status === STATUS.SUBMITTED) && errors.notes}
          </span>
        </div>
        <input
          id="notes"
          name="notes"
          type="text"
          onChange={(event) => setNotes(event.target.value)}
          onBlur={blurHandler}
          value={notes}
          placeholder="Ex: useState, useEffect .."
        />
      </div>
      <div className="input-wrapper">
        <div className="row">
          <label htmlFor="url">URL Address:</label>
          <span className="error">
            {(touched.url || status === STATUS.SUBMITTED) && errors.url}
          </span>
        </div>
        <input
          id="url"
          name="url"
          type="url"
          onChange={(event) => setUrl(event.target.value)}
          onBlur={blurHandler}
          value={url}
          placeholder="Ex: https://reactjs.org/"
        />
      </div>
      <div className="input-wrapper">
        <div className="row">
          <label htmlFor="category">Category:</label>
          <span className="error">
            {(touched.cetegory || status === STATUS.SUBMITTED) &&
              errors.category}
          </span>
        </div>
        <select
          id="category"
          name="category"
          type="text"
          onChange={(event) => setCategory(event.target.value)}
          onBlur={blurHandler}
          value={category}
          className="btn margin-left"
        >
          <option value="">Category</option>
          <option value="react">React</option>
          <option value="css">CSS</option>
          <option value="design">Design</option>
          <option value="js">JS</option>
          <option value="frontend">Frontend</option>
        </select>
      </div>
      <div className="buttons-container margin-2">
        <input
          type="submit"
          className="btn"
          disabled={status === STATUS.SUBMITTING}
        />
      </div>
      <button className="form-delete" onClick={toggleModal}>
        CLOSE
      </button>
    </form>
  );
}
