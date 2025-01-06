function Categories(){
    const Person = [
        {name:"Mohan",course:"React"},
        {name:"Vengatesh",course:"Python"}
    ]
    return(
        <div>
            {Person && Person.map((SinglePerson)=>{
            return(
                <>
                <h3>{SinglePerson.name}</h3>
                <p>{SinglePerson.course}</p>
                </>
            )
   })}
    
        </div>
    )
}
export default Categories;