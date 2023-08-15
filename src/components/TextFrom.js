import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextFrom(props) {
    const[text,setText]=useState('');

    const handelOnChange=(event)=>{
        setText(event.target.value);
    }
    const handelUpClick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handelLwClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handelSort=()=>{
        let newText;
        if(text === text.split("").sort().join("")){
            newText=text.split("").reverse().join("");
        }
        else{
            newText=text.split("").sort().join("");
        }
        setText(newText);
        props.showAlert("Sort the Sentence in Alphabatic Order","success");
    }
    const handelText=()=>{
        setText("");
        props.showAlert("Return to the Initial State","success");
    }
    const handelSpace=()=>{
       let ntext=text.replace(/\s+/g, ""); //  /\s+/g, ""  this remove the space from the string.
       setText(ntext);
       props.showAlert("Remove all Space from the Sentance","success");
    }
    // const handelSpeak=()=>{
    //     let msg=new SpeechSynthesisUtterance();
    //     msg.text=text;
    //     window.speechSynthesis.speak(msg);
    // }
    // text="gdhbfhjhf"//wrong way
    // setText('hvfhfhjb');//right way.
    return (
        <>
        <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2>{props.heading} </h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode === 'dark'?'#005a66':'white',color:props.mode === 'dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div /*className='shadow p-3 mb-5 bg-body-tertiary rounded'*/ style={{color:props.mode === 'dark'?'white':'black'}}>
                <button className="btn btn-outline-primary mx-2 my-1" onClick={handelUpClick}> Convert to UpperCase</button>
                <button className="btn btn-outline-primary mx-2 my-1" onClick={handelLwClick}> Convert to LowerCase</button>
                <button className="btn btn-outline-primary mx-2 my-1" onClick={handelSort}> Sort</button>
                <button className="btn btn-outline-primary mx-2 my-1" onClick={handelSpace}> Space Remover</button>
                <button className="btn btn-outline-primary mx-2 my-1" onClick={handelText}> Reset</button>
                {/* <button className="btn btn-outline-danger mx-2" onClick={handelSpeak}> Speak</button> */}
            </div>
        </div>
        <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
            <b><p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} charecters.</p></b>
        </div>
        </>
    )
}

TextFrom.propTypes={
    heading :PropTypes.string.isRequired
}
TextFrom.defaultProps ={
    heading: 'This is Heading',
    title:'Title'
}