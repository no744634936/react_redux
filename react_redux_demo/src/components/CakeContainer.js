import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import buyCake from "../redux/cakes/cakeActions.js"

function CakeContainer(){
    //注意state.cake.numOfCakes 这样写的原因是，rootReducer.js文件里有cake:cakeReducer,
    let numOfCakes=useSelector(state=>state.cake.numOfCakes) 
    let dispatch=useDispatch()
    return (
        <div>
            <h2>Number of cake-{numOfCakes}</h2>
            <button onClick={()=>{dispatch(buyCake())}}>Buy cake</button>
        </div>
    )
}

export default CakeContainer
