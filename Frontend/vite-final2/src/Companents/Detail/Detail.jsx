import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Detail = () => {
  const {id}=useParams()
  const[detail,setDetail]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8080/${id}`).then((res)=>{
      setDetail(res.data)
    })
  })
  return (
    <>
    <Helmet>
      <title>Detail</title>
    </Helmet>
   <div className='card'>
             <div className='cardimg'>
              <img src="https://preview.colorlib.com/theme/cozastore/images/product-01.jpg" alt="" />
             </div>
             <div className='cardbody'>
               <div>
                <h3>{detail.name}</h3>
              <span>${detail.price}</span>
              <button className='basketbtn'>add basket</button>
              </div>
               
             </div>
          </div>
    </>
  )
}

export default Detail