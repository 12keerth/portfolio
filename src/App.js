import React from 'react';
import Nav from "./component/portfolio/nav";
import Hero from "./component/portfolio/hero";
import About from "./component/portfolio/about";
import Services from "./component/portfolio/services";
import MyWork from "./component/portfolio/works";
import Contact from "./component/portfolio/contact";
import Footer from "./component/portfolio/footer";
function App() {
   return(       
      <div className="App"> 
      <Nav />
       <Hero />
      <About />
       <Services />
       <MyWork />
       <Contact />
       <Footer /> 
 </div>
 );
 }
 export default App;
   
 

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './component/header';
// import Section from './component/Section';
// import { DataProvider } from './component/Context';
// import Services from './component/service';
// import Product from './component/Products';
// import Details from './component/Details';

// class App extends React.Component {
//    render() {
//       return (
//          <DataProvider>
//             <div className="app">
//                <Router>
//                   <Header />
//                   <Routes>
//                      <Route path="/" element={<Section />} />
//                      <Route path="/services" element={<Services />} />
//                      <Route path="/products" element={<Product />} />
//                      <Route path="/details/:id" element={<Details />} />
//                   </Routes>
//                </Router>
//             </div>
//          </DataProvider>
//       );
//    }
// }

// export default App;




