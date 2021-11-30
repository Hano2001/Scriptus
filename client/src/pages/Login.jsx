import React,{useState} from 'react';
import axios from 'axios';
import { useHistory,Link } from 'react-router-dom';



export default function Login() {
const [error, setError] = useState(null);
const apiUrl = process.env.REACT_APP_API_URL;

const history = useHistory();
    async function userLogin(e){
        e.preventDefault();
        const payLoad = {
            username:e.target.username.value,
            password:e.target.password.value
        }
        
       //const res= 
      const res = await axios({
            url: `${apiUrl}/users/login`,
            method: 'POST',
            //withCredentials:true,
            headers:{"Content-Type" : "application/json"},
            data: payLoad,
        });
        if(res && res.status === 200){
        
            history.push("/");
        }

        else if(res.status === 401)
            {setError("Invalid username and/or password!")}
        
    }

    function showError(error){
        return(<div>
            <h3>{error}</h3>
          </div>)
    }
    return (
        <div>
            <h3>LOGIN</h3>
            <div>{error ? showError(error) : null}</div>
            <form onSubmit={userLogin}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"/>
                <button type="submit">Submit</button>
                <p>Lacking a Scriptus account? Sign up below!</p>
                <Link to="/register">Create an account</Link>

            </form>
        </div>
    )
}
