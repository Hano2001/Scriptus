import React from 'react'
import axios from 'axios';
export default function Register() {

    async function register(e){
        e.preventDefault();
        const payLoad = {
            email:e.target.email.value,
            username:e.target.username.value,
            password:e.target.password.value
        }
        console.log(e.target.email.value);
        await axios({
            url: `http://localhost:5000/users/register`,
            method: 'POST',
            withCredentials:true,
            data: payLoad,
        });
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
