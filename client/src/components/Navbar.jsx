import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'

function Navbar() {
  return (
 <>
 <ul className={style.navbar}>
    <li>
        <Link style={{color:'red',textDecoration:'none'}} to='/'>HOME</Link>
    </li>
    <li>WE OFFER</li>
    <li>TOP COURCE</li>
    <li>SCHEDULE</li>
    <li>TRAINER</li>
    <li>PLAN</li>
    <li>Pages</li>
 </ul>
 
 </>
  )
}

export default Navbar