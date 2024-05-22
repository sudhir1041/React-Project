

const Design=(props)=>{
    return(

        <>
        <div className="emp">
        <h2>Emplyee Name : {props.nm} </h2>
        <h2>Emplyee Empid : {props.empid} </h2>
        <h2>Emplyee Department : {props.dept} </h2>
        <h2>Emplyee City : {props.city} </h2>
        <h2>Emplyee Salary : {props.salary} </h2>
        </div>
        </>
    )
}

export default Design;