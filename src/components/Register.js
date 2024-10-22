import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {

  const [inpval,setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: ""
  })

  const setdata = (e) => {
    console.log(e.tar)
    const {name,value} = e.target;
    setINP((prev) => {
      return{
        ...prev,
        [name]:value
      }
    })
  }


  return (
    <div className='container'>
      <NavLink to="/">Home</NavLink>

      <form className='mt-4'>
        <div className="row">

          <div className="mb-3 col-lg-6 col-md-6 col-12" >
            <label for="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" onChange={setdata} value={inpval.name} name='name' className="form-control" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" onChange={setdata} value={inpval.email} name='email' className="form-control" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">age</label>
            <input type="number" onChange={setdata} value={inpval.age} name='age' className="form-control" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">Mobile</label>
            <input type="text" onChange={setdata} value={inpval.mobile} name='mobile' className="form-control" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">Work</label>
            <input type="text" onChange={setdata} value={inpval.work} name='work' className="form-control" />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">Address</label>
            <input type="text" onChange={setdata} value={inpval.add} name='add' className="form-control" />
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" className="form-label">Description</label>
            <textarea className="form-control" onChange={setdata} value={inpval.desc} name='desc' id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Register