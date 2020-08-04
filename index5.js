
/*


//Async action
//fetch data via API and use that data in your application

//Async action 的state 模板
state={
    loading:true,//display a loading spinner in your application
    data:[],
    error:""
}


//action 模板
//fetch list of users
FETCH_USER_REQUEST

//fetched successfully
FETCH_USERS_SUCCESS

//error fetching the data
FETCH_USERS_FAILURE



//reducer 模板
case: FETCH_USER_REQUEST
    loading:true

case: FETCH_USERS_SUCCESS
    loading:false
    users:data(from api)

case: FETCH_USERS_FAILURE
    loading:false
    error: error(from api)

//how to make a api call

  npm install redux-thunk
  npm i node-fetch --save
*/

const fetch = require("node-fetch");
const redux=require("redux")
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware=require("redux-thunk").default


const initialState={
    loading:false,
    users:[],
    error:"",
}


const FETCH_USER_REQUEST="fetch users request"
const FETCH_USERS_SUCCESS="fetch users successfully"
const FETCH_USERS_FAILURE="fetch users failure"

const fetchUsersRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}
const fetchUsersSuccess=(users)=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
const fetchUsersFailure=(error)=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST: return{
            ...state,
            loading:true,
        }

        case FETCH_USERS_SUCCESS: return{
            loading:false,
            users:action.payload,
            error:""
        }
        case FETCH_USERS_FAILURE: return{
            loading:false,
            users:[],
            error:action.payload,
        }
    }
}

//async action creator with network request
// make api call
//只用安装了redux-thunk之后才能这样写
const fetchUser=()=>{
    return async (dispatch)=>{
        try{
            dispatch(fetchUsersRequest())   //显示获取中
            let response=await fetch("https://jsonplaceholder.typicode.com/users")
            let users = await response.json();
            dispatch(fetchUsersSuccess(users)) //获取数据功能并返回数据
        }catch(error){
            dispatch(fetchUsersFailure(error.message))  //获取数据失败，返回api的error
        }
    }
}

const store=redux.createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState());})
store.dispatch(fetchUser())