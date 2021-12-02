import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import{ScriptCard, StyledScriptCard} from '../components/styled/Styled'
axios.defaults.withCredentials = true;

export default function StartPage() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [content, setContent] = useState([]);
    

  

    async function getContent(){
       
        const {data} = await axios.get(`${apiUrl}/scripts`);
        await setContent(data.data.scripts);
        
    }

    

    function ScriptCard({script}){
        const {_id, username} = script.user;
        return(
            <div>
            
                <StyledScriptCard>
                <strong><Link to={`/scripts/${script._id}`}>{script.title}</Link></strong>
                <p>Uploaded by:</p> <strong><Link to={`/users/${_id}`}>{username}</Link></strong>
                </StyledScriptCard>
           
            </div>
        )
    }

    useEffect(()=>{
        getContent();
    },[])
    return (
        <div>
            <h1>SCRIPTUS</h1>
            <div>
            {content ? content.map((item, index) => <ScriptCard script={item} key={item._id} />) : (<h5>Fetching Scripts...</h5>)}
            
            </div>
        </div>
    )
}
