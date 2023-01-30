import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
function WithAuthentication ({children}) {
    
    if (localStorage.getItem('tokenUser')!==null||localStorage.getItem('tokenUser')!==undefined) {
      return children
    } else {
      return <Navigate to='/signin' />
    }
  };
 function WithRoleAuthentication ({children}) {
  let userSelect=useSelector((state)=>{return state.databackuser.userInfodata?state.databackuser.userInfodata:[]})

    if (userSelect.role==="instructor") {
      return children
    } else {
      return <Navigate to='/signin' />
    }
  };
export {
  WithAuthentication,WithRoleAuthentication
}
