import { useEffect, useState } from "react";
import axios from "axios";
import editimg from './assets/edit.jpeg';
import deleteimg from './assets/delete.jpeg';
import { useNavigate } from 'react-router-dom';


const Update=()=>{
    const [mydata, setMydata]=useState([]);
    const navigate=useNavigate();

    const loadData=()=>{
        let url="http://localhost:3000/students";
        axios.get(url).then((response)=>{
            setMydata(response.data);
        })

    }
const delrec=(id)=>{
    let url= `http://localhost:3000/students/${id}`;

    axios.delete(url).then((res)=>{
        alert("Record Deleted");
        loadData();
    })
  }

  const editRec=(id)=>{
        navigate("/myedit/"+id);
  }
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>

                <td>
                    <a href="#" onClick={()=>{editRec(key.id)}}>
                    <img src={editimg} width="20" alt="" />
                    </a>
                </td>
                <td>
                    <a href="#" onClick={()=>{delrec(key.id)}}>
                        <img src={deleteimg} width="20" alt="" />
                    </a>
                </td>
            </tr>
            </>
        )
    })

    useEffect(() => {
    loadData();
  }, []);

  

  return(
    <>
        <h1>Update Data!!</h1>
        <table width="50%" >
            <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
                <th> </th>
                <th> </th>
            </tr>
            <tbody>{ans}</tbody>
        </table>
    </>
  )
}

export default Update;