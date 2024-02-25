import React from 'react'
import Filters from "../Filters/Filters"
import "./product.css"
import Products from './products'
import NavBar from '../../Navbar/Navbar'
export default function Filter() {
  return (
   <>
   <NavBar/>
   <div className='product_filter_main'>
   <div className='product_filter_left'>
   <Filters/>
   </div>
    <div className='product_filter_right'>
        
    
    <Products/>
    {/* <ProductView/> */}
    </div>
   </div>

   </>
  )
}
