import React, {useState, useEffect} from "react"
import Input from "../../Student/Component/Input"
import {Link, useParams} from "react-router-dom"
import {toast} from "react-toastify"
import Heading from "../../../../Common-To-All/Heading"
import axios from "axios"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
 
const Edit_teacher_comp =()=>{

let message="";
const [loc , setLoc] =useState([]);
const [batch , setBatch] = useState([]);
const [lev , setLev] = useState([]);
const [usr , setUsr] =useState([]);

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
    
      const TeacherDetail = async () =>{
        const obj ={
          uname :state.uname,
          id:id
        }
        axios.post("http://sandbox.portalwiz.com/php/teachers/select_teacher.php", obj)
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
 //---------------One onChange function is used for setting the state of various types of input fields ------------
    const onChange = (e)=>{
        const input = e.target;
        const name = input.name;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        setState((preValue)=>{
            return{
                ...preValue ,
                [name] :value
            }
        })
        }

// ------------------- -------------------functions for Submiting Country and state- ------------------- -------------------
const selectCountry=(val)=>{
  
    setState((preValue)=>{
        return{
            ...preValue ,
            country :val
        }
    })
}
const selectRegion=(val)=>{
    
    setState((preValue)=>{
        return{
            ...preValue ,
            state :val
        }
    })
}
// ------------------- -----------------handleInputChange function for Submiting the profile-pic------------------      
    const handleInputChange = (e) =>{
        setState({ picture: e.target.files[0] })
    }
//-------------------------- onSubmit function for Submiting the  Forms--------------------------
    const onSubmit =(e) =>{
        e.preventDefault();
/*---------------Using form data to send profile pic-------------------------- */ 
        let profile_pic = new FormData() 
        profile_pic.append('profile_pic', state.picture)

/*---------------Fetching Date in YEAR-MONTH-DATE  format-------------------------- */ 
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        var newdate = year + "-" + month + "-" + day;

/*---------------Creating object to send data through Axios------------------------- */
        const obj = {
          uname:sessionStorage.getItem("username"), id:id, updated_date:newdate,  updated_by :sessionStorage.getItem("username"),
          
          fname: state.fname,    mname: state.mname,    lname: state.lname, 
          city:state.city,      zip:state.zip ,      mobile_no:state.mobile_no ,
          home_no:state.home_no,  email:state.email,      parent_fname:state.parent_fname,
          parent_lname:state.parent_lname,  parent_mobile_no:state.parent_mobile_no,    
          parent_email:state.parent_email,contract_period:state.contract_period,
          parent_mobile_no_2:state.parent_mobile_no_2,  parent_email_2:state.parent_email_2,     
          approved_date:state.approved_date,  leave_date:state.leave_date,   addressline1:state.addressline1,   
          addressline2:state.addressline2,join_date:state.join_date, kvk_number:state.kvk_number,
          contract_renewal_date:state.contract_renewal_date,probation_period:state.probation_period,
     
          active: state.active , photo_consent :state.photo_consent , disclaimer_signed :state.disclaimer_signed,
          
          state:state.state,  country:state.country,  location_name:state.location_name,  batch_name:state.batch_name,
          level_name:state.level_name,  user_name:state.user_name 
        }

        axios.post("http://sandbox.portalwiz.com/php/teachers/edit_teacher.php", obj)
        .then((res) => {
            console.log(res)
            if (res.data.message === "Teacher Updated") {
              TeacherDetail();
              toast.success("Teacher's data updated successfully!")
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
{/*----------------------- Bread crumb ------------------------- */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb Breadcrumb align-items-center">
                    <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                        <li className="breadcrumb-item"><strong>Setup</strong></li>
                        <li className="breadcrumb-item"><Link to="/teacher">Teacher List</Link></li>
                        <li className="breadcrumb-item active">Edit Teacher</li>
                    </ol>
                </nav> 
                <Heading name={"Edit Teacher-"+" "+state.fname} />
{/* ------------------------------------------------- Two Columns for Inputs --------------------------------------- */}
            <form onSubmit={onSubmit}> 
                <div className="container mt-3">

                    <div className="row my-4">
                        <div className = "col-11 d-flex justify-content-end mx-auto">
                            <Link to={"/tch-history-table/"+id } className="btn btn-info btn_link">View History</Link>
                            <button type ="submit" className="btn btn-primary ml-3 btn_link">Save</button>        
                        </div>
                    </div>

                    <div className="row">

                    {/*-----------------------Column-1 for Inputs------------------------- */}
                    <div className="col-11 col-md-6 mx-auto">

                        <h5 className="mb-4">Personal Information</h5>

                            
                            {/* <Input field="Profile Picture" type="file" class="form-control-file" name="picture" onChange={handleInputChange} value={state.picture}/> */}

                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Teacher ID</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <input type="text" readOnly className="form-control bg-light border-0 font-weight-bold" value={state.teacher_id} />
                                </div>
                            </div>
                            
                            <Input field="First Name" type="text" placeholder="Auto Generated" class="form-control" name="fname" onChange={onChange} value={state.fname}/>

                            <Input field="Middle Name" type="text" placeholder="Auto Generated" class="form-control" name="mname" onChange={onChange} value={state.mname}/>

                            <Input field="Last Name" type="text" placeholder="Auto Generated" class="form-control" name="lname" onChange={onChange} value={state.lname}/>

                            <div className="form-group row">
                            <label className="col-sm-5 col-form-label">Address Line 1</label>
                            <div className="col-sm-7 col-md-6 ">
                                <textarea name="addressline1" onChange={onChange} className="form-control" placeholder="Add text" value={state.addressline1}  ></textarea>
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label">Address Line 2</label>
                            <div className="col-sm-7 col-md-6 ">
                                <textarea name="addressline2" onChange={onChange} className="form-control" placeholder="Add text" value={state.addressline2} ></textarea>
                            </div>
                        </div>

                            <Input field="City" type="text" placeholder="Auto Generated" class="form-control" name="city" onChange={onChange} value={state.city}/>

                            <div className="form-group row">
                        <label className="col-sm-5 col-form-label">Country</label>
                            <div className="col-sm-7 col-md-6 ">
                                {/* <select name="state" value={state.state} onChange={onChange} className="custom-select form-control">
                                    <option value="province-1">Province 1</option><option value="province-2">Province 2</option><option value="province-3">Province 3</option>
                                </select> */}

                                <CountryDropdown
                                    class="custom-select form-control"
                                    name="country"
                                    value={state.country}
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
                                country={state.country}
                                value={state.state}
                                onChange={(val) => selectRegion(val)} />
                            </div>
                        </div>

                            <Input field="Zip" type="text" placeholder="Auto Generated" class="form-control" name="zip" onChange={onChange} value={state.zip}/>

                            <Input field="Mobile Number" type="text" placeholder="Auto Generated" class="form-control" name="mobile_no" onChange={onChange} value={state.mobile_no}/>

                            <Input field="Home Phone" type="text" placeholder="Auto Generated" class="form-control" name="home_no" onChange={onChange} value={state.home_no}/>

                            <Input field="Email" type="email" placeholder="Auto Generated" class="form-control" name="email" onChange={onChange} value={state.email}/>

                            <Input field="KVK Number" type="text" placeholder="Auto Generated" class="form-control" name="kvk_number" onChange={onChange} value={state.kvk_number}/>

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

                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Location Name</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <select  name="location_name" value={state.location_name} onChange={onChange}  className="form-control custom-select">
                                    <option selected>Choose</option>
                                    {loc.map((data , i)=>(<option key={i} value={data.name}>{data.name}</option>)) } 
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Batch Name</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <select  name="batch_name" value={state.batch_name} onChange={onChange}  className="form-control custom-select">
                                    <option selected>Choose</option>
                                    {batch.map((data , i)=>(<option key={i} value={data.batch_name}>{data.batch_name}</option>)) } 
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Level Name</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <select  name="level_name" value={state.level_name} onChange={onChange}  className="form-control custom-select">
                                    <option selected>Choose</option>
                                    {lev.map((data , i)=>(<option key={i} value={data.level_name}>{data.level_name}</option>)) } 
                                    </select>
                                </div>
                            </div>

                        <h5 className="mt-5 mb-4">Account Information</h5>

                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">User</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <select  name="user_name" value={state.user_name} onChange={onChange}  className="form-control custom-select">
                                        <option selected>Choose</option>
                                    {usr.map((data , i)=>(<option key={i} value={data.username}>{data.username}</option>)) } 
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Active Account</label>
                                <div className="col-sm-7 col-md-6 pl-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="active" checked={state.active} onChange={onChange} />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Photography Consent Provide?</label>
                                <div className="col-sm-7 col-md-6 pl-4">
                                <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="photo_consent" checked={state.photo_consent} onChange={onChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Disclaimer Signed?</label>
                                <div className="col-sm-7 col-md-6 pl-4">
                                <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="disclaimer_signed" checked={state.disclaimer_signed} onChange={onChange} />
                                    </div>
                                </div>
                            </div>

                            <Input name="join_date" onChange={onChange} field="Join Date" type="date" placeholder="Add text" class="form-control" value={state.join_date}/>

                            <Input name="probation_period" onChange={onChange} value={state.probation_period} field="Probation Period" type="number" placeholder="In Months" class="form-control" />

                            <Input name="contract_renewal_date" onChange={onChange} value={state.contract_renewal_date} field="Contract Renewal Date" type="date" placeholder="Add text" class="form-control" />

                            <Input name="contract_period" onChange={onChange} value={state.contract_period} field="Contract Period" type="number" placeholder="In Months" class="form-control" />

                            <Input name="leave_date" onChange={onChange} value={state.leave_date} field="Leave Date" type="date" placeholder="Add text" class="form-control" />


                        </div>

                    </div>
                </div>
            </form>

           </div>
   </>
 )
}
export default Edit_teacher_comp;