import React,{useEffect}from 'react'
import {useSelector,useDispatch} from "react-redux"
import fetchUser from "../redux/user/userActions.js"



function UserContainer() {

    let dispatch=useDispatch()
    //第2引数に空の配列が渡された場合、マウント・アンマウント時のみ第１引数の関数を実行します。
    //第2引数に値の配列が渡された場合、最初のマウント時と与えられた値に変化があった場合のみ第１引数の関数を実行します。
    useEffect(()=>{
        dispatch(fetchUser());
    },[dispatch])

    let user_data=useSelector(state=>state.userData) //注意这里写的不是state.userData.users;因为我需要loading 更error这些东西
    console.log(user_data);

    return(
        user_data.loading?(
            <h2>loading</h2>
        ):user_data.error?(
            <h2>{user_data.error}</h2>
        ):(
            <div>
                <h2>user list</h2>
                <div>
                    {
                        user_data.users.map(user=>
                            <p key={user.id}>{user.name}</p>
                        )
                    }
                </div>
            </div>
        )
    )
}

export default UserContainer
