import React, { useEffect, useState } from 'react'

function About() {


    const[products,setProducts]=useState([])
  
   useEffect(()=>{
   fetch("http://localhost:7070/api/product")
   .then(res=>res.json())
   .then(info=>
       setProducts(info)
      )
   
    
   },[])
    return (
        <>
         <h1 style={{marginLeft:'40%',marginTop:'150px'}}>We care about what we offer</h1>
         <p style={{display:'flex',justifyContent:'center',marginLeft:'60px',marginTop:'10px'}}>Who are in extremely love with eco friendly system.</p>

            {products && products.map((product)=>(
                <div style={{ marginTop: '100px', display: 'flex', gap: '30px', justifyContent:'center',alignItems:'center'}}>
                <div style={{ width: '20%', height: '40%', border: '1px solid black', }}>
                    <img style={{ marginLeft: '40%', marginTop: '20px' }} src={product.imageUrl}alt="" />
                    <h2 style={{ marginLeft: '40px', marginTop: '10px', }}>{product.name}</h2>
                    <p style={{ marginLeft: '10px', marginTop: '20px' }}>{product.title}</p>

                </div>
            </div>
            ))}


        </>
    )
}

export default About