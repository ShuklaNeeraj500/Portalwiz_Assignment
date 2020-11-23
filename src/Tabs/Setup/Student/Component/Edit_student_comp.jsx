import React, {useState, useEffect} from "react"
import Input from "./Input"
import {Link, useParams} from "react-router-dom"
import {toast} from "react-toastify"
import Heading from "../../../../Common-To-All/Heading"
import axios from "axios"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


const  Edit_student_comp = ()=>{
let message="";
const [loc , setLoc] =useState([]);
const [batch , setBatch] = useState([]);
const [lev , setLev] = useState([]);
const [usr , setUsr] =useState([]);

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
        loadLocation();
        loadBatch();
        loadLevel();
        loadUser();
      },[])

// -----------This function will Fetch all the Existing Locations--------------------
const loadLocation = async () => {
    const obj = {
      uname: sessionStorage.getItem("username"),
    };

    await axios.post("http://sandbox.portalwiz.com/php/locations/locations.php", obj)
    .then( (response) => {
      let a = JSON.parse(response.data.data);
      console.log(a);
      setLoc(a);
    })
    .catch( (err) => console.log(err) );
    }

// -----------This function will Fetch all the Existing Batch--------------------
const loadBatch = async () => {
    const obj = {
      uname: sessionStorage.getItem("username"),
    };

    await axios.post("http://sandbox.portalwiz.com/php/batches/batches.php", obj)
    .then( (response) => {
      let a = JSON.parse(response.data.data);
      console.log(a);
      setBatch(a);
    })
    .catch( (err) => console.log(err) );
    }


// -----------This function will Fetch all the Existing Levels--------------------
const loadLevel = async () => {
    const obj = {
      uname: sessionStorage.getItem("username"),
    };

    await axios.post("http://sandbox.portalwiz.com/php/levels.php", obj)
    .then( (response) => {
      let a = JSON.parse(response.data.data);
      console.log(a);
      setLev(a);
    })
    .catch( (err) => console.log(err) );
    }

// -----------------------This function will Fetch all the Existing Users-------------------------------------
const loadUser = async () =>{
    const obj = {
        uname: sessionStorage.getItem("username"),
      };
  
    axios.post("http://sandbox.portalwiz.com/php/users.php", obj)
    .then( (response) => {
      console.log(response)
      if(response.data.message !== "No Data"){
        let a = JSON.parse(response.data.data);
        console.log(a);
        setUsr(a);
      }else{
        setUsr([]);
      }
        
    })
    .catch( (err) => console.log(err) );
  }

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
 //---------------One onChange function is used for setting the state of various types of input fields ---------------     
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

// ------------------- -------------------functions for Submiting Country and state- ------------------- -------------------
const selectCountry=(val)=>{
  
    setField((preValue)=>{
        return{
            ...preValue ,
            country :val
        }
    })
}
const selectRegion=(val)=>{
    
    setField((preValue)=>{
        return{
            ...preValue ,
            state :val
        }
    })
}
// ------------------- -----------------handleInputChange function for Submiting the profile-pic------------------- -------------------
    const handleInputChange = (e) =>{
        setField({ picture: e.target.files[0] })
    }
