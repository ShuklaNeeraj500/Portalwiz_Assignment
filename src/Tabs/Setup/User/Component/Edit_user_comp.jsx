import React, { useState, useEffect } from "react"
import Input from "../../Student/Component/Input"
import Heading from "../../../../Common-To-All/Heading"
import {Link, useParams } from "react-router-dom";

import {toast} from "react-toastify"
import axios from "axios";

const Edit_user_comp =()=>{
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

  const [datas , setData]= useState([]);

  useEffect(() => {
    loadUser();
    loadRoles();
  }, []);


// -----------This function will Fetch all the Existing Roles--------------------
const loadRoles = async () => {
      const obj = {
        id: id,
        uname: sessionStorage.getItem("username"),
      };

      await axios.post("http://sandbox.portalwiz.com/php/roles.php", obj)
      .then( (response) => {
        let a = JSON.parse(response.data.data);
        console.log(a);
        setData(a);
      })
      .catch( (err) => console.log(err) );
      }

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
                        <li className="breadcrumb-item active">Edit User</li>
                    </ol>
                </nav> 
                <Heading name={"Edit User-"+" "+ field.firstname} />
                <form onSubmit={onSubmit}>

                <div className="container mt-3">
                    <div className="row">
                    <div className="col-11 col-md-10">

                        <h4 className="mb-4">Update Information</h4>

                       
                          <div>
                            <Input field="Sr No" type="text" placeholder="Add text" class="form-control border-0 font-weight-bold bg-light" value={id} />
                            
                            
                            <Input field="User Name" name="uname" type="text" placeholder="Add text" class="form-control border-0 font-weight-bold bg-light " value={field.uname}  />
                            
                            <Input field="Email" name="email" type="email" placeholder="Add text" class="form-control" value={field.email} onChange={onChange} />
                            
                            <Input field="First Name" name="firstname" type="text" placeholder="Add text" class="form-control" value={field.firstname} onChange={onChange} />

                            <Input field="Last Name" name="lastname" type="text" placeholder="Add text" class="form-control" value={field.lastname} onChange={onChange} />
                            
                            
                            {/* // <div className="form-group row">
                            //     <label className="col-sm-5 col-form-label">Student ID</label>
                            //     <div className="col-sm-7 col-md-6 ">
                            //     <input type="text" readonly className="form-control-plaintext" value="" />
                            //     </div>
                            // </div> */}

                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Role</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <select className="form-control custom-select" value={field.role}  name="role"  onChange={onChange}>
                                    <option selected>Choose Roles</option>
                                    {datas.map((data , i)=>(<option key={i} value={data.role_profile}>{data.role_profile}</option>)) } 
                                    </select>
                                </div>
                            </div>  
        
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Status</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" 
                                            type="radio" 
                                            id="radio1" 
                                            value="1" 
                                            checked={field.status === "1"}
                                            name="status" onChange={onChange}/>
                                        <label class="form-check-label" htmlFor="radio1">Active</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" 
                                            type="radio" 
                                            id="radio2" 
                                            value="0" 
                                            checked={field.status === "0"}
                                            name="status" onChange={onChange}/>
                                        <label class="form-check-label" htmlFor="radio2">Inactive</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Update</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <button type ="submit" className="btn btn-primary btn_link">Update</button>
                                </div>
                            </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </form>
    </div>  
        </>
    )
}

export default Edit_user_comp

