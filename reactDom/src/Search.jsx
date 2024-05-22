import axios from "axios";
import { useState } from "react"


const Search=()=>{
    const [rollno,setRollno]=useState("");
    const [mydata, setMydata]=useState([]);

    const handleSearch=()=>{
        let url=`http://localhost:3000/students/?rollno=${rollno}`

        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }

    const ans=mydata.map((key)=>{
        return(
            <>
            <h1>Name : {key.name} Roll No : {key.rollno}</h1>
            <h3>City : {key.city}</h3>
            <h3>Tution Fees : {key.fees}</h3>
            </>
        )
    })


    return(
        <>
        <h1>Search Data !!</h1>
        <input type="search" onChange={(e)=>{setRollno(e.target.value)}} />
        <button onClick={handleSearch}>Search</button>

        <br />
        <br />
        <hr />
        {ans}
        </>
    )
}

export default Search;