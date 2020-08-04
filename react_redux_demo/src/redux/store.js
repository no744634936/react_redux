import {createStore,applyMiddleware} from "redux"
import rootReducer from "./rootReducer.js"
import logger from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension';

//composeWithDevTools(applyMiddleware(logger)) 使用了 logger 跟 redux-devtools-extension 两个中间件
const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store