import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function ViewAnnouncement() {
    
const [error, seterror] = useState('')
const [announcement, setannouncement] = useState([])
    async function ViewAnnouncement(){
        let { data } = await axios.get('https://boiling-cliffs-32569.herokuapp.com/api/v1/announcement/announcement',{
            headers:{
              Authorization:`Bearer ${localStorage.getItem("tokenUser")}`
            }
          });
          console.log(data)
          if (data.error) {
            seterror(data.message)
          } else{
            setannouncement(data.announcements)
          }
    }
    useEffect(()=>{
        ViewAnnouncement()
    })
  return (<>
  <div className='container'>
    {error ? <div className='alert alert-danger'>{error}</div> : ''}
    <div className='d-flex'>{announcement.length>0?announcement.map((anmounce)=>{
        return <div class="card m-2 col-3">
        <div class="card-body text-start ">
          <h5 class="card-title fw-bold">Quizename:{anmounce.paragraph}</h5>
          <h5>{anmounce.date}</h5>
        </div>
      </div>
    }):" no announcement list "}</div></div>
</>
  )
}