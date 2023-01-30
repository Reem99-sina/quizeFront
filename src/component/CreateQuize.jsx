import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'

import { useNavigate } from 'react-router';

export default function CreateQuize() {

  const [quize, setQuize] = useState({
    namequize:'',
    course:"",
    topic:"",
    dueto:""
  })
  let navigate=useNavigate()
  const [errorlist, setErrorlist] = useState([])
const [error, seterror] = useState('')
  function getvalue(e){
    let user={...quize}
   user[e.target.name]=e.target.value;
   setQuize(user)
   }
  function validation(user) {
    let schema = Joi.object().keys({
      namequize: Joi.string().required(),
      course: Joi.string().required(),
      topic: Joi.string().required(),
      dueto:Joi.string()
    })
    return schema.validate(user, { abortEarly: false })
  }
   async function supmitquize(e){
    e.preventDefault();
    let result = validation(quize)
    
    if (result.error) {
      setErrorlist(result.error.details)
    } else {
      let { data } = await axios.post('https://boiling-cliffs-32569.herokuapp.com/api/v1/quize/addQuize', {...quize},{
        headers:{
          Authorization:`Bearer ${localStorage.getItem("tokenUser")}`
        }
      });
      if (data.error) {
        seterror(data.message)
      } else {
        navigate('/viewQuize')
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
  
    <label htmlFor="exampleInputEmail1" className="form-label">Namequize</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="namequize" onChange={(e)=>getvalue(e)}/>
    <label htmlFor="exampleInputEmail1" className="form-label">Course</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="course" onChange={(e)=>getvalue(e)}/>
    <label htmlFor="exampleInputEmail1" className="form-label">Topic</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="topic" onChange={(e)=>getvalue(e)}/>
    <label htmlFor="exampleInputEmail1" className="form-label">dueto</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="dueto" onChange={(e)=>getvalue(e)}/>
  </div>
  <button type="submit" className="btn btn-primary"  >add quize</button>
</form></>
  )
}
