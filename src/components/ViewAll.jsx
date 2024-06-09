import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const ViewAll = () => {
    const [student,getStudent] = useState([])
    const fetchData=()=>{
        axios.get('https://anishpdm.github.io/dummy-api-new/student.json').then(
            (response)=>{
                getStudent(response.data)
                console.log(response.data)
            }
        ).catch().finally()
    }
useEffect(()=>{fetchData()},[])

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">Course</th>
                      <th scope="col">DOB</th>
                      <th scope="col">College</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        student.map(
                            (value,index)=>{
                                return  <tr>
                                <th scope="row">{value._id}</th>
                                <td>{value.address}</td>
                                <td>{value.college}</td>
                                <td>{value.dob}</td>
                                <td>{value.email}</td>
                              </tr>
                            }
                        )
                    }
                   
                  </tbody>
                </table>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
