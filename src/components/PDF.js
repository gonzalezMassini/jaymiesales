import React,{useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import pdf from "../assests/pdfs/WindmarHome.pdf"
import {AiOutlineLeftCircle, AiOutlineRightCircle} from 'react-icons/ai'

const PDF = () => {
  const [numPages, setNumPages] = useState(12);
  // const numPages = 12
  const [pageNumber, setPageNumber] = useState(1);

  const changePage =(action)=>{
    if(action === "add"){
      if(pageNumber ===12) return
      setPageNumber(prev => prev + 1)
    }
    if(action === "sub"){
      if(pageNumber === 1) return
      setPageNumber(prev => prev - 1)
    }
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='pdf'>
      <div className='changePage' onClick={()=>changePage("sub")}><AiOutlineLeftCircle style={{fontSize:"48px", marginRight:"0.5em"}}/></div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      <p style={{marginTop:"1em"}}>
        Page {pageNumber} of {numPages}
      </p>
      </Document>
      <div className='changePage' onClick={()=>changePage("add")}><AiOutlineRightCircle style={{fontSize:"48px", marginLeft:"0.5em"}}/></div>
    </div>
  );
}

export default PDF