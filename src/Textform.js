import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpclick=()=>{
 //   console.log("uppercase is selected"+count);
          let newCount=count.toUpperCase();
          setCount(newCount)
          props.showalert("uppercase has been selected","success");
    }
    const onchangeHandle=(event)=>{
        // console.log("on change");
        setCount(event.target.value);
  }
  const handleLoclick=()=>{
    let newLower=count.toLowerCase();
    setCount(newLower)
    props.showalert("lowercase has been selected","success");
  }
  const handleClear=()=>{
    let ct="";
    setCount(ct)
  }
  
const handleRev=()=>{
 let rt="";
 for(let i=count.length-1;i>=0;i--)
 {
    rt+=count[i];
 }
 setCount(rt)
 props.showalert("reverse mode has been selected","success");
}
const handleTrim=()=>{
    let tt=count.replaceAll(" ","");
    setCount(tt)
    props.showalert("trim has been selected","success");
  }
    const [count, setCount] = useState('');
  return (
    <> 
    <div className="container" style={{color :props.mode==='dark'?'white':'#042743'}}>
<div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" style={{backgroundColor :props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={onchangeHandle} value={count} id="mybox" rows="8" placeholder='enter your text'></textarea>
</div>
<button disabled={count.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>convert to uppercase</button>
<button disabled={count.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>convert to Lowercase</button>
<button disabled={count.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRev}>Reverse</button>
<button disabled={count.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTrim}>Trim</button>
<button  disabled={count.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>clear</button>


    <div className="container"  >
        <h1>your text summery</h1>
        <p>{count.trim().length===0?0:count.split(" ").length} words and {count.length} characters</p>
        <p>{count.trim().length===0?0:0.008*count.split(" ").length} minutes to read</p>
    </div>
    <h1>preview</h1>
    <p>{count.length>0?count:"Nothing to preview"}</p>
    </div>
    </>
  )
}
