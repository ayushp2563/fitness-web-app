// src/reducers/sidebarReducer.js
const initialState = {
  showSidebar: false,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
