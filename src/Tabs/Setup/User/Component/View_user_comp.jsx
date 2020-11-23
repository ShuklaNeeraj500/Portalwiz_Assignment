import React, { useState, useEffect } from "react"
import Input from "../../Student/Component/Input"
import Heading from "../../../../Common-To-All/Heading"
import {Link, useParams } from "react-router-dom";
import {Readonly_Input} from "../../Student/Component/Input"
import {toast} from "react-toastify"
import axios from "axios";

const View_user_comp =()=>{
  let message = "";
  const { id } = useParams();

  const [field, setField] = useState({
    uname: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    status: "",
    role:""
  });


  useEffect(() => {
    loadUser();

  }, []);



// -----------This function will Fetch the User's Data--------------------
  const loadUser = async () => {
    const obj = {
      id: id,
      uname: sessionStorage.getItem("username"),
    };

  await axios.post("http://sandbox.portalwiz.com/php/users/select_user.php", obj)
  .then( (response) => {
      let resData = JSON.parse(response.data.data);
      console.log(resData)

      setField({
          uname: resData[0].username,
          email: resData[0].email,
          firstname: resData[0].first_name, 
          lastname: resData[0].last_name,
          status: resData[0].active,
          role:resData[0].role
      })
  })
    .catch( (err) => console.log(err) );
  };

  
  const onChange = (e)=>{   
    const input = e.target;
    const name = input.name;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    setField((preValue)=>{
        return{
            ...preValue ,
            [name] :value
        }
    })
}

  const onSubmit = async (e) => {
    e.preventDefault();

      /*---------------Fetching Date in YEAR-MONTH-DATE  format-------------------------- */ 
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
  
      var newdate = year + "-" + month + "-" + day;
  
  /*---------------Creating object to send data through Axios------------------------- */
    const obj = {
      uname:field.uname, email :field.email , firstname:field.firstname ,role:field.role ,
      lastname:field.lastname, status:field.status , id:id, updated_by:sessionStorage.getItem("username"), updated_on:newdate 
      }

    await axios.post("http://sandbox.portalwiz.com/php//users/update_user.php", obj)
      .then((res) => {
        console.log(res)
        if (res.data.message === "Users Updated") {
          loadUser();
          toast.success("User Updated successfully!")
        } else {
          message = res.data.message;
          alert(message)
        }
      })
      .catch((err) => console.log(err));
  };
    return(
        <>
        <div className="container-fluid Setup_form">
{/*----------------------- Bread crumb ------------------------- */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb Breadcrumb align-items-center">
                        <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                        <li className="breadcrumb-item"><strong>Setup</strong></li>
                        <li className="breadcrumb-item"><Link to="/user">Users</Link></li>
                        <li className="breadcrumb-item active">View User</li>
                    </ol>
                </nav> 
                <Heading name={"View User-"+" "+field.firstname} />
                <form onSubmit={onSubmit}>

                <div className="container mt-3">
                    <div className="row">
                    <div className="col-11 col-md-10">

                        <h4 className="mb-4">View Information</h4>

                       
                          <div>
                            <Input field="Sr No" type="text" placeholder="--" class="form-control border-0 font-weight-bold bg-light" value={id} />
                            
                            
                            <Readonly_Input field="User Name" type="text" placeholder="--" class="form-control border-0 font-weight-bold bg-light " value={field.uname}  />
                            
                            <Readonly_Input field="Email"  type="email" placeholder="--" class="form-control border-0 bg-light" value={field.email}  />
                            
                            <Readonly_Input field="First Name"  type="text" placeholder="--" class="form-control border-0 bg-light" value={field.firstname}  />

                            <Readonly_Input field="Last Name"  type="text" placeholder="--" class="form-control border-0 bg-light" value={field.lastname}  />
                            
                            
                            {/* // <div className="form-group row">
                            //     <label className="col-sm-5 col-form-label">Student ID</label>
                            //     <div className="col-sm-7 col-md-6 ">
                            //     <input type="text" readonly className="form-control-plaintext" value="" />
                            //     </div>
                            // </div> */}

        
                            {/* ---Select Input---- */}
                        <Readonly_Input field="Role" type="text" placeholder="--" class="form-control bg-light border-0 "  value={field.role}/>
        
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Status</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" 
                                            type="radio" 
                                            id="radio1" 
                                            value="1" 
                                            checked={field.status === "1"}
                                          readOnly/>
                                        <label className="form-check-label" htmlFor="radio1">Active</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" 
                                            type="radio" 
                                            id="radio2" 
                                            value="0" 
                                            checked={field.status === "0"}
                                          readOnly/>
                                        <label className="form-check-label" htmlFor="radio2">Inactive</label>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Update</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <button type ="submit" className="btn btn-primary btn_link">Update</button>
                                </div>
                            </div> */}
                            </div>
                        
                    </div>
                </div>
            </div>
        </form>
    </div>  
        </>
    )
}

export default View_user_comp

