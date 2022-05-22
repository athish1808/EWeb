import React from 'react'
import {Carousel} from 'react-bootstrap'


import { useNavigate } from 'react-router-dom'

function Slider() {
  const navigate=useNavigate()
  return (
    <div>

      
<section>
      <Carousel fade >
  
  <Carousel.Item>
  <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://cdn.londonandpartners.com/visit/london-organisations/victoria-beckham/95829-640x360-victoria_beckham_store_clothes_640.jpg' height='750px' alt='contactimg'
      />
    <Carousel.Caption>
      <h1>Fashion World</h1>
      <p>One is never over-dressed or under-dressed with a Little Black Dress.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
 
  <Carousel.Item>
  <img
      className="d-block w-100"
      style={{backgroundColor:'black'}}
      src='https://www.cataloniahotels.com/en/blog/wp-content/uploads/2019/05/clothing-store-barcelona.jpg' height='750px' alt='contactimg'
      />
    <Carousel.Caption>
      <h1>enjoy your self by dressing </h1>
      <p>place the order we will delivery on time</p>
      <button onClick={()=>navigate('/menu')}> suuppp... </button>
    </Carousel.Caption>

  </Carousel.Item>
</Carousel>
      </section>
     
    </div>
  )
}

export default Slider