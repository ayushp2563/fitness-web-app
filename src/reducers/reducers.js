import { combineReducers } from "redux";
import sidebarReducer from "./sidebarReducer";
import titleReducer from "./titleReducers";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  title: titleReducer,
  // Add other reducers here
});

export default rootReducer;
