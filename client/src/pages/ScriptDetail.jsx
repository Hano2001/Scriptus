import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { StyledForm, StyledScript, StyledMessage, MainDiv,} from '../components/styled/Styled';

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function ScriptDetail(props) {
  const apiUrl = process.env.REACT_APP_API_URL;
    const [numPages, setNumPages] = useState(null);
    const [scriptData, setScriptData] = useState();
    const scriptId = props.match.params.id;
    const[results, setResults] = useState(null);
    const[title, setTitle] = useState(null);

   async function getData(){
    const {data} = await axios.get(`${apiUrl}/scripts/${scriptId}`);
    console.log(data.data.script.pdf);
    const pdfData = data.data.script.pdf[0];
    

    
    
   
    setTitle(data.data.script.title);
    setScriptData(pdfData);
   }
   
   function onLoadSuccess(pdf){
    
   setNumPages(pdf.numPages);
   }
   
   async function phrase(e){
     e.preventDefault();
    let params = e.target.phrase.value.toLowerCase();
    let counter = 0;
    const {data} = await axios.get(`${apiUrl}/scripts/gettext/${scriptId}`);
    const words = data.data.text;
    const trimWords = words.replace(/\s+/g, ' ').trim();
    const splitChar = /[,.!?-\s]+/;
    const wordsarray = trimWords.split(splitChar)
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
        <MainDiv>
           
             
            
            <h1>{title}</h1>
            {results ? <StyledMessage>{showResults(results)}</StyledMessage> : null}
            <StyledForm>
            
            <form onSubmit={phrase}>
              <label htmlFor="phrase">Search for a word in the script: </label>
              <input type="text" name="phrase" id="phrase" />
            <button type="submit">Search</button>
            </form>
            </StyledForm>
            <StyledScript> 
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
            </StyledScript>
        </MainDiv>
    )
}
