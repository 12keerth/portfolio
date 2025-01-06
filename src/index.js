// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
// import  Home  from './component/home';
// import About from './component/about'
// import  Service from './component/service';
 //import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route} from 'react-router';

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";

// ReactDOM.render(<App />, //document.getElementById("root"));

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
  //{/* {  <BrowserRouter>
  //   <Routes>
  //    <Route path="/" element={<Home />}/>
  //    <Route path="/about" element={<About />}/>
  //    <Route path="/service" element={<Service />}/>
  //    </Routes>
    //   </BrowserRouter> *///}
    //<App />
  //</React.StrictMode>
  
//);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App heading="Initial Heading"/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
