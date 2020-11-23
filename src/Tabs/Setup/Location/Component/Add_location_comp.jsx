import React , {useState , useEffect} from "react"
import {Link, useHistory} from "react-router-dom"
import Input from "../../Student/Component/Input"
import Heading from "../../../../Common-To-All/Heading"
import {toast} from "react-toastify"
import axios from "axios";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


const Add_location_comp =()=>{

    let history = useHistory();
    const [usr , setUsr] =useState([]);
    const[field ,setField]= useState({
        uname: sessionStorage.getItem("username"),
        name:"", city:"", state:"", country :"", addressline1:"",  addressline2:"",calender_link:"",
        zip:"", phone:"", location_type:"" , manager_name:"", created_by:"", created_date:"",
        location_picture:null
    })

    useEffect(() => {
        loadUser();
        }, []);

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
//   --------------------------------------OnChange function for all Inputs-------------------------------
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
// ------------------- -----------------handleInputChange function for Submiting the profile-pic------------------- ----------

    const handleInputChange = (e) =>{
        setField({ location_picture: e.target.files[0] })
        
    }
//-------------------------- onSubmit function for Submiting the  Forms---------------------------

   const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData() 
        data.append('image', field.location_picture)

/*---------------Fetching Date in YEAR-MONTH-DATE  format-------------------------- */ 
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        var newdate = year + "-" + month + "-" + day;

/*---------------Creating object to send data through Axios------------------------- */
        const obj = {
            uname:field.uname,
            name:field.name, city:field.city, state:field.state, country :field.country, addressline1:field.addressline1,  
            addressline2:field.addressline2, zip:field.zip, phone:field.phone, location_type:field.location_type , 
            manager_name:field.manager_name, created_by:field.uname, created_date:newdate, calender_link:field.calender_link 
        }
        axios.post("http://sandbox.portalwiz.com/php/locations/add_location.php", obj)
        .then( (res) => {console.log(res) 
            if(res.data.message === "Location Created successfully."){
                toast.success("Location Created succesfully!")
                history.push("/location");
            }else{
                alert("Location Creation Failed!")
            }
        })
        .catch( (err) => console.log(err) );
        
    } 

return(
 <>
    <div className="container-fluid ">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb Breadcrumb align-items-center">
                <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                <li className="breadcrumb-item"><strong>Setup</strong></li>
                <li className="breadcrumb-item"><Link to="/location">Location List</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add Location</li>
            </ol>
        </nav> 

    <Heading name="Add Location" />
        
        <div className="container">

        <form onSubmit={onSubmit}>

            <div className="row mb-4">        
                <div className="col-12 d-flex justify-content-between pr-md-5">
                <h4>Location Information</h4>
                    <div>
                        <Link to="/location" className="btn btn-danger btn_link">Cancel</Link>
                        <button type="submit" className="btn btn-primary mx-md-3 mx-3 btn_link">Save</button>
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-11 col-md-6 mx-auto">
                    {/* <Input field="Profile Picture" name="location_picture" type="file" onChange={handleInputChange} class="form-control-file" value={field.location_picture}/> */}

                        {/* <div class="form-group row">
                            <label class="col-sm-5 col-form-label">Location ID</label>
                            <div class="col-sm-7 col-md-6 ">
                            <input type="text" readonly class="form-control-plaintext" value="<Auto generated>"  />
                            </div>
                        </div> */}

                        <Input field="Locatoion Name" type="text" placeholder="Add text" name="name" class="form-control" value={field.level_name} onChange={onChange}/>

                        <div class="form-group row">
                            <label class="col-sm-5 col-form-label">Address Line 1</label>
                            <div class="col-sm-7 col-md-6 ">
                                <textarea class="form-control" placeholder="Add text" name="addressline1" value={field.addressline1} onChange={onChange} ></textarea>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-5 col-form-label">Address Line 2</label>
                            <div class="col-sm-7 col-md-6 ">
                            <textarea class="form-control" placeholder="Add text" name="addressline2" value={field.addressline2} onChange={onChange}></textarea>
                            </div>
                        </div>

                        <Input field="City" type="text" placeholder="Add text" name="city" class="form-control" value={field.city} onChange={onChange}/>
                        
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
                        <Input field="Zip" type="text" placeholder="Add text" name="zip" class="form-control" value={field.zip} onChange={onChange}/>

                </div>

                <div className="col-11 col-md-6 mx-auto">

                        
                        <Input name="phone" onChange={onChange} field="Location Contact No." type="text" placeholder="Add Number" class="form-control" value={field.phone} />
                        
                        <div class="form-group row">
                            <label class="col-sm-5 col-form-label">Location Manager</label>
                            <div class="col-sm-7 col-md-6 ">
                                <select name="manager_name" value={field.manager_name} onChange={onChange}  class="custom-select form-control">
                                <option selected>Choose</option>
                                    {usr.map((data , i)=>(<option key={i} value={data.username}>{data.username}</option>)) } 
                                    </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label">Location Type</label>
                                <div className="form-check form-check-inline ml-3">
                                    <input className="form-check-input" 
                                    type="radio" 
                                    name="location_type"  
                                    id="inlineRadio1" 
                                    value="Direct"
                                    checked={field.location_type === "Direct"}
                                    onChange={onChange}
                                    />
                                    <label className="form-check-label" for="inlineRadio1">Direct</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" 
                                    type="radio" 
                                    name="location_type"  
                                    id="inlineRadio2" 
                                    value="Franchise"
                                    checked={field.location_type === "Franchise"}
                                    onChange={onChange}
                                    />
                                    <label className="form-check-label" for="inlineRadio2">Franchise</label>
                                </div>
                        </div>
                            <Input field="Calender Link" type="text" placeholder="Add Link" class="form-control" value={field.calender_link}  name="calender_link" onChange={onChange} />

                            <div class="form-group row ">
                                <label class="col-sm-5 col-form-label">Batch Calender</label>
                                <div class="col-sm-7 col-md-6 d-flex align-items-center">
                                    <a href="#" download >Batch Calendar PDF &nbsp;<i class="fa fa-download"></i></a>
                                </div>
                            </div>
       
                </div>
                
            </div>
            </form>
        </div>
        
    </div> 
 </>
)
}

export default Add_location_comp