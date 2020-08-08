import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import buyCakes from "../redux/cakes/newCakeAcitons.js"

function NewCakeContainer(){
    const [number, setNumber] = useState(1) // [変数, 変数に値をセットする関数] 1为number的初始值
    
    //注意state.cake.new_numOfCakes 这样写的原因是，rootReducer.js文件里有cake:cakeReducer,
    let new_numOfCakes=useSelector(state=>state.newCake.new_numOfCakes) 
    let dispatch=useDispatch()
    return (
        <div>
            <h2>------------------------------------------------</h2>
            <h2>Number of new cake-{new_numOfCakes}</h2>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>{dispatch(buyCakes(number))}}>Buy {number} cakes</button>
        </div>
    )
}

export default NewCakeContainer
