import React from 'react'
import style from './home.module.css'
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
     
      </Helmet>



      <div className={style.home} >
        <div>
          <h1 style={{ fontSize: '50px' }}>REAL FITNESS<br />DEPENDS ON EXERCISE</h1>
          <p style={{ marginTop: '10px', marginLeft: '100px' }}>SHAPE YOUR BODY WELL.</p>
        </div>

      </div>

    </>
  )
}

export default Home