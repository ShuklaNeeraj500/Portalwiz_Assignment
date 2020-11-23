import React, {useState, useEffect} from "react"
import {Readonly_Input} from "../../Student/Component/Input"
import {Link, useParams} from "react-router-dom"
import Heading from "../../../../Common-To-All/Heading"
import axios from "axios"
 
const Edit_teacher_comp =()=>{

let message="";
const { id } = useParams();

    const[state ,setState]= useState({
            uname:sessionStorage.getItem("username"), teacher_id:"",
            // ------------normal input fields--------------
            fname:"",  mname:"", lname:"", city:"", zip:"", mobile_no:"", home_no:"", email:"",
            parent_fname:"", parent_lname:"",   parent_mobile_no:"",  parent_email:"", parent_mobile_no_2:"",
            parent_email_2:"",  join_date:"",  leave_date:"",registration_number:"",approved_date:"",kvk_number:"",
            contract_period:"",contract_renewal_date:"",probation_period:"", 
            // ------------Textarea input fields--------------
            addressline1:"",  addressline2:"",

            // ------------Checkbox input fields--------------
            active:false,   photo_consent:false,  disclaimer_signed:false,

            // ------------Select inputs fields--------------
            state:"",  country:"", location_name:"",  batch_name:"",  level_name:"",  user_name:"",
            picture:null 
    })

    useEffect(()=>{
        TeacherDetail();
      },[])
    
      const TeacherDetail = async () =>{
        const obj ={
          uname :state.uname,
          id:id
        }
        axios.post("http://sandbox.portalwiz.com/php/teachers/teacher_history_select.php", obj)
        .then( (response) => {
            let resData = JSON.parse(response.data.data);
            console.log(resData);
            setState({
                fname:resData[0].fname,  mname:resData[0].mname, lname:resData[0].lname, city:resData[0].city, 
                zip:resData[0].zip, mobile_no:resData[0].mobile_no, home_no:resData[0].home_no,
                email:resData[0].email, parent_fname:resData[0].parent_fname, parent_lname:resData[0].parent_lname,   
                parent_mobile_no:resData[0].parent_mobile_no, parent_mobile_no_2:resData[0].parent_mobile_no_2,
                parent_email:resData[0].parent_email,  join_date:resData[0].join_date,  leave_date:resData[0].leave_date, 
                parent_email_2:resData[0].parent_email_2, registration_number:resData[0].registration_number,
                teacher_id:resData[0].teacher_id, approved_date:resData[0].approved_date,
                probation_period:resData[0].probation_period,contract_renewal_date:resData[0].contract_renewal_date,
                contract_period:resData[0].contract_period, kvk_number:resData[0].kvk_number,
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


 return(
   <>
        <div className="container-fluid Setup_form">
{/*----------------------- Bread crumb ------------------------- */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb Breadcrumb align-items-center">
                    <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                        <li className="breadcrumb-item"><strong>Setup</strong></li>
                        <li className="breadcrumb-item" ><Link to="/teacher">Teachers list</Link></li>
                        <li className="breadcrumb-item"><Link to={"/edit-teacher/" + id}>Edit Teacher</Link></li>
                        <li className="breadcrumb-item "><Link to={"/tch-history-table/" + state.teacher_id}>History log</Link></li>
                        <li className="breadcrumb-item active">History details</li>
                    </ol>
                </nav> 
                <Heading name="Details of log" />
{/* ------------------------------------------------- Two Columns for Inputs --------------------------------------- */}
            <form > 
                <div className="container mt-3">

                    <div className="row mt-5">

                    {/*-----------------------Column-1 for Inputs------------------------- */}
                    <div className="col-11 col-md-6 mx-auto">

                        <h5 className="mb-4">Personal Information</h5>

                            
                            {/* <Readonly_Input field="Profile Picture" type="file" class="form-control-file"  value={state.picture}/> */}

                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Teacher ID</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <input type="text" readOnly className="form-control bg-light border-0 font-weight-bold" value={state.teacher_id} />
                                </div>
                            </div>
                            
                            <Readonly_Input field="First Name" type="text" placeholder="--" class="form-control bg-light border-0 " value={state.fname}/>

                            <Readonly_Input field="Middle Name" type="text" placeholder="--" class="form-control bg-light border-0 " value={state.mname}/>

                            <Readonly_Input field="Last Name" type="text" placeholder="--" class="form-control bg-light border-0 "  value={state.lname}/>

                            <div className="form-group row">
                            <label className="col-sm-5 col-form-label">Address Line 1</label>
                            <div className="col-sm-7 col-md-6 ">
                                <textarea  readOnly className="form-control bg-light border-0 " placeholder="--" value={state.addressline1}  ></textarea>
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label">Address Line 2</label>
                            <div className="col-sm-7 col-md-6 ">
                                <textarea readOnly className="form-control bg-light border-0 " placeholder="--" value={state.addressline2} ></textarea>
                            </div>
                        </div>

                            <Readonly_Input field="City" type="text" placeholder="--" class="form-control bg-light border-0 "   value={state.city}/>

                           {/* ---Select Input---- */}
                            <Readonly_Input field="Province" type="text" placeholder="--" class="form-control bg-light border-0 "  value={state.state}/>
                           
                            {/* ---Select Input---- */}
                            <Readonly_Input field="Country" type="text" placeholder="--" class="form-control bg-light border-0 "  value={state.country}/>

                            <Readonly_Input field="Zip" type="text" placeholder="--" class="form-control bg-light border-0 " name="zip"  value={state.zip}/>

                            <Readonly_Input field="Mobile Number" type="text" placeholder="--" class="form-control bg-light border-0 " name="mobile_no"  value={state.mobile_no}/>

                            <Readonly_Input field="Home Phone" type="text" placeholder="--" class="form-control bg-light border-0 " name="home_no"  value={state.home_no}/>

                            <Readonly_Input field="Email" type="email" placeholder="--" class="form-control bg-light border-0 " name="email"  value={state.email}/>

                            <Readonly_Input field="KVK Number" type="text" placeholder="--" class="form-control bg-light border-0 " name="kvk_number"  value={state.kvk_number}/>

                           <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Contract Document</label>
                                <div className="col-sm-7 col-md-6 d-flex align-items-center">
                                   <a href="#" download >View Contract Document &nbsp;<i className="fa fa-download"></i></a>
                                </div>
                            </div>

                    </div>

                        {/*-----------------------Column-2 for Inputs------------------------- */}
                        <div className="col-11 col-md-6 mx-auto">

                        <h5 className="mb-4">Batch Information</h5>

                            {/* ---Select Input---- */}
                            <Readonly_Input field="Location Name" type="text" placeholder="--" class="form-control bg-light border-0 "  value={state.location_name}/>

                            {/* ---Select Input---- */}
                            <Readonly_Input field="Batch Name" type="text" placeholder="--" class="form-control bg-light border-0 "  value={state.batch_name}/>

                            {/* ---Select Input---- */}
                            <Readonly_Input field="Level Name" type="text" placeholder="--" class="form-control bg-light border-0 "  value={state.level_name}/>

                        <h5 className="mt-5 mb-4">Account Information</h5>

                            {/* ---Select Input---- */}
                            <Readonly_Input field="User" type="text" placeholder="--" class="form-control bg-light border-0 "  value={state.user_name}/>
                            
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Active Account</label>
                                <div className="col-sm-7 col-md-6 pl-4">
                                    <div className="form-check">
                                        <input readOnly className="form-check-input" type="checkbox" name="active" checked={state.active}  />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Photography Consent Provide?</label>
                                <div className="col-sm-7 col-md-6 pl-4">
                                <div className="form-check">
                                        <input readOnly className="form-check-input" type="checkbox" name="photo_consent" checked={state.photo_consent}  />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Disclaimer Signed?</label>
                                <div className="col-sm-7 col-md-6 pl-4">
                                <div className="form-check">
                                        <input readOnly className="form-check-input" type="checkbox" name="disclaimer_signed" checked={state.disclaimer_signed}  />
                                    </div>
                                </div>
                            </div>

                            <Readonly_Input name="join_date"  field="Join Date" type="date" placeholder="Add text" class="form-control bg-light border-0 " value={state.join_date}/>

                            <Readonly_Input name="probation_period"  value={state.probation_period} field="Probation Period" type="number" placeholder="In Months" class="form-control bg-light border-0 " />

                            <Readonly_Input name="contract_renewal_date"  value={state.contract_renewal_date} field="Contract Renewal Date" type="date" placeholder="Add text" class="form-control bg-light border-0 " />

                            <Readonly_Input name="contract_period"  value={state.contract_period} field="Contract Period" type="number" placeholder="In Months" class="form-control bg-light border-0 " />

                            <Readonly_Input name="leave_date"  value={state.leave_date} field="Leave Date" type="date" placeholder="Add text" class="form-control bg-light border-0 " />


                        </div>

                    </div>
                </div>
            </form>

           </div>
   </>
 )
}
export default Edit_teacher_comp;