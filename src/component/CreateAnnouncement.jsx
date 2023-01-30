import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'

import { useNavigate } from 'react-router';

export default function CreateAnnouncement() {
 

  const [announcement, setAnnouncement] = useState({
    paragraph:""
  })
  let navigate=useNavigate()
  const [errorlist, setErrorlist] = useState([])
const [error, seterror] = useState('')
  function getvalue(e){
    let user={...announcement}
   user[e.target.name]=e.target.value;
   setAnnouncement(user)
   }
  function validation(user) {
    let schema = Joi.object().keys({
        paragraph:Joi.string().required()
    })
    return schema.validate(user, { abortEarly: false })
  }
   async function supmitquize(e){
    e.preventDefault();
    let result = validation(announcement)
   
    if (result.error) {
      setErrorlist(result.error.details)
    } else {
      let { data } = await axios.post('https://boiling-cliffs-32569.herokuapp.com/api/v1/announcement/addannouncement', {...announcement},{
        headers:{
          Authorization:`Bearer ${localStorage.getItem("tokenUser")}`
        }
      });
      if (data.error) {
        seterror(data.error)
      } else {
        // setAnnouncement(data)
        navigate('/viewannounce')
      }
    }       
    }
  return (<>
 {  errorlist.map((error,index)=>{
      return  <div key={index} className='alert alert-danger'>{error.message}</div>
    })}
     {error ? <div className='alert alert-danger'>{error}</div> : ''}

    <form onSubmit={(e)=>supmitquize(e)} className='d-flex w-100 flex-column flex-wrap justify-content-center align-items-center vh-100'>
  <div className="mb-3 p-4 text-start">
  
    <label htmlFor="exampleInputEmail1" className="form-label">announcement</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="paragraph" onChange={(e)=>getvalue(e)}/>

   
  </div>
  <button type="submit" className="btn btn-primary"  >add announcement</button>
</form></>
  )
}