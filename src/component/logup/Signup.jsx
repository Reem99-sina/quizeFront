import axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
export default function Signup() {
  let navigate=useNavigate()
  const [userInfo, setuserInfo] = useState({
    username:"",
    password:"",
    cpassword:"",
    role:""
})

const [errorlist, setErrorlist] = useState([])
const [error, seterror] = useState('')

function validation(user) {
  let schema = Joi.object({
      username: Joi.string().alphanum().required(),
      password: Joi.string().required().pattern(new RegExp('[a-z]{4}')),
      cpassword: Joi.valid(Joi.ref("password")).required(),
      role:  Joi.string().required()
  })
  return schema.validate(user, { abortEarly: false })
}
   function getvalue(e){
    let user={...userInfo}
   user[e.target.name]=e.target.value;
   setuserInfo(user)
   }
   async function supmitsign(e){
    e.preventDefault();
    
    let result = validation(userInfo)
    if (result.error) {
      setErrorlist(result.error.details)
    } else {
      let { data } = await axios.post('https://boiling-cliffs-32569.herokuapp.com/api/v1/user/signup', userInfo);
      if (data.error) {
        seterror(data.message)
      } else {
        navigate('/signin')
      }
    } 
        
    }
  return (<>
    { 
      errorlist.map((error,index)=>{
      
      return  <div key={index} className='alert alert-danger'>{error.message}</div>
      
    })}
     {error ? <div className='alert alert-danger'>{error}</div> : ''}
    <form onSubmit={(e)=>supmitsign(e)}method="post" encType="multipart/form-data"className='d-flex w-100 flex-column flex-wrap justify-content-center align-items-center vh-100'>
  <div className="mb-3 p-4 text-start">
  
    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username" onChange={(e)=>getvalue(e)}/>
  
  <label htmlFor="inputPassword5" className="form-label">Password</label>
    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" name="password"onChange={(e)=>getvalue(e)}/>
    <div id="passwordHelpBlock" className="form-text">
  Your password must be max 8 characters long, contain letters
</div>
<label htmlFor="inputPassword5" className="form-label">cPassword</label>
    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" name="cpassword"onChange={(e)=>getvalue(e)}/>
    <div id="passwordHelpBlock" className="form-text">
  Your password must be max 8 characters long, contain letters
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="role" value='student' id="flexRadioDefault1"onChange={(e)=>getvalue(e)}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    student
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="role" value='instructor'id="flexRadioDefault2" defaultChecked onChange={(e)=>getvalue(e)}/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    instructor
  </label>
</div>
</div>
  <button type="submit" className="btn btn-primary"  >Submit</button>
</form></>
  )
}
