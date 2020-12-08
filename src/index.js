import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Product from './redux/pages/Product';
import reportWebVitals from './reportWebVitals';
import store from "./redux/Store/index"
import Container from './redux/pages/Product/Container';
import {Provider} from "react-redux"
// import Container from './路由';
// import {HashRouter as Router} from "react-router-dom"
// import Portas from './传送门portal';
// import Humanbeing from './高阶组件HOC/humanbeing';
// import A from "./跨组件传输context/index"

// store.subscribe(()=>
// ReactDOM.render(
//   <React.StrictMode>
//       {/* <A></A> */}
//       {/* <Portas></Portas> */}
//       {/* <Humanbeing></Humanbeing> */}
//      {/* <Router>
//      <Container></Container>
//      </Router> */}
//      {/* <Product></Product> */}
//      <Container></Container>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// )
ReactDOM.render(
  <React.StrictMode>
      {/* <A></A> */}
      {/* <Portas></Portas> */}
      {/* <Humanbeing></Humanbeing> */}
     {/* <Router>
     <Container></Container>
     </Router> */}
     {/* <Product></Product> */}
    <Provider store={store}>
    <Container></Container>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
