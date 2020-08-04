import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import buyIceCream from "../redux/iceCream/iceCreamAction"

function IceCreamContainer(){

    ////注意state.iceCream.numOfIceCreams 这样写的原因是，rootReducer.js文件里有iceCream:iceCreamReducer,
    let numOfIceCreams=useSelector(state=>state.iceCream.numOfIceCreams)
    let dispatch=useDispatch()
    return (
        <div>
            <h2>Number of ice creams-{numOfIceCreams}</h2>
            <button onClick={()=>{dispatch(buyIceCream())}}>Buy iceCream</button>
        </div>
    )
}

export default IceCreamContainer