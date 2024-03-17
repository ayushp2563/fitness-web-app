// reducer.js

import { SET_NAVBAR_TITLE } from "../actions/actions";

const initialState = {
  navbarTitle: "DASHBOARD",
};

const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAVBAR_TITLE:
      return {
        ...state,
        navbarTitle: action.payload,
      };
    default:
      return state;
  }
};

export default titleReducer;
