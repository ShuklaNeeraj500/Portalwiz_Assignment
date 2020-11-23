import React, {useState ,useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import {toast} from "react-toastify"
import Heading from "../../../../Common-To-All/Heading"
import {Readonly_Input} from "../../Student/Component/Input"
import axios from "axios"

const View_location_comp =()=>{
    let message="";
const { id } = useParams();

    const[field ,setField]= useState({
        uname: sessionStorage.getItem("username"), location_type:"", name:"", city:"", state:"", country :"", 
        addressline1:"",  addressline2:"", zip:"", phone:"", location_type:"" , manager_name:"", updated_by:"", updated_date:"",
        location_picture:"" ,calender_link:""
    })
    useEffect(()=>{
        loadLocations();
      },[])
    
      const loadLocations = async () =>{
        const obj ={
          uname : field.uname,
          id:id
        }
        axios.post("http://sandbox.portalwiz.com/php/locations/select_location.php", obj)
        .then( (response) => {
            let resData = JSON.parse(response.data.data);
            console.log(resData);
            setField({ 
                location_id:resData[0].location_id,
                name:resData[0].name, city:resData[0].city, state:resData[0].state, country:resData[0].country, 
                addressline1:resData[0].addressline1,  addressline2:resData[0].addressline2,calender_link:resData[0].calender_link ,
                zip:resData[0].zip, phone:resData[0].phone, location_type:resData[0].location_type , 
                manager_name:resData[0].manager_name, updated_by:resData[0].updated_by, updated_date:resData[0].updated_date,
            })
        })
        .catch( (err) => console.log(err) );

      }

    const onSubmit =(e) =>{
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
            uname:sessionStorage.getItem("username"),id:id,
            name:field.name, city:field.city, state:field.state, country :field.country, addressline1:field.addressline1,  
            addressline2:field.addressline2, zip:field.zip, location_type:field.location_type , calender_link:field.calender_link,
            manager_name:field.manager_name, updated_by:field.uname, updated_date:newdate, phone:field.phone,
    
        }

        axios.post("http://sandbox.portalwiz.com/php/locations/edit_location.php", obj)
        .then((res) => {
            console.log(res)
            if (res.data.message === "Location Updated") {
              loadLocations();
              toast.success("Location Updated successfullly!")
            } else {
              message = res.data.message;
              alert(message)
            }
            })
        .catch( (err) => console.log(err) );
    } 

return(
 <>
    <div className="container-fluid">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb Breadcrumb align-items-center">
                <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                <li className="breadcrumb-item"><strong>Setup</strong></li>
                <li className="breadcrumb-item"><Link to="/location">Location List</Link></li>
                <li className="breadcrumb-item active" aria-current="page">View Location</li>
            </ol>
        </nav> 
        <Heading name={"View Location -"+ " "+field.name} />
        
    <div className="container">
        <form onSubmit={onSubmit}>

            <div className="row mb-4">        
                <div className="col-12 col-md-12 d-flex justify-content-between pr-md-5">
                <h4>Location Information</h4>
                    <div>
                        {/* <button className="btn btn-danger btn_link">Cancel</button>
                        <button type="submit" className="btn btn-primary mx-3 btn_link">Save</button> */}
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-11 col-md-6 mx-auto">
                
                    {/* <Input field="Profile Picture" name="location_picture" type="file" onChange={handleInputChange} class="form-control-file" value={field.location_picture}/> */}

                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label">Location ID</label>
                        <div className="col-sm-7 col-md-6">
                        <input type="text" readOnly className="form-control bg-light border-0 font-weight-bold" value={field.location_id} />
                        </div>
                    </div>

                    <Readonly_Input field="Locatoion Name" type="text" placeholder="Add text" class="form-control bg-light border-0 " value={field.name}/>

                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label">Address Line 1</label>
                        <div className="col-sm-7 col-md-6 ">
                            <textarea readOnly className="form-control bg-light border-0 " placeholder="Add text"  value={field.addressline1} ></textarea>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label">Address Line 2</label>
                        <div className="col-sm-7 col-md-6 ">
                        <textarea readOnly className="form-control bg-light border-0 " placeholder="Add text" value={field.addressline2}></textarea>
                        </div>
                    </div>

                    <Readonly_Input field="City" type="text" placeholder="Add text"  class="form-control bg-light border-0 " value={field.city}/>

                     {/* ---Select Input---- */}
                     <Readonly_Input field="Province" type="text" placeholder="--" class="form-control bg-light border-0 " value={field.state} />

                     {/* ---Select Input---- */}
                     <Readonly_Input field="Country" type="text" placeholder="--" class="form-control bg-light border-0 " value={field.country} />

                    <Readonly_Input field="Zip" type="text" placeholder="Add text" name="zip" class="form-control bg-light border-0 " value={field.zip}/>

                    </div>

                    <div className="col-11 col-md-6 mx-auto">


                    <Readonly_Input name="phone" field="Location Contact No." type="text" placeholder="--" class="form-control bg-light border-0 " value={field.phone}  />


                     {/* ---Select Input---- */}
                     <Readonly_Input field="Location Manager" type="text" placeholder="--" class="form-control bg-light border-0 " value={field.manager_name}  />

                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label">Location Type</label>
                            <div className="form-check form-check-inline ml-3">
                                <input className="form-check-input" 
                                type="radio" 
                                readOnly
                                id="inlineRadio1" 
                                value="1"
                                checked={field.location_type === "1"}
                            
                                />
                                <label className="form-check-label" htmlFor="inlineRadio1">Direct</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" 
                                type="radio" 
                                readOnly
                                id="inlineRadio2" 
                                value="0"
                                checked={field.location_type === "0"}
                            
                                />
                                <label className="form-check-label" htmlFor="inlineRadio2">Franchise</label>
                            </div>
                    </div>
                        <Readonly_Input field="Calender Link" type="text" placeholder="Add text" class="form-control bg-light border-0 " name="calender_link" value={field.calender_link} />

                        <div className="form-group row ">
                            <label className="col-sm-5 col-form-label">Batch Calender</label>
                            <div className="col-sm-7 col-md-6 d-flex align-items-center">
                                <a href="#" download >Batch Clander PDF &nbsp;<i className="fa fa-download"></i></a>
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

export default View_location_comp