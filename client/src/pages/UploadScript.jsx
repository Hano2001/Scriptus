import React,{useState} from 'react'
import axios from 'axios';

export default function UploadScript({login}) {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [titleData, setTitleData] = useState();
    const [fileData, setFileData] = useState();
    console.log(login);

    async function addScript(e){
    e.preventDefault();
    console.log(document.cookie);
   
    const deployForm = new FormData();
     deployForm.append('title', JSON.stringify(titleData));
     deployForm.append('file', fileData);
     for (var pair of deployForm.entries()) {
        console.log(pair[1]); 
    }
      const path = `${apiUrl}/scripts`;
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      axios.defaults.withCredentials = true;
      await axios.post(path, deployForm, config);
    
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
            </form> : (<h5>Please login or register an account to upload a script!</h5>)}
        </div>
    )
}
