import {BUY_NEW_CAKE} from "./newCakeTypes.js"

const buyCakes=(number=1)=>{
    console.log("number",number);
    return({
        type:BUY_NEW_CAKE,
        payload:number
    })
}

export default buyCakes