import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss"
import axios from "axios"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Helmet } from 'react-helmet';
const Home = () => {
  const[data,setData]=useState([])
  const[cart,setCart]=useState([])
  const[search,setsearch]=useState([])
  const [dummys, setDummy] = useState(false)
  useEffect(()=>{
        axios.get("http://localhost:8080").then((res)=>{
          setData(res.data)
        })
  },[search === "",dummys? data:""])

  const handleClick=(item)=>{
     setCart([...cart,item])
     cart.push(item)
     console.log(cart)
  }

  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <section className='slide'>
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp" class="d-block w-100" alt="..." />
      <div className='slide__txt'>
        <h5>Women New Season</h5>
        <p>Jacket & Coats</p>
        <button className='slidebtn'>Shop Now</button>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp" class="d-block w-100" alt="..." />
      <div className='slide__txt'>
        <h5>Men New Season</h5>
        <p>New Season</p>
        <button className='slidebtn'>Shop Now</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp" class="d-block w-100" alt="..." />
      <div className='slide__txt'>
        <h5>Men Collection</h5>
        <p>New Season</p>
        <button className='slidebtn'>Shop Now</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </section>
    <section className='sec2'>
        <div className='sec2__img'>
          <img src="https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg" alt="" />
          <div className='sec2__txt'>Women</div>
        </div>
         <div className='sec2__img'>
          <img src="https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg" alt="" />
          <div className='sec2__txt'>Men</div>
         </div>
         <div className='sec2__img'>
          <img src="https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg" alt="" />
          <div className='sec2__txt'>Accesories</div>
         </div>
    </section>
    <section className='crud'>
      <div className='card__head'>
       <div className='product'>
       <div className='prodtxt'>PRODUCT OVERVIEW 
       <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><ShoppingCartIcon /></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Basket</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    {
      
      cart.map(item=>{
        
        return(
          
         <>

          <div className='card'>
             <div className='cardimg'>
              <img src="https://preview.colorlib.com/theme/cozastore/images/product-01.jpg" alt="" />
             </div>
             <div className='cardbody'>
               <div>
                <h3>{item.name}</h3>
              <span>${item.price}</span>
              
              </div>
               <div>
                
               <button className='btn btn-danger' onClick={()=>{
                axios.delete(`http://localhost:8080/${item._id}`)
               }}>Delete</button>
               </div>
             </div>
          </div>
          
         </>
          
        )
        
      })
      
    }

  </div>
</div>
       </div>
       <div className='card__rigth'>
        <button className='filterbtn'onClick={()=>{
           setData([...data.sort((a, b) => b.price - a.price)])
        }}>Filter by price</button>
        <input type="text" placeholder='Search' onChange={(e)=>{
                setsearch(e.target.value)
                setData(data.filter(item=>item.name.includes(search)))
        }}/>
       </div>

       </div>
      </div>
       <div className='cards'>
          {
            data.map(item=>{
              return(
                <div className='card'>
             <div className='cardimg'>
              <img src="https://preview.colorlib.com/theme/cozastore/images/product-01.jpg" alt="" />
             </div>
             <div className='cardbody'>
               <div>
                <h3>{item.name}</h3>
              <span>${item.price}</span>
              <button className='basketbtn' onClick={()=>handleClick(item)}>add basket</button>
              </div>
               <div>
                <Link to={`/${item._id}`}>Go detail</Link>
               <button className='btn btn-danger' onClick={()=>{
                axios.delete(`http://localhost:8080/${item._id}`)
               }}>Delete</button>
               </div>
             </div>
          </div>
              )
            })
          }
       </div>

    </section>
     
    </>
  )
}

export default Home