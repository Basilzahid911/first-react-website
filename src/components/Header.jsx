import React from 'react'
import SideBar from './SideBar'
const Header = () => {
  return (
    <>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 d-flex justify-content-between">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Basil Zahid</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About us</a>
        </li>  
        <li class="nav-item">
          <a class="nav-link" href="#">Contact us</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex">
       
        <a class="btn btn-outline-dark mx-2" > <i class="fa-solid fa-right-to-bracket me-1"></i>Login</a>
        <a class="btn btn-outline-dark mx-2" > <i class="fa-regular fa-registered me-1"></i>Register</a>
        <a class="btn btn-outline-dark mx-2" ><i class="fa-solid fa-cart-plus me-1"></i>card(0)</a>

      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header