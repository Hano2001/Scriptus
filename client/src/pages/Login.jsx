import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



export default function Login() {

const history = useHistory();
    async function userLogin(e){
        e.preventDefault();
        const payLoad = {
            username:e.target.username.value,
            password:e.target.password.value
        }
        
       //const res= 
      const res = await axios({
            url: `http://localhost:5000/users/login`,
            method: 'POST',
            withCredentials:true,
            data: payLoad,
        });
        if(res && res.status === 200){
        
            history.push("/");
        }
    }
    return (
        <div>
            <h3>LOGIN</h3>
            <form onSubmit={userLogin}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
