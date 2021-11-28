import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function UserPage(props) {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [user, setUser] = useState();
    const [scripts, setScripts] = useState(null);
    const [onlineUser, setOnlineUser] = useState("");
    const userId = props.match.params.id;
    
    async function fetchUser(){
    const {data} = await axios.get(`${apiUrl}/users/${userId}`);
    console.log(data.data)
    setUser(data.data.data.user);
    
    setOnlineUser(data.data.data.onlineUser);

    if(data.data.data.scripts.length >0 ){
        setScripts(data.data.data.scripts);
    }
    }
    
    function deleteScript(id){
        axios
        .delete(`${apiUrl}/scripts/delete/${id}`,
        {withCredentials:true})
        .then(() => {
            alert("script deleted!");

            fetchUser();
        });
    }

    
    function ScriptCard({script}){
         if(user._id === onlineUser){
            return(
               
                    <div>
                    <Link to={`/scripts/${script._id}`}>{script.title}</Link>
                    <button type="button" onClick={() => deleteScript(script._id)}>DELETE LIST</button>
                    </div>
                )
        }

        return(
            <div>
                <div>
                <Link to={`/scripts/${script._id}`}>{script.title}</Link>
                </div>
           
            </div>
        )
        
    }
    function test(){
        console.log(scripts);
    }
    
    useEffect(() => {
        fetchUser()

    }, []);

    return (
        <div>
            <button onClick={test}> TEST</button>
             {user ? <h3>{user.username}</h3> : (<h5>Fetching user...</h5>)}
             {scripts ? scripts.map((item, index) => <ScriptCard script={item} key={item._id} />) : (<h5>This user has no uploaded scripts!</h5>)}
            
        </div>
    )
}
