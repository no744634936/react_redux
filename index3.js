//index2.js 那种写法，如果state变得很大，那么就会变得比较难debug和manage
//所以要换这种写法。split state and reducer

const redux=require("redux")



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
const store=redux.createStore(allReducer);  
console.log("initial state",store.getState());

//create a listener everytime the state change we log it to the console.
const unsubscirbe=store.subscribe(()=>{
    console.log("update state",store.getState());
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscirbe();  //注销listener


