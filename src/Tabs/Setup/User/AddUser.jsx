import React, { useState } from "react";
import Navbar from "../../../Common-To-All/Navbar";
import Footer from "../../../Common-To-All/Footer";
import Sidebar from "../../../Sidebar/Sidebar";
import Heading from "../../../Common-To-All/Heading";
import { Link , useHistory} from "react-router-dom";

import {toast} from "react-toastify"
import Axios from "axios";

const AddUser = () => {

  let history = useHistory();
  let message = "";

  const [user, setUser] = useState({
    uname: "",
    password: "",
    email: "",
    firstname: "",
    lastname: ""
  });

  const { uname, password, email, firstname, lastname } = user;
  const onInputChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    //console.log(e);
    e.preventDefault();

   /*---------------Fetching Date in YEAR-MONTH-DATE  format-------------------------- */ 
   var dateObj = new Date();
   var month = dateObj.getUTCMonth() + 1; //months from 1-12
   var day = dateObj.getUTCDate();
   var year = dateObj.getUTCFullYear();
 
   var newdate = year + "-" + month + "-" + day; 

/*---------------Creating object to send data through Axios------------------------- */
    const obj = {
        uname:user.uname ,  created_by:sessionStorage.getItem("username"), 
        password:user.password, email:user.email, firstname:user.firstname, lastname:user.lastname
    }

    await Axios.post("http://sandbox.portalwiz.com/php/users/insert.php", obj)
      .then((res) => {
        console.log(res);
        if(res.data.message === "User Created successfully. Please Login") {
            toast.success("User Created successfully!")
            history.push("/User")
          }else alert("User not created, please try again!")
    }).catch((err) => console.log(err));   
  };



  return (
    <>
      <Navbar />
      <div className="d-flex Tab_page">
        <Sidebar />
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-light py-1 mt-2 align-items-center">
              <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
              <li className="breadcrumb-item"><strong>Setup</strong></li>
              <li className="breadcrumb-item active" aria-current="page"><Link to="/user">Users</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Add Users</li>
            </ol>
          </nav>
          <Heading name="Add Users" />

          <div className="container">
            <div className="w-75 mx-auto shadow p-5">
              <form onSubmit={(e) => onSubmit(e)}>
                <div class="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="uname"
                    value={uname}
                    onChange={(e) => onInputChange(e)}
                  />
                  <br />
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => onInputChange(e)}
                  />
                  <br />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  /><br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => onInputChange(e)}
                  /><br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Lastname"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => onInputChange(e)}
                  />
                  <br />
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                  <div>
                    {message && <div> Username or Email already exist.</div>}{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddUser;
