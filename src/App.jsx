import { useContext, useEffect } from "react";
// context
import { AppContext } from "./context/AppContext";
// components
import Card from "./components/Card";
import Modal from "./components/Modal";
// styles
import "./App.css";
// import FilterCategories from "./components/FilterCategories";

export default function App() {
  const {
    toggleModal,
    bookmarks,
    isModal,
    statusHandler,
    status,
    filteredBookmarks,
    filterHandler,
  } = useContext(AppContext);

  useEffect(() => {
    filterHandler();
  }, [status, bookmarks]);

  const bookmarkItems = filteredBookmarks.map((bookmark) => (
    <Card card={bookmark} key={bookmark.id} />
  ));

  const emptyArr =
    bookmarks.length === 0 ? (
      <h2 className="popup">Let's get started ...</h2>
    ) : null;

  return (
    <div className="App">
      <div className="grid-container">
        {emptyArr}
        <button onClick={toggleModal} className="btn btn-white">
          Add link
        </button>
        <div className="cards-container">{bookmarkItems}</div>
        <div className="filter-container">
          <select onChange={statusHandler}>
            <option value="all">All</option>
            <option value="react">React</option>
            <option value="css">CSS</option>
            <option value="design">Design</option>
            <option value="js">JS</option>
            <option value="frontend">Frontend</option>
          </select>
        </div>
      </div>
      {isModal ? <Modal /> : null}
    </div>
  );
}
