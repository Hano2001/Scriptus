import React,{useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function UploadScript({login}) {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [titleData, setTitleData] = useState();
    const [fileData, setFileData] = useState();
    const history = useHistory();

    async function addScript(e){
    e.preventDefault();
    console.log(document.cookie);
   
    const deployForm = new FormData();
     deployForm.append('title', JSON.stringify(titleData));
     deployForm.append('file', fileData);
     
      const path = `${apiUrl}/scripts`;
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      axios.defaults.withCredentials = true;
      await axios.post(path, deployForm, config);
      await history.push("/");
    
    }

    function onChangeHandlerFile(e){
       
        setFileData(e.target.files[0]);
    }
    function onChangeHandlerTitle(e){
        setTitleData(e.target.value);
        
    }
    return (
        <div>
            <h5>Upload a script here!</h5>
            {login ? <form encType="multiform/form-data" onSubmit={addScript}>
                <label htmlFor="title">Title</label>
                <input onChange={onChangeHandlerTitle} type="text" name="title" id="title" />
                <input onChange={onChangeHandlerFile} type="file" name='file' id='file' />
                <button type='submit'>SUBMIT</button>
                <h3>Make sure your PDF is not scanned and the text is markable!</h3>
            </form> : (<h5>Please login or register an account to upload a script!</h5>)}
        </div>
    )
}
