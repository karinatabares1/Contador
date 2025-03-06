import React from "react";
import trees from "../../../assets/Images/trees.jpg"
import { BrowserRouter } from "react-router-dom";



export const Main = () => {
    return(
        <>
        <h1 className= "text-blue font-bold text-4xl m-8 hover:text-sky400 hover:underline">La idea es que acá construiremos nuestro curso de cada tema</h1>
        <img src={trees} alt="" />
        </>
    )
}