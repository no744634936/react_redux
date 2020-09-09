import React from 'react'
import {connect} from "react-redux"
import buyCake from "../redux/cakes/cakeActions.js"

function CakeContainer2(props){
    console.log(props.numOfCakes);
    return (
        <div>
            <h2>Number of cake-{props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        numOfCakes:state.cake.numOfCakes,
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer2)
