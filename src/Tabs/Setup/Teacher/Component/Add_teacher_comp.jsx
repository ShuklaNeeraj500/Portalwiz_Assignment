import React , {useState , useEffect} from "react"
import {Link , useHistory} from "react-router-dom"
import {toast} from "react-toastify"
import Input from "../../Student/Component/Input"
import Heading from "../../../../Common-To-All/Heading"
import axios from "axios";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
 
const Add_teacher_comp =()=>{

    let history = useHistory();
    const [loc , setLoc] =useState([]);
    const [batch , setBatch] = useState([]);
    const [lev , setLev] = useState([]);
    const [usr , setUsr] =useState([]);

    const[state ,setState]= useState({
            uname:sessionStorage.getItem("username"),
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
            picture:"",

    })

    useEffect(() => {
        loadLocation();
        loadBatch();
        loadLevel();
        loadUser();
        }, []);


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
 //---------------One onChange function is used for setting the state of various types of input fields ---------------     

    const onChange = (e) => {
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
// ------------------- -----------------handleInputChange function for Submiting the profile-pic------------------- -------------------
    const handleInputChange = (e) =>{
        setState({ picture: e.target.files[0] })
        
    }
//-------------------------- onSubmit function for Submiting the  Forms---------------------------

   const onSubmit = (e) => {
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

        // ------------Storing form data in "obj" object fetched from various input fields-------------
        const obj = {
            fname: state.fname,    mname: state.mname,    lname: state.lname, uname:sessionStorage.getItem("username"),
            created_by:sessionStorage.getItem("username"),
            city:state.city,      zip:state.zip ,      mobile_no:state.mobile_no ,
            home_no:state.home_no,  email:state.email,      parent_fname:state.parent_fname,
            parent_lname:state.parent_lname,  parent_mobile_no:state.parent_mobile_no,    
            parent_email:state.parent_email, parent_mobile_no_2:state.parent_mobile_no_2,  
            parent_email_2:state.parent_email_2, created_date:newdate, approved_date:state.approved_date,  
            registration_number:state.registration_number,
            addressline1:state.addressline1,   addressline2:state.addressline2,kvk_number:state.kvk_number,
            contract_period:state.contract_period, contract_renewal_date:state.contract_renewal_date, 
            probation_period:state.probation_period, join_date:state.join_date ,leave_date:state.leave_date,
            
            active: state.active , photo_consent :state.photo_consent , disclaimer_signed :state.disclaimer_signed,
            
            state:state.state,  country:state.country,  location_name:state.location_name,  batch_name:state.batch_name,
            level_name:state.level_name,  user_name:state.user_name 

          }
        // ------------Sending form data stored in "obj" object to the add_student.php file uusing AXIOS-------------

          axios.post("http://sandbox.portalwiz.com/php/teachers/add_teacher.php", obj)
                .then( (res) => { console.log(res)
                    if(res.data.message === "Teacher Added" ){
                        toast.success("Teacher Added successfully!")
                        history.push("/teacher");
                    }else{
                        alert("Teacher not created, pLease try again!")
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
                        <li className="breadcrumb-item active">Add Teacher</li>
                    </ol>
                </nav> 
                <Heading name="Add Teacher" />
{/* ------------------------------------------------- Two Columns for Inputs --------------------------------------- */}
            <form onSubmit={onSubmit}>

                <div className="container mt-3">

                    <div className="row my-4">
                        <div className = "col-11 d-flex justify-content-end mx-auto">
                            <button type ="submit" className="btn btn-primary btn_link">Save</button>
                        </div>
                    </div>

                    <div className="row">

                    {/*-----------------------Column-1 for Inputs------------------------- */}
                    <div className="col-11 col-md-6 mx-auto">

                        <h5 className="mb-4">Personal Information</h5>

                            
                            {/* <Input field="Profile Picture" type="file" class="form-control-file" onChange={handleInputChange} name="picture" /> */}

                            {/* <div class="form-group row">
                                <label class="col-sm-5 col-form-label">Teacher ID</label>
                                <div class="col-sm-7 col-md-6 ">
                                <input type="text" readonly class="form-control-plaintext" value="<Auto generated>" />
                                </div>
                            </div> */}
                            
                            <Input name="fname" onChange={onChange} field="First Name" type="text" placeholder="Add text" class="form-control" value={state.fname}/>

                            <Input name="mname" onChange={onChange} field="Middle Name" type="text" placeholder="Add text" class="form-control" value={state.mname}/>

                            <Input name="lname" onChange={onChange} field="Last Name" type="text" placeholder="Add text" class="form-control" value={state.lname}/>

                            <div class="form-group row">
                                <label class="col-sm-5 col-form-label">Address Line 1</label>
                                <div class="col-sm-7 col-md-6 ">
                                    <textarea name="addressline1" onChange={onChange} value={state.addressline1} class="form-control" placeholder="Add text" ></textarea>
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label class="col-sm-5 col-form-label">Address Line 2</label>
                                <div class="col-sm-7 col-md-6 ">
                                <textarea name="addressline2" onChange={onChange} value={state.addressline2} class="form-control" placeholder="Add text" ></textarea>
                                </div>
                            </div>

                            <Input name="city" onChange={onChange} field="City" type="text" placeholder="Add text" class="form-control" value={state.city}/>

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

                            <Input name="zip" onChange={onChange} field="Zip" type="text" placeholder="Add text" class="form-control" value={state.zip}/>

                            <Input name="mobile_no" onChange={onChange} field="Mobile Number" type="text" placeholder="Add text" class="form-control" value={state.mobile_no}/>

                            <Input name="home_no" onChange={onChange} field="Home Phone" type="text" placeholder="Add text" class="form-control" value={state.home_no}/>

                            <Input name="email" onChange={onChange} field="Email" type="email" placeholder="Add text" class="form-control" value={state.email}/>

                            <Input name="kvk_number" onChange={onChange} field="KVK Number" type="text" placeholder="Add text" class="form-control" value={state.kvk_number}/>

                           <div class="form-group row">
                                <label class="col-sm-5 col-form-label">Contract Document</label>
                                <div class="col-sm-7 col-md-6 d-flex align-items-center">
                                   <a href="#" download >View Contract Document &nbsp;<i class="fa fa-download"></i></a>
                                </div>
                            </div>

                    </div>

                    {/*-----------------------Column-2 for Inputs------------------------- */}
                        <div className="col-11 col-md-6 mx-auto">

                        <h5 className="mb-4">Batch Information</h5>

                            <div class="form-group row">
                                <label class="col-sm-5 col-form-label">Location Name</label>
                                <div class="col-sm-7 col-md-6 ">
                                    <select  name="location_name" defaultValue={state.location_name} onChange={onChange} class="form-control custom-select">
                                    <option selected>Choose</option>
                                    {loc.map((data , i)=>(<option key={i} value={data.name}>{data.name}</option>)) } 
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-5 col-form-label">Batch Name</label>
                                <div class="col-sm-7 col-md-6 ">
                                    <select  name="batch_name" defaultValue={state.batch_name} onChange={onChange} class="form-control custom-select">
                                    <option selected>Choose</option>
                                    {batch.map((data , i)=>(<option key={i} value={data.batch_name}>{data.batch_name}</option>)) } 
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-5 col-form-label">Level Name</label>
                                <div class="col-sm-7 col-md-6 ">
                                    <select  name="level_name" defaultValue={state.level_name} onChange={onChange} class="form-control custom-select">
                                    <option selected>Choose</option>
                                    {lev.map((data , i)=>(<option key={i} value={data.level_name}>{data.level_name}</option>)) } 
                                    </select>
                                </div>
                            </div>

                        <h5 className="mt-5 mb-4">Account Information</h5>

                            <div class="form-group row">
                                <label class="col-sm-5 col-form-label">User</label>
                                <div class="col-sm-7 col-md-6 ">
                                    <select  name="user_name" value={state.user_name} onChange={onChange} class="form-control custom-select">
                                    <option selected>Choose</option>
                                    {usr.map((data , i)=>(<option key={i} value={data.username}>{data.username}</option>)) } 
                                    </select>
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label class="col-sm-5 col-form-label">Active Account</label>
                                <div class="col-sm-7 col-md-6 pl-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="active" checked={state.active} onChange={onChange} />
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label class="col-sm-5 col-form-label">Photography Consent Provide?</label>
                                <div class="col-sm-7 col-md-6 pl-4">
                                <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="photo_consent" checked={state.photo_consent} onChange={onChange} />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-5 col-form-label">Disclaimer Signed?</label>
                                <div class="col-sm-7 col-md-6 pl-4">
                                <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="disclaimer_signed" checked={state.disclaimer_signed} onChange={onChange} />
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
export default Add_teacher_comp;