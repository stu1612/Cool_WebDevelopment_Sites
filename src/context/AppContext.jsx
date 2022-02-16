import { createContext, useState, useEffect, useCallback } from "react";

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

  const filterHandler = useCallback(() => {
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
