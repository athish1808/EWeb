import React, { useEffect } from 'react'

import '../styles/menu.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const menus=[
  {
    id:1,
    name:'jeans',
    price:2000,
    img:'https://5.imimg.com/data5/SELLER/Default/2021/1/PD/XI/RI/10134687/denim-men-s-jeans-500x500.jpg',
    
  },
  {
    id:2,
    name:'Black pant',
    price:1000,
    img:'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2948543/2018/3/30/11522394099790-HIGHLANDER-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-5171522394099590-1.jpg',
   
  },
  {
    id:3,
    name:'cotton pant',
    price:1500,
    img:'https://cdn.shopify.com/s/files/1/1231/6442/products/cottonworld-men-s-pants-men-s-cotton-lycra-brown-slim-fit-pants-15659377492021_1080x.jpg?v=1597075880',
  

  },
  ]
function Starters() {
  const [counter,setCounter]=React.useState(0)
  function handleCounterInc()
  {
    setCounter(counter+1)
  }
  function handleCounterDec(){
    setCounter(counter-1)
  }
  useEffect(()=>{
    console.log(`You ordered ${counter} items to the cart`)
  })
  return (
    <>
    <Navbar/>

    <h1 style={{color:'white',paddingTop:'70px'}}>pants</h1>
    <div className='menu'> 
    {menus.map((menu,index)=>(
    <div key={index}>
    <div className='card middle'>
      <div className='front'> 
          <img className='menuimg' src={menu.img} alt='menu'/>
      </div>
      <div className='back'>
        <div className='back-content middles'>
        <h2 style={{color:'#fa0505'}}>{menu.name} </h2>
        <p style={{color:'black'}}>{menu.category}</p>
        <p style={{color:'gray'}}>₹{menu.price}</p>
        <span style={{color:'gray'}}>{menu.description}</span><br/>
        <button className='cartbtn' onClick={handleCounterInc} style={{backgroundColor:'gray',marginRight:'3px'}}>+</button>
          <span style={{color:'black',marginRight:'3px'}}>{counter}</span>
        <button className='cartbtn' onClick={handleCounterDec} style={{backgroundColor:'gray'}}>-</button>

     
      </div>
      </div>
    </div>
    </div>
      ))}

    </div>
    <Footer/>
    </>
  )
}

export default Starters