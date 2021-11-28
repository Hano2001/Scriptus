import React,{useEffect} from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true;


export default function Logout() {
  const apiUrl = process.env.REACT_APP_API_URL;

  function logoutUser(){
    axios.get(`${apiUrl}/users/logout`);
    //.then(setTimeout("/"));
}
setTimeout(function() {
  window.location.replace("/");
}, 3000);



useEffect(() => {
  logoutUser();
}, []);
  
  return(
      <div>
          <h5>Youre logging out</h5>
      </div>
  )
}
