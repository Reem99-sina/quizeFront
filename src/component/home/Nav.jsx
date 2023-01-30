import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link,  useNavigate } from 'react-router-dom'
import { logoutUser } from '../redux/actions/Action'

export default function Nav() {
  let userInfo=useSelector((state)=>{return state.databackuser.userInfodata?state.databackuser.userInfodata:{}})
  let navigate=useNavigate()
  let dispatch=useDispatch()
  function logout() {
    localStorage.removeItem('tokenUser')
    dispatch(logoutUser())
   navigate("/signin")
  }
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">coligo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
        {userInfo.role==="instructor"?<>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/dashboord">dashboord</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/signin'>signin</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/signup'>signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/quize'>create quize</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/createannounce'>create announcement</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" onClick={logout} to="/signin">logout</Link>
        </li>
        </>
        :<>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/dashboord">dashboord</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/signin'>signin</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/signup'>signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" onClick={logout} to="/signin">logout</Link>
        </li>
        </>}
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}
