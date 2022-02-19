import { v4 as uuidv4 } from "uuid";

export function appReducer(state, action) {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return [
        ...state,
        {
          title: action.bookmark.title,
          notes: action.bookmark.notes,
          url: action.bookmark.url,
          category: action.bookmark.category,
          id: uuidv4(),
        },
      ];
    case "REMOVE_BOOKMARK":
      return state.filter((bookmark) => bookmark.id !== action.id);

    default:
      return state;
  }
}
