import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Comp from "./components/Companies/Comp";
import Resi from "./components/Residence/Resi";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Get from"./components/Get/Get";
import Foot from "./components/Footer/Foot";

import "./App.css"
function App() {
  

  return (
    <>
     <div className="app">

      <div className="circle-gradient"/>
      <div>
      
        <Header/>
        <Hero/>
        </div>
        </div>
        <Comp/>
        <Resi/>
        <Value/>
        <Contact/>
        <Get/>
        <Foot/>
       
        
    </>
  )
}

export default App
