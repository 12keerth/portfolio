import { useState } from "react";


export default function Todo(){
    const [text,setText] = useState("test");
    const [showData,setShowData] = useState(false);
    const [values,setValues] = useState([]);
    function handleChange(event){
        setText(event.target.value);
       // console.log("text=>",text);
    }
    function handlSubmit(event){
        event.preventDefault();
       // setText("Hello")
        setShowData(true);
        setValues((pre) => [...pre,text])
        setText("");
    }
    console.log("values=>",values);
    // if(showData) {
    //     return(<p>{text}</p>)
    // }
  return(
    <>
    <form onSubmit={handlSubmit}>
        <label>Title</label>
        <input type="text"  value={text} onChange={handleChange} />
        <br/>
        <input type="submit" />
    </form> 
    {showData && values && values.length > 0 && values.map((value,index)=>{
        return(
         <p key={index}>{value}</p>
        )
    })}
    </>
  )
}
