import {combineReducers} from "redux"
import cakeReducer from "./cakes/cakeReducer"
import newCakeReducer from "./cakes/newCakeReducer"
import iceCreamReducer from "./iceCream/iceCreamReducer"

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    newCake:newCakeReducer
})


export default rootReducer