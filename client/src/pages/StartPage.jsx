import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function StartPage() {
    const [content, setContent] = useState([]);

    async function getContent(){
        const {data} = await axios.get('http://localhost:5000/scripts');
        await setContent(data.data.scripts);
        
    }

    function testData(){
        console.log(content)
    }

    function ScriptCard({script}){
        
        return(
            <div>
            
                <div>
                <Link to={`/scripts/${script._id}`}>{script.title}</Link>
                
                </div>
           
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
            <button onClick={testData}>TEST</button>
            {content ? content.map((item, index) => <ScriptCard script={item} key={item._id} />) : (<h5>Laddar...</h5>)}
            </div>
        </div>
    )
}
