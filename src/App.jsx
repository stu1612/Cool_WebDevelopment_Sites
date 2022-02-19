import { useContext } from "react";
import { AppContext } from "./context/AppContext";
// components
import Card from "./components/Card";
import Modal from "./components/Modal";
import FilterBookmarks from "./components/FilterBookmarks";
// styles
import "./App.css";
//utils
import { emptyBookmarks } from "./utils/emptyBookmark";

export default function App() {
  const { toggleModal, bookmarks, isModal, filteredBookmarks, status } =
    useContext(AppContext);

  const bookmarkItems =
    filteredBookmarks &&
    filteredBookmarks.map((bookmark) => (
      <Card bookmark={bookmark} key={bookmark.id} />
    ));

  const empty = emptyBookmarks(bookmarks, filteredBookmarks, status);

  return (
    <div className="App">
      <div className="grid-container">
        {empty}
        <div className="buttons-container">
          <FilterBookmarks />
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
