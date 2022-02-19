import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
// utils
import bookmarkFilter from "../utils/bookmarkFilter";

export default function FilterBookmarks() {
  const { statusHandler, status, bookmarks, setFilteredBookmarks } =
    useContext(AppContext);

  useEffect(() => {
    bookmarkFilter(status, bookmarks, setFilteredBookmarks);
  }, [status, bookmarks, setFilteredBookmarks]);

  return (
    <select onChange={statusHandler} className="btn">
      <option value="all">Filter</option>
      <option value="react">React</option>
      <option value="css">CSS</option>
      <option value="design">Design</option>
      <option value="js">JS</option>
      <option value="frontend">Frontend</option>
    </select>
  );
}
