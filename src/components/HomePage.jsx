import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import pic from '../picture/pic-2.jpg'
import Product from './Product'
const HomePage = () => {
  return (
  <>
  <Header />
   <div className="card bg-dark text-white">
  <img src={pic} class="card-img" alt="picture" height={450}/>
  <div className="card-img-overlay ">
    <div className="container d-flex flex-column justify-content-center align-items-center">
    <h5 className="card-title display-4  fw-bolder text-light">NEW SESSON IS ARRIVALS</h5>
    <p className="card-text text-dark fw-bolder   ">CHECK OUT ALL TRENDS</p>
  </div>
  </div>
</div>
<Product/> 
</>
  )
}

export default HomePage