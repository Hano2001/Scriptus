import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function StartPage() {
    const [content, setContent] = useState([]);
    const [login, setLogin] = useState(false);
    console.log(document.cookie.length);

  const checkLogin = async () => {
    const { data } = await axios.get("http://localhost:5000/auth/checklogin");
    if (data === true) {
      setLogin(true);
    }
  };
  function checkRoute() {
    axios.get('http://localhost:5000/auth');
    
  };

    async function getContent(){
       
        const {data} = await axios.get('http://localhost:5000/scripts');
        await setContent(data.data.scripts);
        
    }

    function writeLogin(){
        console.log(login)
    }

    function ScriptCard({script}){
        const {_id, username} = script.user;
        return(
            <div>
            
                <div>
                <Link to={`/scripts/${script._id}`}>{script.title}</Link>
                <p>Uploaded by: {username}</p>
                </div>
           
            </div>
        )
    }

    useEffect(()=>{
        getContent();
    },[])
    return (
        <div>
            <button onClick={checkLogin}>TEST FETCH</button>
            <button onClick={checkRoute}>TEST ROUTE</button>
            <button onClick={writeLogin}>TEST LOGIN DATA</button>
            <h1>SCRIPTUS</h1>
            <div>
            {content ? content.map((item, index) => <ScriptCard script={item} key={item._id} />) : (<h5>Laddar...</h5>)}
            </div>
        </div>
    )
}
