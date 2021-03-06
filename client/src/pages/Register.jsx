import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
export default function Register() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const history = useHistory();

    async function register(e){
        e.preventDefault();
        const payLoad = {
            email:e.target.email.value,
            username:e.target.username.value,
            password:e.target.password.value
        }
        console.log(e.target.email.value);
        const res = await axios({
            url: `${apiUrl}/users/register`,
            method: 'POST',
            withCredentials:true,
            data: payLoad,
            headers: { 'Content-Type': 'application/json' }
        });
        if(res && res.status === 201){
        
            history.push("/");
        }
    }
    return (
        <div>
            <h3>REGISTER</h3>
            <form onSubmit={register}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"/>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
