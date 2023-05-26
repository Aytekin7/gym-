import React from 'react'
import style from './blog.module.css'

function Blog() {
  return (
  <>
  <div className={style.blog}>
    <h1 style={{color:'white',paddingTop:'20%',marginLeft:'40%'}}>Huge Transaction in last Week</h1>
 <p style={{color:'white',marginLeft:'30%',marginTop:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore<br/>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
    <button style={{marginLeft:'40%',width:'180px',height:'40px',borderRadius:'16px',marginTop:'20px',color:'white',backgroundColor:'red'}}>BECOME A MEMBER</button>
  </div> 
  
  
  </>
  )
}

export default Blog