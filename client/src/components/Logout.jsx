import React,{useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
axios.defaults.withCredentials = true;


export default function Logout() {
const history = useHistory();

setTimeout(function(url) {
  window.location.replace(url);
}, 3000);

function logoutUser(){
    axios.get(`http://localhost:5000/users/logout`).then(setTimeout("/home"));
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
