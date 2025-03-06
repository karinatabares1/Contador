import React from 'react'
import {Navbar} from "../Navbar/Navbar"
import './Header.css'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'

export const Header = () => {
  return (
        <header className='header'>
            <h1 className= "text-while-400 mt-2 text-4xl font-bold m-4">Intoduccion react 2025</h1>
            <Navbar> 
            <ul className='flex space-x-4'>
              <ItemNavbar Route="/" contentItem='Inicio'/>
              <ItemNavbar Route="/class1"contentItem='clase 1'/>
              <ItemNavbar  Route="/class2" contentItem='clase 2'/>
              <ItemNavbar Route="/class3" contentItem='clase 3'/>
            </ul>
            </Navbar>
        </header>

  )
}

