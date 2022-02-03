import React, { useState } from "react";

export const Form = ({ setCards, cards }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cat, setCat] = useState("React");
  const [url, setUrl] = useState("");

  const statusHandler = (e) => {
    setCat(e.target.value);
  };

  const addUri = () => {
    const newLink = {
      id: Math.random() * 1000,
      title: title,
      description: description,
      cat: cat,
      url: url,
    };
    setCards([...cards, newLink]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addUri();
    resetValues();
  };

  const resetValues = () => {
    setTitle("");
    setDescription("");
    setCat(cat);
    setUrl("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Web Name"
        />
        <input
          type="text"
          value={description}
          placeholder="Web Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          value={url}
          placeholder="Web Url"
          onChange={(e) => setUrl(e.target.value)}
        />
        <select name="Web Cat" id="category" onChange={statusHandler}>
          <option value="react">React</option>
          <option value="css">CSS</option>
          <option value="design">Design</option>
          <option value="js">JS</option>
          <option value="frontend">Frontend</option>
        </select>
        <button>Add</button>
      </form>
    </div>
  );
};
