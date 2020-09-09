import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import CakeContainer2 from './components/CakeContainer2';
import IceCreamContainer from "./components/IceCreamContainer"
import {Provider} from "react-redux";
import store from "./redux/store.js"

function App() {
  return (
    <Provider store={store}>
        <div className="App">
        <CakeContainer/>
        <hr/>
        <CakeContainer2/>
        <IceCreamContainer/>
        </div>
    </Provider>
  );
}

export default App;
