import React,{useState} from 'react'
import axios from 'axios';

export default function UploadScript() {
    const [titleData, setTitleData] = useState();
    const [fileData, setFileData] = useState();

    async function addScript(e){
    e.preventDefault();
    // setTitleData(e.target.title.value);
    // setFileData(e.target.file.files[0]);
    // const payLoad = {
    //     title: titleData,
    //     pdf: fileData
    // }
    const deployForm = new FormData();
     deployForm.append('title', JSON.stringify(titleData));
     deployForm.append('file', fileData);
     for (var pair of deployForm.entries()) {
        console.log(pair[1]); 
    }
      const path = `http://localhost:5000/scripts`;
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      axios.defaults.withCredentials = true;
      await axios.post(path, deployForm, config);
    //   if (res && res.status === 201) {
    //     getProducts();
    //   }
    // }
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
            <form encType="multiform/form-data" onSubmit={addScript}>
                <label htmlFor="title">Title</label>
                <input onChange={onChangeHandlerTitle} type="text" name="title" id="title" />
                <input onChange={onChangeHandlerFile} type="file" name='file' id='file' />
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}