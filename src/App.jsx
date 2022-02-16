import { useContext } from "react";
// import { BsEmojiFrownFill } from "react-icons/bs";
// import { GiBoxingGlove } from "react-icons/gi";
// context
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

  // const emptyBookmarks = () => {
  //   if (bookmarks.length === 0) {
  //     return (
  //       <div className="popup">
  //         <h2>Let's get started ...</h2>
  //         <GiBoxingGlove color="#d3934b" className="icon" size={24} />
  //       </div>
  //     );
  //   }
  //   if (bookmarks.length !== 0 && filteredBookmarks.length === 0) {
  //     return (
  //       <div className="popup">
  //         <h2>Where's the love for {status}...</h2>
  //         <BsEmojiFrownFill color="#5ddd43" className="icon" size={24} />
  //       </div>
  //     );
  //   }
  // };

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
