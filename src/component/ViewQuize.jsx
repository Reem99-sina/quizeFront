import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function ViewQuize() {
   
const [error, seterror] = useState('')
const [quizes, setquizes] = useState([])

    async function ViewQuizes(){
        let { data } = await axios.get('https://boiling-cliffs-32569.herokuapp.com/api/v1/quize/quizes',{
            headers:{
              Authorization:`Bearer ${localStorage.getItem("tokenUser")}`
            }
          });
          if (data.error) {
            seterror(data.message)
          } else{
            setquizes(data.quizes)
          }
    }
    useEffect(()=>{
        ViewQuizes()
    })
  return (<>
  <div className='container'>
    {error ? <div className='alert alert-danger'>{error}</div> : ''}
    <div className='d-flex'>{quizes.length>0?quizes.map((quize)=>{
        return <div class="card  m-2 col-3">
        <div class="card-body text-start ">
          <h5 class="card-title fw-bold">Quizename:{quize.namequize}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Course:{quize.course}</h6>
          <p class="card-text">Topic:{quize.topic}</p>
          <p class="card-text ">Dueto:{quize.dueto}</p>
        </div>
      </div>
    }):" no quizes list "}</div></div>
</>
  )
}