//-------------------------- onSubmit function for Submiting the  Forms---------------------------
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
                        <li className="breadcrumb-item active">Edit Student</li>
                    </ol>
                </nav> 
                <Heading name={"Edit Student-"+" "+ field.fname} /> 
{/* -------------------------------------------------Two Columns for Inputs--------------------------------------- */}
            <form onSubmit={onSubmit}>
                <div className="container mt-3">

                    <div className="row my-4">
                        <div className = "col-11 d-flex justify-content-end mx-auto">
                            <Link to={"/stu-history-table/"+id } className="btn btn-info btn_link">View History</Link>
                            <button type ="submit" className="btn btn-primary ml-3 btn_link">Save</button>        
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
                        
                        <Input name="fname" onChange={onChange} field="First Name" type="text" placeholder="Add text" class="form-control" value={field.fname} />
                    
                        <Input name="mname" onChange={onChange} field="Middle Name" type="text" placeholder="Add text" class="form-control" value={field.mname} />
                        
                        <Input name="lname" onChange={onChange} field="Last Name" type="text" placeholder="Add text" class="form-control" value={field.lname} />

                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label">Address Line 1</label>
                            <div className="col-sm-7 col-md-6 ">
                                <textarea name="addressline1" onChange={onChange} className="form-control" placeholder="Add text" value={field.addressline1}  ></textarea>
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label">Address Line 2</label>
                            <div className="col-sm-7 col-md-6 ">
                                <textarea name="addressline2" onChange={onChange} className="form-control" placeholder="Add text" value={field.addressline2} ></textarea>
                            </div>
                        </div>

                        <Input name="city" onChange={onChange} field="City" type="text" placeholder="Add text" class="form-control" value={field.city} />

                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label">Country</label>
                            <div className="col-sm-7 col-md-6 ">
                                {/* <select name="state" value={state.state} onChange={onChange} className="custom-select form-control">
                                    <option value="province-1">Province 1</option><option value="province-2">Province 2</option><option value="province-3">Province 3</option>
                                </select> */}

                                <CountryDropdown
                                    class="custom-select form-control"
                                    name="country"
                                    value={field.country}
                                    onChange={(val) => selectCountry(val)}/>
                            </div>
                        </div>
                        

                        <div className="form-group row">
                        <label className="col-sm-5 col-form-label">Province</label>
                            <div className="col-sm-7 col-md-6 ">
                                {/* <select name="country" value={state.country} onChange={onChange} className="form-control custom-select">
                                    <option value="1">Country 1</option><option value="country-2">Country 2</option><option value="country-3">Country 3</option>
                                </select> */}

                                <RegionDropdown
                                class="custom-select form-control"
                                name="state"
                                country={field.country}
                                value={field.state}
                                onChange={(val) => selectRegion(val)} />
                            </div>
                        </div>

                        
                        <Input name="zip" onChange={onChange} field="Zip" type="text" placeholder="Add text" class="form-control" value={field.zip} />
                        
                        <Input name="mobile_no" onChange={onChange} field="Mobile Number" type="text" placeholder="Add text" class="form-control" value={field.mobile_no} />

                        <Input name="home_no" onChange={onChange} field="Home Phone" type="text" placeholder="Add text" class="form-control" value={field.home_no} />

                        <Input name="email" onChange={onChange} field="Email" type="email" placeholder="Add text" class="form-control" value={field.email} />

                    <h5 className="mt-5 mb-4">Parent Information</h5>

                        <Input name="parent_fname" onChange={onChange} field="Parent First Name" type="text" placeholder="Add text" class="form-control" value={field.parent_fname} />
                        
                        <Input name="parent_lname" onChange={onChange} field="Parent Last Name" type="text" placeholder="Add text" class="form-control" value={field.parent_lname} />
                    
                        <Input name="parent_mobile_no" onChange={onChange} field="Parent Mobile Number" type="text" placeholder="Add text" class="form-control" value={field.parent_mobile_no} />
                        
                        <Input name="parent_email" onChange={onChange} field="Parent Email" type="email" placeholder="Add text" class="form-control" value={field.parent_email} />

                        <Input name="parent_mobile_no_2" onChange={onChange} field="Parent Mobile Number 2" type="text" placeholder="Add text" class="form-control" value={field.parent_mobile_no_2} />
                        
                        <Input name="parent_email_2" onChange={onChange} field="Parent Email 2" type="email" placeholder="Add text" class="form-control" value={field.parent_email_2} />
 
                    </div>
                        {/*-----------------------Column-2 for Inputs------------------------- */}
                        <div className="col-11 col-md-6 mx-auto">

                        <h5 className="mb-4">Batch Information</h5>

                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Location</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <select name="location_name" value={field.location_name}  onChange={onChange} className="form-control custom-select">
                                    <option selected>Choose</option>
                                    {loc.map((data , i)=>(<option key={i} value={data.name}>{data.name}</option>)) } 
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Batch</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <select name="batch_name" value={field.batch_name}  onChange={onChange} className="form-control custom-select">
                                    <option selected>Choose</option>
                                    {batch.map((data , i)=>(<option key={i} value={data.batch_name}>{data.batch_name}</option>)) } 
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Level</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <select name="level_name" value={field.level_name} onChange={onChange} className="form-control custom-select">
                                    <option selected>Choose</option>
                                    {lev.map((data , i)=>(<option key={i} value={data.level_name}>{data.level_name}</option>)) } 
                                    </select>
                                </div>
                            </div>

                        <h5 className="mt-5 mb-4">Account Information</h5>

                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">User</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <select name="user_name"  value={field.user_name} onChange={onChange} className="form-control custom-select">
                                    <option selected>Choose</option>
                                    {usr.map((data , i)=>(<option key={i} value={data.username}>{data.username}</option>)) } 
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Active Account</label>
                                <div className="col-sm-7 col-md-6 pl-4">
                                    <div className="form-check">
                                        <input className="form-check-input" name="active" type="checkbox" checked={field.active}  onChange={onChange}  />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Photography Consent Provide?</label>
                                <div className="col-sm-7 col-md-6 pl-4">
                                <div className="form-check">
                                        <input className="form-check-input" name="photo_consent" type="checkbox" checked={field.photo_consent} onChange={onChange}   />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Disclaimer Signed?</label>
                                <div className="col-sm-7 col-md-6 pl-4">
                                <div className="form-check">
                                        <input className="form-check-input" name="disclaimer_signed" type="checkbox" checked={field.disclaimer_signed} onChange={onChange} />
                                    </div>
                                </div>
                            </div>

                            <Input name="join_date" onChange={onChange} field="Join Date" type="date" placeholder="Add text" class="form-control" value={field.join_date} />

                            <Input name="leave_date" onChange={onChange} field="Leave Date" type="date" placeholder="Add text" class="form-control" value={field.leave_date} />

                        </div>

                    </div>
                </div>
            </form>
        </div>
    
    </>
    )
 }

export default Edit_student_comp