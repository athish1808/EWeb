import React, { useEffect } from 'react'

import '../styles/menu.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const menus=[
  {
    id:1,
    name:'white snikers',
    price:1200,
    img:'https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-4187.jpg',
    
  },
  {
    id:2,
    name:'dark black sniker',
    price:900,
    img:'https://i.shgcdn.com/ff4ffe70-f2c9-4e3e-8b59-bb3435c6ad3b/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    
  },
  {
    id:3,
    name:'coat And suits',
    price:5000,
    img:'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10777776/2019/10/17/0c3d2adc-bae2-4d1f-ad24-ed8b7203e20d1571309007603-MANQ-Men-Suits-7301571309004151-1.jpg',
    
  },
  
]
function Extras() {
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

    <h1 style={{color:'white',paddingTop:'70px'}}>Other things</h1>
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

export default Extras