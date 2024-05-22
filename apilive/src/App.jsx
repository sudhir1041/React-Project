import React, { useState, useEffect } from "react";
import axios from 'axios';

const App = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = () => {
    axios.get("http://34.198.81.140/attendance.json")
      .then(response => {
        setMydata(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    loadData();
  }, []);

        const ans=mydata.map((key) => (
              <tr>
                <td>{key.emp_id}</td>
                <td>{key.name}</td>
                <td>{key.gender}</td>
                <td>{key.designation}</td>
                <td>{key.department}</td>
                <td>{key.basic_salary}</td>
              </tr>
            ));
  return (
    <>
      <h1 align="center">This is Employee Attendance data API!!!</h1>
      <table border="3px solid red" width="80%" align="center">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Basic Salary</th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
        
      </table>
    </>
  );
}

export default App;


//http://34.198.81.140/attendance.json