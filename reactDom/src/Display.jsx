import { useEffect, useState } from "react";
import axios from "axios";



const Display=()=>{
    const [mydata, setMydata]=useState([]);

    const loadData = () => {
        let url="http://localhost:3000/students";
    axios.get(url)
      .then((response) => {
        setMydata(response.data);
        console.log(response);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  const ans=mydata.map((key)=>{
    return(
        <>
    <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
    </tr>
    </>
    )
  })
    return(
        <>
        <table align="center" width="50%" border="2" >
            <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
        </table>
        </>
    )
}

export default Display;