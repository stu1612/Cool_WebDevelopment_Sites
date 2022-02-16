import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function FilterBookmarks() {
  const { statusHandler, filterBookmark } = useContext(AppContext);

  useEffect(() => {
    filterBookmark();
  }, [filterBookmark]);

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
