import React from 'react'
import { useSelector } from 'react-redux'
import exam from '../../image/exam.jpg'
export default function Dashboord() {
let userInfodata=useSelector((state)=>{return state.databackuser.userInfodata?state.databackuser.userInfodata:[]})
  return (
    <>
    <div className='d-flex justify-content-around bg-white  align-items-center'>
    <div className='fw-bold fs-2'>welcome {userInfodata.username}</div>
   <div >  <i class="fa-solid fa-bell"></i>
    <i class="fa-solid fa-envelope"></i></div>
    </div>
    <div class="card mt-5">
     <div class="card-body d-flex align-items-center justify-content-around ">
    just believe in yourself,
    even if you donot, pretend that you do,and at some point ,you will.
    <img src={exam} className='w-25'/>
     </div>
        </div>
        <div className='d-flex my-5'>
        <div class="card text-start col-md-8" >
  <div class="card-body">
    <h5 class="card-title">Announcements</h5>
    <h6 class="card-subtitle mb-2 text-muted">Be updated</h6>
    <p class="card-text d-flex">{userInfodata.announcements.length>0?userInfodata.announcements.map((announcement)=>{
     return   <div class="card-body"key={announcement._id}>
          <h5 class="card-title">{announcement.createdBy.username}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{announcement.date}</h6>
          <p class="card-text">{announcement.paragraph}</p>
        </div>
    })
    :" No announcements"}</p>
  </div>
</div>
<div class="card text-start col-md-4 " >
  <div class="card-body">
    <h5 class="card-title fw-bold">what due</h5>
    <h6 class="card-subtitle mb-2 text-muted">Be ready</h6>
    <p class="card-text">{userInfodata.quizzes.length>0?userInfodata.quizzes.map((quize)=>{
       return <div class="card">
        <div class="card-body">
          <h5 class="card-title fw-bold">{quize.namequize}</h5>
          <h6 class="card-subtitle mb-2 text-muted">course:{quize.course}</h6>
          <p class="card-text text-muted">topic:{quize.topic}</p>
          <p class="card-text text-muted">dueto:{quize.dueto}</p>
          <button type="button" class="btn btn-primary">start quize</button>
        </div>
      </div>
    })
    :" No announcements"}</p>
  </div>
</div>
</div>
    </>
  )
}
