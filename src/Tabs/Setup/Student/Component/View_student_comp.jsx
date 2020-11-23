import React, {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import {toast} from "react-toastify"
import Heading from "../../../../Common-To-All/Heading"
import {Readonly_Input} from "../../Student/Component/Input"
import axios from "axios"


const  View_student_comp = ()=>{
let message="";

const { id } = useParams();

    const[field ,setField]= useState({
            uname:sessionStorage.getItem("username"), stud_id:"",
            // ------------normal input fields--------------
            fname:"",  mname:"", lname:"", city:"", zip:"", mobile_no:"", home_no:"", email:"",
            parent_fname:"", parent_lname:"",   parent_mobile_no:"",  parent_email:"", parent_mobile_no_2:"",
            parent_email_2:"",  join_date:"",  leave_date:"",

            // ------------Textarea input fields--------------
            addressline1:"",  addressline2:"",

            // ------------Checkbox input fields--------------
            active:false,   photo_consent:false,  disclaimer_signed:false,

            // ------------Select inputs fields--------------
            state:"",  country:"", location_name:"",  batch_name:"",  level_name:"",  user_name:"",
            picture:"", 
    })

    useEffect(()=>{
        StudentDetail();
      },[])
    
// ------------------------------
      const StudentDetail = async () =>{
        const obj ={
          uname :field.uname,
          id:id
        }
        axios.post("http://sandbox.portalwiz.com/php/students/select_student.php", obj)
        .then( (response) => {
            let resData = JSON.parse(response.data.data);
            console.log(resData);
            setField({
                fname:resData[0].fname,  mname:resData[0].mname, lname:resData[0].lname, city:resData[0].city, zip:resData[0].zip, 
                mobile_no:resData[0].mobile_no, home_no:resData[0].home_no, email:resData[0].email,
                parent_fname:resData[0].parent_fname, parent_lname:resData[0].parent_lname,   parent_mobile_no:resData[0].parent_mobile_no, 
                parent_email:resData[0].parent_email, parent_mobile_no_2:resData[0].parent_mobile_no_2,approved_date:resData[0].approved_date,
                parent_email_2:resData[0].parent_email_2,  join_date:resData[0].join_date,  leave_date:resData[0].leave_date, 
                stud_id:resData[0].stud_id,
                // ------------Textarea input fields--------------
                addressline1:resData[0].addressline1,  addressline2:resData[0].addressline2,
    
                // ------------Checkbox input fields--------------
                active:resData[0].active,   photo_consent:resData[0].photo_consent,  disclaimer_signed:resData[0].disclaimer_signed,
    
                // ------------Select inputs fields--------------
                state:resData[0].state,  country:resData[0].country, location_name:resData[0].location_name,  batch_name:resData[0].batch_name, 
                level_name:resData[0].level_name,  user_name:resData[0].user_name,
               
            })
        })
        .catch( (err) => console.log(err) );
      }

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
    const handleInputChange = (e) =>{
        setField({ picture: e.target.files[0] })
    }

    const onSubmit =(e) =>{
        e.preventDefault();

        let profile_pic = new FormData() 
        profile_pic.append('profile_pic', field.picture)

/*---------------Fetching Date in YEAR-MONTH-DATE  format-------------------------- */ 
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        var newdate = year + "-" + month + "-" + day;

/*---------------Creating object to send data through Axios------------------------- */
        const obj = {
          uname:sessionStorage.getItem("username"), id:id, updated_date:newdate,  updated_by :field.uname,
          
          fname: field.fname,    mname: field.mname,    lname: field.lname, 
          city:field.city,      zip:field.zip ,      mobile_no:field.mobile_no ,
          home_no:field.home_no,  email:field.email,      parent_fname:field.parent_fname,
          parent_lname:field.parent_lname,  parent_mobile_no:field.parent_mobile_no,    parent_email:field.parent_email,
          parent_mobile_no_2:field.parent_mobile_no_2,  parent_email_2:field.parent_email_2,     
          join_date:field.join_date,  leave_date:field.leave_date,   addressline1:field.addressline1,   
          addressline2:field.addressline2,
          
          active: field.active , photo_consent :field.photo_consent , disclaimer_signed :field.disclaimer_signed,
          
          state:field.state,  country:field.country,  location_name:field.location_name,  batch_name:field.batch_name,
          level_name:field.level_name,  user_name:field.user_name ,
        }

        axios.post("http://sandbox.portalwiz.com/php/students/edit_student.php", obj)
        .then((res) => {
            console.log(res)
            if (res.data.message === "Student Updated") {
              toast.success("Student's data updated successfully!")
              StudentDetail();
            } else {
              message = res.data.message;
              alert(message)
            }
        })
        .catch( (err) => console.log(err) );
    }
 return(
    <>
        <div className="container-fluid Setup_form">
{/*-----------------------Bread crumb------------------------- */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb Breadcrumb align-items-center">
                        <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                        <li className="breadcrumb-item"><strong>Setup</strong></li>
                        <li className="breadcrumb-item "><Link to="/student">Student list</Link></li>
                        <li className="breadcrumb-item active">View Student</li>
                    </ol>
                </nav> 
                <Heading name={"View Student-"+" "+field.fname} /> 
{/* -------------------------------------------------Two Columns for Inputs--------------------------------------- */}
            <form onSubmit={onSubmit}>
                <div className="container mt-3">

                    <div className="row my-4">
                        <div className = "col-11 d-flex justify-content-end mx-auto">
                            {/* <Link to={"/stu-history-table/"+id } className="btn btn-info btn_link">View History</Link> */}
                            {/* <button type ="submit" className="btn btn-primary ml-3 btn_link">Save</button>         */}
                        </div>
                    </div>

                    <div className="row">

                {/*-----------------------Column-1 for Inputs------------------------- */}
                <div className="col-11 col-md-6 mx-auto">

                    <h5 className="mb-4">Personal Information</h5>

                        {/* <Input name="picture" onChange={handleInputChange} field="Profile Picture" type="file"  class="form-control-file" value={field.picture} /> */}

                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label">Student ID</label>
                            <div className="col-sm-7 col-md-6 ">
                            <input type="text" readOnly className="form-control bg-light border-0 font-weight-bold" value={field.stud_id} />
                        </div>
                    </div>
                        
                        <Readonly_Input  field="First Name" type="text" placeholder="--" class="form-control bg-light border-0" value={field.fname} />
                    
                        <Readonly_Input   field="Middle Name" type="text" placeholder="--" class="form-control bg-light border-0" value={field.mname} />
                        
                        <Readonly_Input   field="Last Name" type="text" placeholder="--" class="form-control bg-light border-0" value={field.lname} />

                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label">Address Line 1</label>
                            <div className="col-sm-7 col-md-6 ">
                                <textarea readOnly  className="form-control bg-light border-0" placeholder="--" value={field.addressline1}></textarea>
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label">Address Line 2</label>
                            <div className="col-sm-7 col-md-6 ">
                                <textarea readOnly className="form-control bg-light border-0" placeholder="--" value={field.addressline2} ></textarea>
                            </div>
                        </div>

                        <Readonly_Input field="City" type="text" placeholder="--" class="form-control bg-light border-0" value={field.city} />

                        
                        {/* ---Select Input---- */}
                        <Readonly_Input field="Province" type="text" placeholder="--" class="form-control bg-light border-0 "  value={field.state}/>

                        
                        {/* ---Select Input---- */}
                        <Readonly_Input field="Country" type="text" placeholder="--" class="form-control bg-light border-0 "  value={field.country}/>


                        
                        <Readonly_Input  field="Zip" type="text" placeholder="--" class="form-control bg-light border-0" value={field.zip} />
                        
                        <Readonly_Input field="Mobile Number" type="text" placeholder="--" class="form-control bg-light border-0" value={field.mobile_no} />

                        <Readonly_Input  field="Home Phone" type="text" placeholder="--" class="form-control bg-light border-0" value={field.home_no} />

                        <Readonly_Input  field="Email" type="email" placeholder="--" class="form-control bg-light border-0" value={field.email} />

                    <h5 className="mt-5 mb-4">Parent Information</h5>

                        <Readonly_Input   field="Parent First Name" type="text" placeholder="--" class="form-control bg-light border-0" value={field.parent_fname} />
                        
                        <Readonly_Input   field="Parent Last Name" type="text" placeholder="--" class="form-control bg-light border-0" value={field.parent_lname} />
                    
                        <Readonly_Input  field="Parent Mobile Number" type="text" placeholder="--" class="form-control bg-light border-0" value={field.parent_mobile_no} />
                        
                        <Readonly_Input   field="Parent Email" type="text" placeholder="--" class="form-control bg-light border-0" value={field.parent_email} />

                        <Readonly_Input   field="Parent Mobile Number 2" type="text" placeholder="--" class="form-control bg-light border-0" value={field.parent_mobile_no_2} />
                        
                        <Readonly_Input   field="Parent Email 2" type="text" placeholder="--" class="form-control bg-light border-0" value={field.parent_email_2} />
 
                    </div>
                        {/*-----------------------Column-2 for Inputs------------------------- */}
                        <div className="col-11 col-md-6 mx-auto">

                        <h5 className="mb-4">Batch Information</h5>
                            
                        {/* ---Select Input---- */}
                        <Readonly_Input field="Location" type="text" placeholder="--" class="form-control bg-light border-0 "  value={field.location_name}/>
                        
                        {/* ---Select Input---- */}
                        <Readonly_Input field="Batch" type="text" placeholder="--" class="form-control bg-light border-0 "  value={field.batch_name}/>

                        {/* ---Select Input---- */}
                        <Readonly_Input field="Level" type="text" placeholder="--" class="form-control bg-light border-0 "  value={field.level_name} />


                        <h5 className="mt-5 mb-4">Account Information</h5>

                        {/* ---Select Input---- */}
                        <Readonly_Input field="User" type="text" placeholder="--" class="form-control bg-light border-0 "  value={field.user_name}/>

                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Active Account</label>
                                <div className="col-sm-7 col-md-6 pl-4">
                                    <div className="form-check">
                                        <input readOnly className="form-check-input bg-light border-0"  type="checkbox" checked={field.active}    />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Photography Consent Provide?</label>
                                <div className="col-sm-7 col-md-6 pl-4">
                                <div className="form-check">
                                        <input readOnly className="form-check-input bg-light border-0"  type="checkbox" checked={field.photo_consent}    />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Disclaimer Signed?</label>
                                <div className="col-sm-7 col-md-6 pl-4">
                                <div className="form-check">
                                        <input readOnly className="form-check-input bg-light border-0" name="disclaimer_signed" type="checkbox" checked={field.disclaimer_signed}  />
                                    </div>
                                </div>
                            </div>

                            <Readonly_Input name="join_date"  field="Join Date" type="date" placeholder="--" class="form-control bg-light border-0" value={field.join_date} />

                            <Readonly_Input name="leave_date"  field="Leave Date" type="date" placeholder="--" class="form-control bg-light border-0" value={field.leave_date} />

                        </div>

                    </div>
                </div>
            </form>
        </div>
    
    </>
    )
 }

export default View_student_comp