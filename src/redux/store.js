import { createStore } from "redux"
import apiReducer from "./reducer"

let store=createStore(apiReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store