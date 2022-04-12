import React, {useState,useEffect} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import pdf from "../assests/pdfs/WindmarHome.pdf"
import pdfLarge from '../assests/pdfs/WindmarHome112.pdf'
import pdfMedium from '../assests/pdfs/WindmarHome2.pdf'
import {AiOutlineLeftCircle, AiOutlineRightCircle} from 'react-icons/ai'
import pdfSmall from '../assests/pdfs/WindmarHomebu.pdf'
// import pdf from '../assests/pdfs/'

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

  useEffect(()=>{
    setInterval(()=>{changePage("add")}, 3000)
  })

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  
  return (
    <>

    <Document className="PDF" file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      <p style={{marginTop:"1em"}}>
      <div className='changePage' onClick={()=>changePage("sub")}><AiOutlineLeftCircle style={{fontSize:"48px", marginRight:"0.5em"}}/></div>
        Page {pageNumber} of {numPages}
      <div className='changePage' onClick={()=>changePage("add")}><AiOutlineRightCircle style={{fontSize:"48px", marginLeft:"0.5em"}}/></div>
      </p>
      </Document>

      <Document className="smallPDF" file={pdfSmall} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      <p style={{marginTop:"1em"}}>
      <div className='changePage' onClick={()=>changePage("sub")}><AiOutlineLeftCircle style={{fontSize:"48px", marginRight:"0.5em"}}/></div>
        Page {pageNumber} of {numPages}
      <div className='changePage' onClick={()=>changePage("add")}><AiOutlineRightCircle style={{fontSize:"48px", marginLeft:"0.5em"}}/></div>
      </p>
      </Document>

<Document className="mediumPDF" file={pdfMedium} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      <p style={{marginTop:"1em"}}>
      <div className='changePage' onClick={()=>changePage("sub")}><AiOutlineLeftCircle style={{fontSize:"48px", marginRight:"0.5em"}}/></div>
        Page {pageNumber} of {numPages}
      <div className='changePage' onClick={()=>changePage("add")}><AiOutlineRightCircle style={{fontSize:"48px", marginLeft:"0.5em"}}/></div>
      </p>
      </Document>
    
      <Document className="largePDF" file={pdfLarge} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      <p style={{marginTop:"1em"}}>
      <div className='changePage' onClick={()=>changePage("sub")}><AiOutlineLeftCircle style={{fontSize:"48px", marginRight:"0.5em"}}/></div>
        Page {pageNumber} of {numPages}
      <div className='changePage' onClick={()=>changePage("add")}><AiOutlineRightCircle style={{fontSize:"48px", marginLeft:"0.5em"}}/></div>
      </p>
      </Document>
    
    </>
      
  );
}

export default PDF