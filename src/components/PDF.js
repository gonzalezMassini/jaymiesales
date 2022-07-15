import React, {useState} from 'react'
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
// import pdf from "../assests/pdfs/WindmarHome.pdf"
// import pdfLarge from '../assests/pdfs/WindmarHome112.pdf'
// import pdfMedium from '../assests/pdfs/WindmarHome2.pdf'
import {AiOutlineLeftCircle, AiOutlineRightCircle} from 'react-icons/ai'
// import pdfSmall from '../assests/pdfs/WindmarHomebu.pdf'
import Image1 from '../assests/Windmar Home/WindmarHome112_page-0001.jpg'
import Image2 from '../assests/Windmar Home/WindmarHome112_page-0002.jpg'
import Image3 from '../assests/Windmar Home/WindmarHome112_page-0003.jpg'
import Image4 from '../assests/Windmar Home/WindmarHome112_page-0004.jpg'
import Image5 from '../assests/Windmar Home/WindmarHome112_page-0005.jpg'
import Image6 from '../assests/Windmar Home/WindmarHome112_page-0006.jpg'
import Image7 from '../assests/Windmar Home/WindmarHome112_page-0007.jpg'
import Image8 from '../assests/Windmar Home/WindmarHome112_page-0008.jpg'
import Image9 from '../assests/Windmar Home/WindmarHome112_page-0009.jpg'
import Image10 from '../assests/Windmar Home/WindmarHome112_page-0010.jpg'
import Image11 from '../assests/Windmar Home/WindmarHome112_page-0011.jpg'
import Image12 from '../assests/Windmar Home/WindmarHome112_page-0012.jpg'
// import pdf from '../assests/pdfs/'

const PDF = () => {
  const numPages = useState(12);

  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12]
  // const numPages = 12
  const [pageNumber, setPageNumber] = useState(0);

  const changePage =(action)=>{
    if(action === "add"){
      if(pageNumber ===11) return
      setPageNumber(prev => prev + 1)
    }
    if(action === "sub"){
      if(pageNumber === 0) return
      setPageNumber(prev => prev - 1)
    }
  }

  // useEffect(()=>{
  //   setInterval(()=>{changePage("add")}, 3000)
  // })

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  
  return (
    <div style={{width:"100%"}}>  
      <img src={images[pageNumber]} alt="loading"/>
      <p style={{marginTop:"1em"}}>
       <div className='changePage' onClick={()=>changePage("sub")}><AiOutlineLeftCircle style={{fontSize:"48px", marginRight:"0.5em"}}/></div>
         Page {pageNumber+1} of {numPages}
       <div className='changePage' onClick={()=>changePage("add")}><AiOutlineRightCircle style={{fontSize:"48px", marginLeft:"0.5em"}}/></div>
       </p>
    </div>
//     <>

//     <Document className="PDF" file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       <p style={{marginTop:"1em"}}>
//       <div className='changePage' onClick={()=>changePage("sub")}><AiOutlineLeftCircle style={{fontSize:"48px", marginRight:"0.5em"}}/></div>
//         Page {pageNumber} of {numPages}
//       <div className='changePage' onClick={()=>changePage("add")}><AiOutlineRightCircle style={{fontSize:"48px", marginLeft:"0.5em"}}/></div>
//       </p>
//       </Document>

//       <Document className="smallPDF" file={pdfSmall} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       <p style={{marginTop:"1em"}}>
//       <div className='changePage' onClick={()=>changePage("sub")}><AiOutlineLeftCircle style={{fontSize:"48px", marginRight:"0.5em"}}/></div>
//         Page {pageNumber} of {numPages}
//       <div className='changePage' onClick={()=>changePage("add")}><AiOutlineRightCircle style={{fontSize:"48px", marginLeft:"0.5em"}}/></div>
//       </p>
//       </Document>

// <Document className="mediumPDF" file={pdfMedium} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       <p style={{marginTop:"1em"}}>
//       <div className='changePage' onClick={()=>changePage("sub")}><AiOutlineLeftCircle style={{fontSize:"48px", marginRight:"0.5em"}}/></div>
//         Page {pageNumber} of {numPages}
//       <div className='changePage' onClick={()=>changePage("add")}><AiOutlineRightCircle style={{fontSize:"48px", marginLeft:"0.5em"}}/></div>
//       </p>
//       </Document>
    
//       <Document className="largePDF" file={pdfLarge} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       <p style={{marginTop:"1em"}}>
//       <div className='changePage' onClick={()=>changePage("sub")}><AiOutlineLeftCircle style={{fontSize:"48px", marginRight:"0.5em"}}/></div>
//         Page {pageNumber} of {numPages}
//       <div className='changePage' onClick={()=>changePage("add")}><AiOutlineRightCircle style={{fontSize:"48px", marginLeft:"0.5em"}}/></div>
//       </p>
//       </Document>
    
//     </>
      
  );
}

export default PDF