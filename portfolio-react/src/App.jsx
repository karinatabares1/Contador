import { Routes, Route } from "react-router-dom"
import { Home } from "./components/pages/Home/Home"; 
import {Class1} from "./components/pages/Class1/Class1";
import {NotFound} from "./components/pages/NotFound/NotFound"
import { Header } from "./components/layouts/Header/Header"



export const App = ()  =>{
  return (
   <>
   <Header />
   <Routes>
    <Route path="/" element ={<Home />}/>
    <Route path="/class1" element ={<Class1 />}/>
    <Route path="*" element ={<NotFound />}/>
   </Routes>
   
   </>

  )
}