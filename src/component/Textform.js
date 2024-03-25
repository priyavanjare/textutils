import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("uppercase")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase","success ");
    }
    const handleDownClick=()=>{
        console.log("lowercase")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowerCase","success ");
    }
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("cleared text","success ");
    }
    const handleCopy=()=>{
      var text= document.getElementById('myBox') ;
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied to clipboard","success ");
    }
    const handleExtraSpaces=()=>{
      let newText= text.split(/[ ]+/);
      setText(newText.join(""))
      props.showAlert(" extra spaces removed","success ");
    }
   
    const[text,setText]=useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
 <h1>{props.heading}</h1>     
<div className="mb-3">
  <textarea className="form-control mb-2" style={{backgroundColor:props.mode==="dark"?"gray":"white",color:props.mode==="dark"?"white":"black"}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
  <button className='btn btn-primary mx-2 my-2'onClick={handleUpClick}>convert to Uppercase</button>
  <button className='btn btn-primary mx-2 my-2'onClick={handleDownClick}>convert to Lowercase</button>
  <button className='btn btn-primary mx-2 my-2'onClick={handleClearClick}>Clear Text</button>
  <button className='btn btn-primary mx-2 my-2'onClick={handleCopy}>Text copy</button>
  <button className='btn btn-primary mx-2 my-2'onClick={handleExtraSpaces}>Remove Extra Space</button>

</div>
<div className='container my-3' style={{color:props.mode==="dark"?"white":"black"}}>
    <h2>Your text summary</h2>
    
    <p>{!text?text.split(" ").length-1:text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the text to preview it here"}</p>
</div>
    </div>
    </>
  )
}
