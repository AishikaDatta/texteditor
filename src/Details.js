import React from 'react'

export default function Details(props) {
//   const [myStyle,newStyle]=useState({    
//     color:'black',
//     backgroundColor:'white'
// }
// )
let myStyle={
  color:props.mode==='dark'?'white':'#042743',
  backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
}
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
       <strong>Analyze your text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Text Editor is a free app that allows you to create, open, and edit text files on your computer and Google Drive.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong>  
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
     1. First, select a text file from your computer, Google Drive, or GMail attachment.
     2.The file will be displayed in your browser where you can then make any changes or edits.
     3.After edits are made, press the "Save to Drive" button to save the edited file back to Google Drive.
     4.Download a copy of the file to your computer or device using the "Download" button.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      A free, highly customizable text and code editor extension for your browser. Text Editor is a full-featured text & code editor add-on for your browser.
      </div>
    </div>
  </div>
</div>
{/* <div className="container" >
<button className=" btn btn-primary my-3" onClick={onclickEnable} >{btntext}</button>
</div> */}
    </div>
  )
}
