1, create a folder named redux_demo

2,npm init

3,npm install redux

4,查看
index.js file
index.js1 file
index.js2 file
index.js3 file
index.js4 file
index.js5 file



cd react_redux_demo
npm install react-redux
查看 react_redux_demo



redux/cakes/cakeTypes.js

redux/cakes/cakeActions.js

redux/cakes/cakeReducer.js

components/CakeContainer.js

redux/iceCream/iceCreamTypes.js

redux/iceCream/iceCreamActions.js

redux/iceCream/iceCreamReducer.js

redux/rootReducer.js
redux/store.js

app.js


---------------------------------------------------------


// 使用中间件
 1，npm install redux-logger

//
1,在chrome浏览器里 添加 redux devTools 插件

2，npm install --save redux-devtools-extension

3，查看redux/store.js 里面是如何导入这两个中间件的
 在浏览其中打开console就可以看到，log了
 点击 memory   application 后面的 >> 符号，就可以看见，一个redux的debug的页面
 
 
 //　使用redux 要用到的依赖包
 
 npm install redux react-redux redux-thunk redux-devtools-extension --save


