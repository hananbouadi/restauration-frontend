// import React, { useState } from 'react'
import './heroheader.css'

// import Home from '../home/Home'

 function HeroHeader() {
  // const[visibility ,setVisibility] = useState(false)
  // const show = () =>{
  //   setVisibility(!visibility)
 
  return (
    
       
    <main>
    <div className='container'>
      <img src='/assets/heroHeader.jpg' alt=''/>
      {/* <div className='chef-pic'>
       
        <img src="/assets/chef-pic.png" alt="food image"/>
        <div className='delivery'>
          Hungry? We're on Our Way!
        </div>
        <div className='service'>
          Order Now, Enjoy Sooner!
        </div>
        <div className='fast-order'>
          Quick Bites, Faster Delivery!
        </div>
        <div className='why-us'>
          <img src='/assets/delivery-man1.png'/>
        </div>
        
         
      </div> */}
        <div className='hero-text'>
            <h1>Food you love Delivered to you</h1>
            <p>Indulge with our mouthwatering dishes made with 
              the freshest ingredients</p>
            <div className='btns'>
                <button >Order</button>
                <button >Explore</button>
            </div>
            
        
          
        </div>

      {/* {visibility && <Home/>} */}

    </div>
    </main>
    
  )
}
export default HeroHeader