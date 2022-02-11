import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { CgEnter } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";

export default function Card({ card }) {
  const { deleteURL } = useContext(AppContext);
  return (
    <div className="card" key={card.id}>
      <div className={`card-cat ${card.category}`}>
        <span className="category-text">{card.category}</span>
      </div>
      <div className="card-info">
        <h2 className="truncate">{card.title}</h2>
        <p className="card-text">{card.notes}</p>
      </div>
      <button className="open">
        <a href={card.url} target="_blank" rel="noreferrer" className="link">
          <CgEnter size={22} />
        </a>
      </button>
      <div className="delete">
        <CgCloseO size={22} onClick={() => deleteURL(card.id)} />
      </div>
    </div>
  );
}
