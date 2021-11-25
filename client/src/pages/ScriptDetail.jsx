import React,{useState, useEffect} from 'react';
import axios from 'axios';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function ScriptDetail(props) {
    const [numPages, setNumPages] = useState(null);
    const [scriptData, setScriptData] = useState();
    const scriptId = props.match.params.id;

   async function getData(){
    const {data} = await axios.get(`http://localhost:5000/scripts/${scriptId}`);
    console.log(data.data.script.pdf);
    const pdfData = data.data.script.pdf[0];
   

    setScriptData(pdfData);
   }
   
   function onLoadSuccess(pdf){
    
   setNumPages(pdf.numPages);
   }
   
   async function phrase(e){
     e.preventDefault();
    let param = e.target.phrase.value.toLowerCase();
    let counter = 0;
    const {data} = await axios.get(`http://localhost:5000/scripts/gettext/${scriptId}`);
    const words = data.data.text;
    const trimWords = words.replace(/\s+/g, ' ').trim();
    const wordsarray = trimWords.split(" ");
    const lowerCase = wordsarray.map(word => word.toLowerCase());
    
    for(let i = 0; i < lowerCase.length; i++){
      
      if(lowerCase[i]=== param){
        counter +=1
      }
      
      }
     
    
    
  console.log(counter);
  }
    
    
    
    useEffect(() => {
        getData()

    }, []);
    
    
    return (
        <div>
            <h3>Script Detail</h3>
            <form onSubmit={phrase}>
              <label htmlFor="phrase">Search for phrase in move</label>
              <input type="text" name="phrase" id="phrase" />
            <button type="submit">Search</button>
            </form>

            <Document file={scriptData}
            onLoadSuccess={onLoadSuccess}
            >
               {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ),
              )
            }
                </Document>

        </div>
    )
}
