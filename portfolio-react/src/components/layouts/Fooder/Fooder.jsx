import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'
import { FaFacebook, FaTwitter, FaInstagramSquare} from "react-icons/fa";



export const Fooder = () => {
  return (
  <>
  <footer className='text-while-400  p-4' >
    <p>Desarrollado por: <strong>KARINA TABARES </strong> </p>
    <Navbar>
      <ul className= 'flex space-x-4'>
        <ItemNavbar contentItem= {<FaFacebook />}/>
        <ItemNavbar contentItem= {<FaTwitter />}/>
        <ItemNavbar contentItem= {<FaInstagramSquare />}/>      
      </ul>
    </Navbar>
    </footer>
  </>
  )
}




