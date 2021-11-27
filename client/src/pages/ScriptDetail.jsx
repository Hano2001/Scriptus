import React,{useState, useEffect} from 'react';
import axios from 'axios';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function ScriptDetail(props) {
    const [numPages, setNumPages] = useState(null);
    const [scriptData, setScriptData] = useState();
    const[results, setResults] = useState(null);
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
    let params = e.target.phrase.value.toLowerCase();
    let counter = 0;
    const {data} = await axios.get(`http://localhost:5000/scripts/gettext/${scriptId}`);
    const words = data.data.text;
    const trimWords = words.replace(/\s+/g, ' ').trim();
    const wordsarray = trimWords.split(" ");
    const lowerCase = wordsarray.map(word => word.toLowerCase());
    
    for(let i = 0; i < lowerCase.length; i++){
      
      if(lowerCase[i]=== params){
        counter +=1
      }
      
      }
      console.log(counter);

      setResults(`The word "${params}" is used ${counter} times in this script!`);
      }

      function showResults(parameter){
        return(<div>
          <h3>{parameter}</h3>
        </div>)
      }
  

    useEffect(() => {
        getData()

    }, []);
    
    
    
    return (
        <div>
            <h3>Script Detail</h3>
            <div>{results ? showResults(results) : null}</div>
            <form onSubmit={phrase}>
              <label htmlFor="phrase">Search for a word in the script: </label>
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
