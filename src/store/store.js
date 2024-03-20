import { createStore } from "redux";

// Initial state
const initialState = {
  title: "DASHBOARD",
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
