import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUser, setUserInfo } from '../redux/actions/Action';
import Joi from 'joi';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Signin() {
  let navigate=useNavigate()
  let dispatch=useDispatch()
  const [errorlist, setErrorlist] = useState([])
const [error, seterror] = useState('')
  const [userInfo, setuserInfo] = useState({
    username:"",
    password:""
})
function validation(user) {
  let schema = Joi.object({
      username: Joi.string().alphanum().required(),
      password: Joi.string().required().pattern(new RegExp('[a-z]{4}')),
      
  })
  return schema.validate(user, { abortEarly: false })
}
function getvalue(e){
  let user={...userInfo}
 user[e.target.name]=e.target.value;
 setuserInfo(user)
 }
 async function supmitsign(e){
        e.preventDefault()
       
        let result = validation(userInfo)
    if (result.error) {
      setErrorlist(result.error.details)
        
    } else {
      let { data } = await axios.post('https://boiling-cliffs-32569.herokuapp.com/api/v1/user/signin', userInfo);
     
      if (data.error) {
        seterror(data.message)
      
      } else {
        dispatch(setUser(data.Token))
        dispatch(setUserInfo(data.User))
        localStorage.setItem("tokenUser",data.Token)
        navigate('/dashboord')
      }
    } 
    }
  return (<>
    {  errorlist.map((error,index)=>{
      return  <div key={index} className='alert alert-danger'>{error.message}</div>
    })}
     {error ? <div className='alert alert-danger'>{error}</div> : ''}
    <form onSubmit={(e)=>supmitsign(e)}  encType="multipart/form-data"className='d-flex w-100 flex-column flex-wrap justify-content-center align-items-center vh-100'>
  <div className="mb-3 p-4 text-start">
    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username"onChange={(e)=>getvalue(e)}/>
  
  <label htmlFor="inputPassword5" className="form-label">Password</label>
    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" name="password"onChange={(e)=>getvalue(e)}/>
    <div id="passwordHelpBlock" className="form-text">
  Your password must be max 8 characters long, contain letters
</div>
</div>
  <button type="submit" className="btn btn-primary" >signin</button>
</form></>
  )
}
