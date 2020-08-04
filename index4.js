//redux middleware example        npm install redux-logger


const redux=require("redux")
const reduxLogger=require("redux-logger")
const logger=reduxLogger.createLogger()


const BUY_CAKE="buy a cake"
const BUY_ICECREAM="buy a ice cream"

buyCake=()=>{
    return {
        type:BUY_CAKE,
        info: "first redux action"
    }
}

buyIceCream=()=>{
    return {
        type:BUY_ICECREAM,
        info: "second redux action"
    }
}


//reducer
//split state and reducer
const initialCakeState={
    numOfCakes:10,
}

const initailIceCreamState={
    numOfIceCreams:20
}

const cakeReducer =(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default: return state
    }
    
}
const iceCreamReducer =(state=initailIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams:state.numOfIceCreams-1,
        }
        default: return state
    }
    
}


//combine mutiple reducer
const allReducer=redux.combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})


//store 
//使用middleware
const store=redux.createStore(allReducer,redux.applyMiddleware(logger));  
console.log("initial state",store.getState());

//create a listener everytime the state change we log it to the console.
const unsubscirbe=store.subscribe(()=>{})   //logger 中间件接管了监听。

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscirbe();  //注销listener


