import React, { useState } from "react";
import "../styles/Layout.css";
import { Card } from "./Card";
import { Form } from "./Form";

export const Layout = () => {
  const [cards, setCards] = useState([
    {
      id: Math.random() * 1000,
      title: "Building Grid",
      description: "How to implement css grid",
      cat: "CSS",
      url: "http://www.google.com",
    },
    {
      id: Math.random() * 1000,
      title: "Fundamental of JS",
      description: "Become a JS ninja",
      cat: "JS",
      url: "http://www.google.com",
    },
    {
      id: Math.random() * 1000,
      title: "All about React",
      description: "React Hooks and more",
      cat: "React",
      url: "http://www.google.com",
    },
    {
      id: Math.random() * 1000,
      title: "Figma Design",
      description: "User flows and figma",
      cat: "Design",
      url: "http://www.google.com",
    },
    {
      id: Math.random() * 1000,
      title: "Awesome web shape builder",
      description: "Create awesome CSS shapes",
      cat: "CSS",
      url: "http://www.google.com",
    },
  ]);
  return (
    <div className="grid-container">
      <Form setCards={setCards} cards={cards} />
      <div className="cards-container">
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};
