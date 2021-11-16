import React,{useState} from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import TEST from '../pdf/The_Big_Lebowski_script.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
export default function PdfViewer() {
     const [numPages, setNumPages] = useState(null);

     function onLoadSuccess(pdf){
         console.log(pdf);
        setNumPages(pdf.numPages);
        console.log(numPages);


     }

    //  function ScriptCard (){
    //      console.log(numPages)
    //      return(
    //          <div>
    //              <p>{numPages}</p>
    //          </div>
    //      )
    //     //  numPages.map((page,index)=>{
    //     //      return(
    //     //          <div>
    //     //              <Page
    //     //              pageNumber={page.index + 1}
    //     //              />
    //     //          </div>
    //     //      )
    //     //  })
    //  }
    return (
        <div>
            <h3>PDF VIEWER</h3>
            <Document file={TEST}
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
