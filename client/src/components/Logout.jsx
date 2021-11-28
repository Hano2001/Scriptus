import React,{useEffect} from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true;


export default function Logout() {
  const apiUrl = process.env.REACT_APP_API_URL;


setTimeout(function(url) {
  window.location.replace(url);
}, 3000);

function logoutUser(){
    axios.get(`${apiUrl}/users/logout`).then(setTimeout("/home"));
}

useEffect(() => {
  logoutUser();
}, []);
  
  return(
      <div>
          <h5>Youre logging out</h5>
      </div>
  )
}
