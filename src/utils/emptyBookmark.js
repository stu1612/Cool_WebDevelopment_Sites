import { BsEmojiFrownFill } from "react-icons/bs";
import { GiBoxingGlove } from "react-icons/gi";

export function emptyBookmarks(state, filteredState, status) {
  if (state.length === 0) {
    return (
      <div className="popup">
        <h2>Let's get started ...</h2>
        <GiBoxingGlove color="#d3934b" className="icon" size={24} />
      </div>
    );
  }
  if (state.length !== 0 && filteredState.length === 0) {
    return (
      <div className="popup">
        <h2>Where's the love for {status}...</h2>
        <BsEmojiFrownFill color="#5ddd43" className="icon" size={24} />
      </div>
    );
  }
}
