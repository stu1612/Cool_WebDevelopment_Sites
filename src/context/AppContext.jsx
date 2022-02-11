import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [status, setStatus] = useState("all");
  const [filteredBookmarks, setFilteredBookarks] = useState([]);

  const [bookmarks, setBookmarks] = useState([
    {
      id: Math.random() * 1000,
      title: "Building Grid",
      notes: "How to implement css grid",
      category: "css",
      url: "http://www.google.com",
    },
    {
      id: Math.random() * 1000,
      title: "Fundamental of JS",
      notes: "Become a JS ninja",
      category: "js",
      url: "http://www.google.com",
    },
    {
      id: Math.random() * 1000,
      title: "All about React",
      notes: "React Hooks and more",
      category: "react",
      url: "http://www.google.com",
    },
    {
      id: Math.random() * 1000,
      title: "Figma Design",
      notes: "User flows and figma",
      category: "design",
      url: "http://www.google.com",
    },
    {
      id: Math.random() * 1000,
      title: "Awesome web shape builder",
      notes: "Create awesome CSS shapes",
      category: "css",
      url: "http://www.google.com",
    },
  ]);

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const filterHandler = () => {
    switch (status) {
      case "react":
        setFilteredBookarks(
          bookmarks.filter((bookmark) => bookmark.category === "react")
        );
        break;
      case "css":
        setFilteredBookarks(
          bookmarks.filter((bookmark) => bookmark.category === "css")
        );
        break;
      case "design":
        setFilteredBookarks(
          bookmarks.filter((bookmark) => bookmark.category === "design")
        );
        break;
      case "js":
        setFilteredBookarks(
          bookmarks.filter((bookmark) => bookmark.category === "js")
        );
        break;
      case "frontend":
        setFilteredBookarks(
          bookmarks.filter((bookmark) => bookmark.category === "frontend")
        );
        break;
      default:
        setFilteredBookarks(bookmarks);
        break;
    }
  };

  const addBookmark = (urlObj) => {
    urlObj.id = Math.random() * 1000;
    setBookmarks((prevBookmark) => {
      return [urlObj, ...prevBookmark];
    });
    toggleModal();
  };

  const deleteBookmark = (id) => {
    const removeItem = bookmarks.filter((card) => {
      return card.id !== id;
    });
    setBookmarks(removeItem);
  };

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <AppContext.Provider
      value={{
        bookmarks,
        isModal,
        toggleModal,
        addBookmark,
        deleteBookmark,
        filterHandler,
        filteredBookmarks,
        status,
        setStatus,
        statusHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// {
//   id: Math.random() * 1000,
//   title: "Building Grid",
//   notes: "How to implement css grid",
//   category: "css",
//   url: "http://www.google.com",
// },
// {
//   id: Math.random() * 1000,
//   title: "Fundamental of JS",
//   notes: "Become a JS ninja",
//   category: "js",
//   url: "http://www.google.com",
// },
// {
//   id: Math.random() * 1000,
//   title: "All about React",
//   notes: "React Hooks and more",
//   category: "react",
//   url: "http://www.google.com",
// },
// {
//   id: Math.random() * 1000,
//   title: "Figma Design",
//   notes: "User flows and figma",
//   category: "design",
//   url: "http://www.google.com",
// },
// {
//   id: Math.random() * 1000,
//   title: "Awesome web shape builder",
//   notes: "Create awesome CSS shapes",
//   category: "css",
//   url: "http://www.google.com",
// },
