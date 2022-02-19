export default function bookmarkFilter(status, state, stateSetter) {
  switch (status) {
    case "react":
      stateSetter(state.filter((item) => item.category === "react"));
      break;
    case "css":
      stateSetter(state.filter((item) => item.category === "css"));
      break;
    case "design":
      stateSetter(state.filter((item) => item.category === "design"));
      break;
    case "js":
      stateSetter(state.filter((item) => item.category === "js"));
      break;
    case "frontend":
      stateSetter(state.filter((item) => item.category === "frontend"));
      break;
    default:
      stateSetter(state);
      break;
  }
}
