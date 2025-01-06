 import fb from '../fb.svg'
 import { useState,useEffect } from 'react';
 function Banner(){
    const [title, setTitle] = useState("heading");
    const [venkat, setVenkat] = useState("student");
    useEffect(()=> {
        if(venkat == "React developer"){
            setTitle("HTML,CSS,Js,React")
        }else {
            setTitle("Test")
        }
    },[venkat])
    function changeValue () {
        setVenkat("React developer");
    }
return(
    <div style={{width:"100vw  ",position:"relative"}} className="banner-section">
        <button onClick={changeValue}>change Title</button>
        <img style={{position:'relative',right:"60px",width:'100%', height:'50%',display:'flex',justifyContent:'center'}} src='https://img.freepik.com/premium-photo/river-mountains-with-dark-sky-background_901003-14568.jpg'></img>
        <h1 style={{position:'absolute',top:"30%",left:"40%",color:'white',}}>{title}</h1>
        <img src={fb} />
        </div>
)
}
export default Banner;