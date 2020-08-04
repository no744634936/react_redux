const { BUY_ICECREAM } = require("./iceCreamTypes.js")

const InitialState={
    numOfIceCreams:20
}

const iceCreamReducer=(state=InitialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM: return({
            ...state,
            numOfIceCreams:state.numOfIceCreams-1,
        })
        default: return state
    }
    
}

export default iceCreamReducer