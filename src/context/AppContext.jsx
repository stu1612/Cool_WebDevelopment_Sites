import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useReducer,
} from "react";
import { appReducer } from "../reducers/appReducer";

export const AppContext = createContext();

const storageKey = "bookmarks";

export const AppContextProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [status, setStatus] = useState("all");
  const [filteredBookmarks, setFilteredBookmarks] = useState([]);
  const [bookmarks, dispatch] = useReducer(appReducer, [], () => {
    const getLocalStorage = localStorage.getItem(storageKey);
    return getLocalStorage ? JSON.parse(getLocalStorage) : [];
  });

  const setLocalStorage = useCallback(() => {
    const data = localStorage.setItem(storageKey, JSON.stringify(bookmarks));
    return data;
  }, [bookmarks]);

  useEffect(() => setLocalStorage(storageKey), [setLocalStorage]);

  const statusHandler = (e) => {
    setStatus(e.target.value);
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
        dispatch,
        filteredBookmarks,
        status,
        setStatus,
        statusHandler,
        setFilteredBookmarks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
