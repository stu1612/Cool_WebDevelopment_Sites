import { useContext } from "react";
// context
import { AppContext } from "../context/AppContext";
// icons
import { CgEnter } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";

export default function Card({ bookmark }) {
  const { deleteBookmark } = useContext(AppContext);

  const { title, notes, category, url, id } = bookmark;

  return (
    <div className="card" key={id}>
      <div className={`card-cat ${category}`}>
        <span className="category-text">{category}</span>
      </div>
      <button className="open mobile">
        <a href={url} target="_blank" rel="noreferrer">
          <CgEnter size={22} />
        </a>
      </button>
      <div className="card-info">
        <h2 className="truncate">{title}</h2>
        <p className="truncate card-text">{notes}</p>
      </div>
      <button className="open desktop">
        <a href={url} target="_blank" rel="noreferrer">
          <CgEnter size={22} />
        </a>
      </button>
      <div className="delete">
        <CgCloseO size={22} onClick={() => deleteBookmark(id)} />
      </div>
    </div>
  );
}
