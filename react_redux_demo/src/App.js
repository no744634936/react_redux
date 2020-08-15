import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import IceCreamContainer from "./components/IceCreamContainer"
import {Provider} from "react-redux";
import store from "./redux/store.js"
import UserContainer from "./components/UserContainer"

function App() {
  return (
    <Provider store={store}>
        <div className="App">
        <CakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
        <UserContainer/>
        </div>
    </Provider>
  );
}

export default App;
