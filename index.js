
const redux=require("redux")

//action creator is a function, which return an action
//action is a object which have a type property
const BUY_CAKE="buy a cake"

buyCake=()=>{
    return {
        type:BUY_CAKE,
        info: "first redux action"
    }
}

//reducer
//reducer is a function which accepts state and action as arguments and return the next state of the application 
//(previousState,action)=> newState

//...state,表示的是state里的其他属性，如果有的话

const initialState={
    numOfCakes:10
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default: return state
    }
    
}

//store 
//hold on application state
//access state via getState()
//update state via dispatch(action)
//register listener via subscribe(listener)
//handles unregistering of listeners via the function returned by subscribe(listener)

const store=redux.createStore(reducer);  //hold on application state,因为reducer里面有initialState
console.log("initial state",store.getState());   //get current state

//create a listener everytime the state change we log it to the console.
const unsubscirbe=store.subscribe(()=>{
    console.log("update state",store.getState());
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscirbe();  //注销listener


