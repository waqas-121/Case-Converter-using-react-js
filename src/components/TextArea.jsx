import React,{useState} from 'react';

function TextArea(props) {
    
    const hundleUpClick = () =>
    {
        let newText=text.toUpperCase()
        setText(newText)
    }
    const clearClick = () =>
    {
        let newText=text.replace(text,"")
        setText(newText)
    }

    const hundleLpClick = () =>
    {
        let newText=text.toLowerCase()
        setText(newText)
    }

    const hundleOnChange = (event) =>
    {
        // on click text goes to hundleOnClick() then result send here then setText() method 
        //targeted to value forcefully change text with newText(line# 7)  

        setText(event.target.value)
    }

    const[text,setText]=useState("")
    
  return (
    <>
        <div className="container">
            <div className="container my-3 bg-primary text-white p-3 bg-opacity-60  ">
                <h3>Your Text Summary</h3>
                <p>{text.length === 0 ? "0" : text.split(' ').length} Word {text.length} Character</p>
            </div> 
            <div className="TextArea container my-3">
                <textarea className="form-control" onChange={hundleOnChange} placeholder="Start typing ..." value={text}
                    rows="8" id="myBox">
                </textarea>
                <button type="button" class="btn btn-primary my-3 mx-2" onClick={hundleUpClick}>Convert to Uppercase</button>
                <button type="button" class="btn btn-primary my-3 mx-2  " onClick={hundleLpClick}>Convert to Lowercase</button>
                <button type="button" class="btn btn-primary my-3 mx-2" onClick={clearClick}>Clear All Text</button>
                
            </div>
        
        </div>
    </>
  )
}

export default TextArea;
