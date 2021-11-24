import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
axios.defaults.withCredentials = true;


export default function Logout() {
const history = useHistory();

function logoutUser(){
    axios.get(`http://localhost:5000/users/logout`).then(history.push("/"));
}
  
  return(
      <div>
          <button onClick={logoutUser}>
            <span type="button" className="nav-link ml-2">
              Log out
            </span>
          </button>
      </div>
  )
}
