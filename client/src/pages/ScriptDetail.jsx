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
    const pdfData = data.data.script.pdf[0];
   

    setScriptData(pdfData);
   }
   
   function onLoadSuccess(pdf){
    
   setNumPages(pdf.numPages);
   


 }


    async function scriptCard(){
   
    console.log(scriptData);
    }
    useEffect(() => {
        getData()

    }, []);
    return (
        <div>
            <h3>Script Detail</h3>
            <button onClick={scriptCard}>TEST</button>

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
