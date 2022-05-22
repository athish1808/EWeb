import React, { useEffect } from 'react'
import '../styles/menu.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const menus=[
  {
    id:1,
    name:'white shirt',
    price:1200,
    img:'https://i.pinimg.com/originals/e4/72/ac/e472ac600a144265362e6172c54a2e35.jpg',
    
  },
  {
    id:2,
    name:'checks shirt',
    price:900,
    img:'https://cdn.shopify.com/s/files/1/0752/6435/products/5_e447194f-09cf-4624-83c1-e43c781ed723.jpg?v=1648034578',
    
  },
  {
    id:3,
    name:'shirt',
    price:1000,
    img:'https://cdn.anscommerce.com/image/tr:h-1000,w-750,cm-pad_resize/data/celio/2d-images/NACOWBOY_INDIGO_1.jpg',
    

  },
  {
    id:4,
    name:'blue shirt',
    price:935,
    img:'https://image.made-in-china.com/202f0j00NkbiuzLBYWpa/Autumn-Business-Dress-Shirt-Men-Check-Shirts-for-Men.jpg',
    
  },
  {
    id:5,
    name:'t shirt',
    price:500,
    img:'https://5.imimg.com/data5/YX/OO/TA/ANDROID-108727015/product-jpeg-500x500.jpg',
    
  },
  {
    id:6,
    name:'t shirt',
    price:300,
    img:'https://cf.shopee.in/file/68ea5a1636338410d7067ed093d632cc',
   },
]
function Menu() {
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

    <h1 style={{color:'white',paddingTop:'70px'}}>shirts</h1>
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

export default Menu