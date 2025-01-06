import React, { useEffect, useState } from 'react';

function Form1() {
    const [name, setName] = useState("test");
    const [concept, setConcept] = useState("test1");
    const [extraContent, setExtraContent] = useState("test3");
    const [showData, setShowData] = useState(false);
    const [value, setValue] = useState(
        localStorage.getItem("name") ? JSON.parse(localStorage.getItem("name")): []
        
    );


    useEffect(
        ()=>{
           localStorage.setItem("name",JSON.stringify(value))
        },[value]
        
    )



    function handleChangeName(event) {
        setName(event.target.value);
    }

    function handleChangeConcept(event) {
        setConcept(event.target.value);
    }

    function handleChangeExtraContent(event) {
        setExtraContent(event.target.value);
    }

    function change(event) {
        event.preventDefault();
        setShowData(true);
        setValue((prev) => [...prev, { name, concept, extraContent }]);
         
        setName("");
        setConcept("");
        setExtraContent("");
    }

    function removeItem(index) {
        setValue((prev) => prev.filter((_, i) => i !== index));
        console.log(index)
        
    }

    return (
        <div className="container">
            <div className="text-center">
                <h1 className="py-2">ToDoApp - React js</h1>
                <h4>Technologies used</h4>
                <p>HTML, CSS, Bootstrap, Javascript, and React</p>
            </div>
            <form onSubmit={change} className="d-flex justify-content-around h-100 w-100 px-5 py-3" style={{ backgroundColor: '#00ff11' }}>
                <div>
                    <h6>Name</h6>
                    <input type="text" value={name} onChange={handleChangeName} />
                </div>
                <div>
                    <h6>Concept</h6>
                    <input type="text" value={concept} onChange={handleChangeConcept} />
                </div>
                <div>
                    <h6>Extra content</h6>
                    <input type="text" value={extraContent} onChange={handleChangeExtraContent} />
                </div>
                <div>
                    <h6>Submit</h6>
                    <button type="submit" className="bg-info text-light">Click</button>
                </div>
            </form>

            { value.length > 0 && value.map((item, index) => {
                return (
                    <div key={index} className='w-100 row border border-2 mt-2 ms-1'>
                        <div className='col-3'>Name: {item.name}</div>
                        <div className='col-3'>Concept: {item.concept}</div>
                        <div className='col-3'>Extra Content: {item.extraContent}</div>
                        <button className='col-3 w-10 bg-danger' onClick={() => removeItem(index)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}
export default Form1;  

 