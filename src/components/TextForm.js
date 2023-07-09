import React,{useState} from 'react'

export default function TextForm() {
const [text,setText]=useState("enter here");
const handleChange=(e)=> {
setText(e.target.value);
}
const makeTextUpper =(e)=>{
    let newText=text.toUpperCase()
    console.log('new text',newText);
    setText(newText)   

    }
    const makeTextLower=(e)=>{
    setText(text.toLowerCase())       
}
const makeTextCapitalize=(e)=>{
    setText(text.charAt(0).toUpperCase()+text.slice(1))
}
const makeEachFirstLetterUpper=(e)=>{
    const textArray=text.split(" ")
   
    textArray.map((v,i)=>{
        textArray[i]=v.charAt(0).toUpperCase()+v.slice(1)
        console.log('value is',textArray);
    })
    console.log(textArray.join(" "))
    setText(textArray.join(" "))
}
const copyToClipboard=()=>{
  const textField = document.getElementById('text');
  textField.select()
  textField.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(textField.value);
}
  return (

    <div className="container mb-3 form">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your text</label>
        <textarea className="form-control" id="text" value={text} rows={3} defaultValue={""} onChange={handleChange} />
        <div className="btn-group">
            <button className='btn btn-primary border b-2' onClick={makeTextUpper}>UPPERCASE</button>
            <button className='btn btn-primary border b-2' onClick={makeTextLower}>lowercase</button>
            <button className='btn btn-primary border b-2' onClick={makeTextCapitalize}>Capitalize</button>
            <button className='btn btn-primary border b-2' onClick={makeEachFirstLetterUpper}>Make Each first Upper</button>
            <button className='btn btn-primary border b-2' onClick={copyToClipboard}>Copy to clipboard</button>
        </div>
        <div className="container">
            <p>{text.split(" ").length} - words</p>
            <p>{text.length} - Characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read it</p>
        </div>
      </div>
  )
}
