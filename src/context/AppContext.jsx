import { createContext, useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [status, setStatus] = useState("all");
  const [filteredBookmarks, setFilteredBookmarks] = useState([]);

  const LSKey = "bookmarks";

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(LSKey)) ?? [];
    } catch {
      return [];
    }
  });

  const setLSStorage = useCallback(() => {
    localStorage.setItem(LSKey, JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    setLSStorage();
  }, [setLSStorage]);

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const filterBookmark = useCallback(() => {
    switch (status) {
      case "react":
        setFilteredBookmarks(
          bookmarks.filter((bookmark) => bookmark.category === "react")
        );
        break;
      case "css":
        setFilteredBookmarks(
          bookmarks.filter((bookmark) => bookmark.category === "css")
        );
        break;
      case "design":
        setFilteredBookmarks(
          bookmarks.filter((bookmark) => bookmark.category === "design")
        );
        break;
      case "js":
        setFilteredBookmarks(
          bookmarks.filter((bookmark) => bookmark.category === "js")
        );
        break;
      case "frontend":
        setFilteredBookmarks(
          bookmarks.filter((bookmark) => bookmark.category === "frontend")
        );
        break;
      default:
        setFilteredBookmarks(bookmarks);
        break;
    }
  }, [bookmarks, status]);

  const addBookmark = (title, notes, category, url) => {
    const newBookmark = {
      title: title,
      notes: notes,
      category: category,
      url: url,
      id: uuidv4(),
    };
    setBookmarks([newBookmark, ...bookmarks]);
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
        filterBookmark,
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
