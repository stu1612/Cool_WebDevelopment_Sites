import { useContext, useEffect } from "react";
// context
import { AppContext } from "./context/AppContext";
// components
import Card from "./components/Card";
import Modal from "./components/Modal";
// styles
import "./App.css";
import FilterBookmarks from "./components/FilterBookmarks";

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

  const bookmarkItems =
    filteredBookmarks &&
    filteredBookmarks.map((bookmark) => (
      <Card bookmark={bookmark} key={bookmark.id} />
    ));

  const emptyBookmark = bookmarks.length === 0 && (
    <h2 className="popup">Let's get started ...</h2>
  );

  const emptyFilteredArray = filteredBookmarks.length === 0 && (
    <h2 className="popup">No love for {status} ?</h2>
  );

  return (
    <div className="App">
      <div className="grid-container">
        {emptyBookmark}
        {emptyFilteredArray}
        <div className="buttons-container">
          {/* <div className="btn"> */}
          <div>
            <FilterBookmarks changeHandler={statusHandler} />
          </div>
          <button onClick={toggleModal} className="btn">
            Add link
          </button>
        </div>
        <div className="bookmarks-container">{bookmarkItems}</div>
      </div>
      {isModal && <Modal />}
    </div>
  );
}
