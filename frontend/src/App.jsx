import React, { useEffect, useState } from 'react'

function App(){
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then (data => setData(data))
    .catch(err => console.log(err));
  }, [])
  return (
    <div style={{padding:"50 px"}}>
      <table>
        <thead>
          <th>Name</th>
          <th>ID</th>
          <th>Semester</th>
          <th>GPA</th>
        </thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}>
              <td>{d.name}</td>
              <td>{d.id}</td>
              <td>{d.sem}</td>
              <td>{d.gpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App