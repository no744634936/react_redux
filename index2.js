
//多个reducer

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
const initialState={
    numOfCakes:10,
    numOfIceCreams:20
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams:state.numOfIceCreams-1,
        }
        default: return state
    }
    
}

//store 

const store=redux.createStore(reducer);  //hold on application state,因为reducer里面有initialState
console.log("initial state",store.getState());   //get current state

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


