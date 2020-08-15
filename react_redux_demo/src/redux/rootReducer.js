import {combineReducers} from "redux"
import cakeReducer from "./cakes/cakeReducer"
import newCakeReducer from "./cakes/newCakeReducer"
import iceCreamReducer from "./iceCream/iceCreamReducer"
import userReducer from "./user/userReducer"

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    newCake:newCakeReducer,
    userData:userReducer,
})


export default rootReducer