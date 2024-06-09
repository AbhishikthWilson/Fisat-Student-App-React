import React, { useState } from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
    const [data,getData]= useState(
        {
            "firstname":"",
            "lastname":"",
            "clg":"",
            "course":"",
            "mobile":"",
            "email":"",
            "dob":"",
            "address":""        }
    )
    const inputHandler=(event)=>{
        getData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">First Name</label>
                    <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Last Name</label>
                <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">College</label>
                <input type="text" className="form-control" name='clg' value={data.clg} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">DOB</label>
                <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Course</label>
                <textarea name="course" id="" className="form-control" value={data.course} onChange={inputHandler} ></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Mobile No</label>
                <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" name="email" id="" className="form-control" value={data.email} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Address</label>
                <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={readValue} className="btn btn-success">Submit</button>
                </div>
            </div>

            </div>
        </div>
    </div>

    </div>
  )
}

export default AddStudent