import React, {useState}from 'react'

const TextForm = props => {
    const [text,setText]=useState("");
    const handleChange=(event)=>{
        setText(event.target.value);
    }

    const handleClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case","Success")
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case","Success")
    }
    const handleClearClick=()=>{
        setText('');
        props.showAlert("Clear All Text Successfully","Success")
    }
    const handleSpaceeClick=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","Success")
    }
    const handleDuplicateClick=()=>{
        var uniqueList=text.split(' ').filter(function(item,i,allItems){
            return i===allItems.indexOf(item);
        }).join(' ');
        setText(uniqueList);
    }
    const handleReverseClick=()=>{
    // Step 1. Use the split() method to return a new array
    var splitString = text.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");

        setText(joinArray);
    }
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>  
    <h2 className='my-3' >{props.heading} </h2>
        <div className='mb-3'>
            <textarea className='form-control my-2' value={text} id='myBox'onChange={handleChange} rows='3' style={{backgroundColor:props.mode==="dark"?"#212529":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
            <button className='btn btn-primary mx-2' onClick={handleClick}>Convert to Upercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleDuplicateClick}>Remove Duplicate</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={handleReverseClick}>Reverse Text</button>
            <button className='btn btn-primary mx-2' onClick={handleSpaceeClick}>Extra Space</button>
        </div>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>Your Text Summary</h1>
        <p>
            {text.length===0?0:text.trim().split(" ").length} words and {text.length} characters
        </p>
        <p>
             {text.replace(/^\s+|\s+$/gm,'').length} characters without spaces
        </p>
        <p>            {text.split(" ").length * 0.008}   Minutes Read</p>
        <h2> Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

export default TextForm
