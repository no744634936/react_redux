const { BUY_NEW_CAKE } = require("./newCakeTypes")

const InitialState={
    new_numOfCakes:15
}

const newCakeReducer=(state=InitialState,action)=>{
    switch(action.type){
        case BUY_NEW_CAKE: return({
            ...state,
            new_numOfCakes:state.new_numOfCakes-action.payload,
        })
        default: return state
    }
    
}

export default newCakeReducer