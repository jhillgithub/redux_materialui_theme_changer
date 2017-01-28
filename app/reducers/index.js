import { combineReducers } from "redux"

import user from "./userReducer"
import userTableConfig from "./userTableReducer"

export default combineReducers({
  user,
  userTableConfig,
})
