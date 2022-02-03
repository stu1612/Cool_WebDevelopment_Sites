import React from "react";
import "../styles/Card.css";

export const Card = ({ card }) => {
  return (
    // <div className="card">
    //   <div className="card-top">
    //     <h2>{card.title}</h2>
    //   </div>
    //   <div className="card-bottom">
    //     <p>"{card.description}"</p>
    //     <button>
    //       <a href={card.url} target="_blank" rel="noreferrer">
    //         Open
    //       </a>
    //     </button>
    //   </div>
    // </div>
    <div className="card">
      <div className="card-top">
        <h2>{card.title}</h2>
      </div>
      <div className="card-bottom">
        <p>"{card.description}"</p>
        <button>
          <a href={card.url} target="_blank" rel="noreferrer">
            Open
          </a>
        </button>
      </div>
    </div>
  );
};
