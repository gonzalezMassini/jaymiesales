import React, {useState} from 'react'
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
// import pdf from "../assests/pdfs/WindmarHome.pdf"
// import pdfLarge from '../assests/pdfs/WindmarHome112.pdf'
// import pdfMedium from '../assests/pdfs/WindmarHome2.pdf'
import {AiOutlineLeftCircle, AiOutlineRightCircle} from 'react-icons/ai'
// import pdfSmall from '../assests/pdfs/WindmarHomebu.pdf'
import Image1 from '/home/gonzalezmassini/Documents/projects/github/jaymiesales/src/assests/Windmar Home/Windmar_Home1024_1.jpg'
import Image2 from '/home/gonzalezmassini/Documents/projects/github/jaymiesales/src/assests/Windmar Home/Windmar_Home1024_2.jpg'
import Image3 from '/home/gonzalezmassini/Documents/projects/github/jaymiesales/src/assests/Windmar Home/Windmar_Home1024_3.jpg'
import Image4 from '/home/gonzalezmassini/Documents/projects/github/jaymiesales/src/assests/Windmar Home/Windmar_Home1024_4.jpg'
import Image5 from '/home/gonzalezmassini/Documents/projects/github/jaymiesales/src/assests/Windmar Home/Windmar_Home1024_5.jpg'
import Image6 from '/home/gonzalezmassini/Documents/projects/github/jaymiesales/src/assests/Windmar Home/Windmar_Home1024_6.jpg'
import Image7 from '/home/gonzalezmassini/Documents/projects/github/jaymiesales/src/assests/Windmar Home/Windmar_Home1024_7.jpg'
import Image8 from '/home/gonzalezmassini/Documents/projects/github/jaymiesales/src/assests/Windmar Home/Windmar_Home1024_8.jpg'
import Image9 from '/home/gonzalezmassini/Documents/projects/github/jaymiesales/src/assests/Windmar Home/Windmar_Home1024_9.jpg'
import Image10 from '/home/gonzalezmassini/Documents/projects/github/jaymiesales/src/assests/Windmar Home/Windmar_Home1024_10.jpg'
import Image11 from '/home/gonzalezmassini/Documents/projects/github/jaymiesales/src/assests/Windmar Home/Windmar_Home1024_11.jpg'
import Image12 from '/home/gonzalezmassini/Documents/projects/github/jaymiesales/src/assests/Windmar Home/Windmar_Home1024_12.jpg'
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
    <div>  
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