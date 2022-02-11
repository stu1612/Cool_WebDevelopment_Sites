import { useContext, useEffect } from "react";
// context
import { AppContext } from "./context/AppContext";
// components
import Card from "./components/Card";
import Modal from "./components/Modal";
// styles
import "./App.css";

export default function App() {
  const {
    toggleModal,
    bookmarks,
    isModal,
    statusHandler,
    filteredBookmarks,
    filterHandler,
    status,
  } = useContext(AppContext);

  useEffect(() => {
    filterHandler();
  }, [filterHandler]);

  const bookmarkItems = filteredBookmarks.map((bookmark) => (
    <Card card={bookmark} key={bookmark.id} />
  ));

  const emptyBookmark =
    bookmarks.length === 0 ? (
      <h2 className="popup">Let's get started ...</h2>
    ) : null;

  const emptyFilteredArr =
    filteredBookmarks.length === 0 ? (
      <h2 className="popup">No love for {status} ?</h2>
    ) : null;

  return (
    <div className="App">
      <div className="grid-container">
        {emptyBookmark}
        {emptyFilteredArr}
        <div className="buttons-container">
          <div className="btn">
            <select onChange={statusHandler}>
              <option value="all">Entries</option>
              <option value="react">React</option>
              <option value="css">CSS</option>
              <option value="design">Design</option>
              <option value="js">JS</option>
              <option value="frontend">Frontend</option>
            </select>
          </div>
          <button onClick={toggleModal} className="btn">
            Add link
          </button>
        </div>
        <div className="bookmarks-container">{bookmarkItems}</div>
      </div>
      {isModal ? <Modal /> : null}
    </div>
  );
}
