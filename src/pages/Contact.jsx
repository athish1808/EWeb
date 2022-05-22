import React from 'react'
import {Carousel} from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Contact() {
  const navigate=useNavigate()
  return (
    <div>
      <Navbar/>
      <h1 style={{paddingTop:'60px',backgroundColor:'rgba(0,0,0,.1'}}>Our Branches</h1>
      <section>
      <Carousel fade >
  
 
  <Carousel.Item>
  <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://media.istockphoto.com/photos/clothes-shop-interior-picture-id901863672' height='750px' alt='contactimg' 
      />

    <Carousel.Caption>
      <h1>chennai</h1>
      <p> 456,ABC road, chennai-99</p>
      <button onClick={()=>navigate('/menu')}> Let's Order Now! </button>

    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://c8.alamy.com/comp/H6PN97/hobbs-fashion-london-clothes-shop-clothing-store-high-street-shops-H6PN97.jpg' height='750px' alt='contactimg' 
      />

    <Carousel.Caption>
      <h1>newyork</h1>
      <p>256,willington road,newyork</p>
      <button onClick={()=>navigate('/menu')}> Let's Order Now! </button>
    </Carousel.Caption>

  </Carousel.Item>
</Carousel>
      </section>
      <Footer/>
    </div>
  )
}

export default Contact