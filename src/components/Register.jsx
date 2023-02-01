import {React,useState} from 'react'

const Register = () => {
  return (
    <>
     <div className="container">

<h1>Register NOW</h1>
<h4>Please fill in this form to create an account.</h4>
<hr />
<form onSubmit={''} className='' >

  <div className="mb-3 row justify-content-center ">
    <label htmlFor="title" className="col-sm-2 col-form-label" placeholder='Name'>First Name</label>
    <div className="col-sm-6">
      <input type="text" value={''} className="form-control" id="title" placeholder='Name' />
    </div>
  </div>
  <div className="mb-3 row justify-content-center ">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label" placeholder='Name'>Last Name</label>
    <div className="col-sm-6">
      <input type="text" value={''} className="form-control" id="inputPassword" placeholder='Name' />
    </div>
  </div>
  <form onSubmit={''} className='' >

    <div className="mb-3 row justify-content-center ">
      <label htmlFor="title" className="col-sm-2 col-form-label" placeholder='Name'>Birth date</label>
      <div className="col-sm-6">
        <input type="date" value={''} className="form-control" id="title" placeholder='Name' />
      </div>
    </div>
    <div className="mb-3 row justify-content-center ">


      <label htmlFor="inputPassword" className="col-sm-1 col-form-label">Gender</label>

      <div className="col-sm-1">
        <input type="radio" value={''} className="" id="inputPassword" />
      </div>
      <div className="col-sm-1">

        <input type="radio" value={''} className="" id="inputPassword" />
      </div>
    </div>
    <div className="mb-3 row justify-content-center ">
      <label htmlFor="title" className="col-sm-2 col-form-label" placeholder='Name'>Enter Email</label>
      <div className="col-sm-6">
        <input type="text" value={''} className="form-control" id="title" placeholder='Name' />
      </div>
    </div>
    <div className="mb-3 row justify-content-center ">
      <label htmlFor="title" className="col-sm-2 col-form-label" placeholder='Name'>Password</label>
      <div className="col-sm-6">
        <input type="text" value={''} className="form-control" id="title" placeholder='Name' />
      </div>
    </div>
    <div className="mb-3 row justify-content-center ">
      <label htmlFor="title" className="col-sm-2 col-form-label " placeholder='Name'>conform Password</label>
      <div className="col-sm-6">
        <input type="text" value={''} className="form-control" id="title" placeholder='Name' />
      </div>
    </div><hr />
    <p>By creating an account you agree to our <a href="#">Terms &amp; privacy</a></p>
    <div className="col-md-3 offset-5  btn btn-sm btn-success my-4 " ><a href="#" typeof='button' className='text-light text-decoration-none px-5 '>Create </a></div>
  </form>

</form>
</div >
    </>
  )
}

export default Register