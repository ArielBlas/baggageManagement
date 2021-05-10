import { createStore, applyMiddleware, compose } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import reducer from "./reducers/index"

export default () =>
  createStore(
    reducer,
    compose(applyMiddleware(thunkMiddleware, createLogger()))
  )
