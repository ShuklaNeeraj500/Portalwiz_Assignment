import React , {useState, useEffect} from "react"
import {Link , useHistory} from "react-router-dom"
import axios from "axios";
import {toast } from 'react-toastify';
import Input from "../../Student/Component/Input"
import Heading from "../../../../Common-To-All/Heading"

const Add_batch_comp =()=>{
    let history = useHistory();

    const [loc , setLoc] =useState([]);
    const [lev , setLev] = useState([]);

    const[state ,setState]= useState({
            uname:sessionStorage.getItem("username"), 
            batch_name:"", location_name:"", level_name:"", day_of_week:"",
            time_of_day:"", calendar_link:"", remarks:"",
            batch_calendar_file:"",
    })

    useEffect(() => {
        loadLocation();
        loadLevel();
        }, []);
    
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

//-------------------------- onSubmit function for Submiting the  Forms---------------------------

   const onSubmit = (e) => {
        e.preventDefault();

        /*---------------Fetching Date in YEAR-MONTH-DATE  format-------------------------- */ 
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        var newdate = year + "-" + month + "-" + day;

        // ------------Storing form data in "obj" object fetched from various input fields-------------
        const obj = {
            uname:state.uname, 
            batch_name:state.batch_name, location_name:state.location_name, level_name:state.level_name, 
            day_of_week:state.day_of_week, time_of_day:state.time_of_day, calendar_link:state.calendar_link, 
            remarks:state.remarks, batch_calendar_file:state.batch_calendar_file,
            created_by:state.uname, created_date:newdate

          }
        // ------------Sending form data stored in "obj" object to the add_student.php file uusing AXIOS-------------

          axios.post("http://sandbox.portalwiz.com/php/batches/add_batch.php", obj)
                .then( (res) => {console.log(res)
                    if(res.data.message="Batch Created successfully"){
                    toast.success("Batch Created successfully !")
                        history.push("/batch");
                    }else{
                        alert("Batch Not created, Please try again!")
                    }
                })
                .catch( (err) => console.log(err) );
                
                
      }
return(
    <>
    <div className="container-fluid  ">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb Breadcrumb align-items-center">
                <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                <li className="breadcrumb-item"><strong>Setup</strong></li>
                <li className="breadcrumb-item"><Link to="/batch">Batch List</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add Batch</li>
            </ol>
        </nav> 

       <Heading name="Add Batch" />
        
        <div className="container">

        <form onSubmit={onSubmit} id="myform">
            <div className="row mb-4">        
                <div className="col-12 d-flex justify-content-between pr-md-5">
                <h4>Batch Information</h4>
                    <div>
                        <Link to="/batch" className="btn btn-danger btn_link">Cancel</Link>
                        <button type="submit" className="btn btn-primary mx-3 btn_link">Save</button>
                    </div>
                </div>
            </div>

            <div className="row ">
                <div className="col-11 col-md-7 mx-auto mx-md-0">

                    <Input name="batch_name" onChange={onChange} value={state.batch_name} field="Batch Name" type="text" placeholder="Add Name" class="form-control"/>
               
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label">Location</label>
                        <div className="col-sm-7 col-md-6 ">
                            <select name="location_name" defaultValue={state.location_name}  onChange={onChange} className="form-control custom-select">
                            <option selected>Choose</option>
                            {loc.map((data , i)=>(<option key={i} value={data.name}>{data.name}</option>)) } 
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                                <label className="col-sm-5 col-form-label">Level</label>
                                <div className="col-sm-7 col-md-6 ">
                                    <select name="level_name" defaultValue={state.level_name}  onChange={onChange} className="form-control custom-select">
                                    <option selected>Choose</option>
                                    {lev.map((data , i)=>(<option key={i} value={data.level_name}>{data.level_name}</option>)) } 
                                    </select>
                                </div>
                            </div>

                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label">Day of Week</label>
                        <div className="col-md-6 col-sm-7">
                            <select name="day_of_week"  value={state.day_of_week} onChange={onChange}  className="form-control custom-select">
                            <option>Choose</option><option value="Monday">Monday</option><option value="Tuesday">Tuesday</option><option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option><option value="Friday">Friday</option><option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                        </div>
                    </div>
                    <Input name="time_of_day" onChange={onChange} value={state.time_of_day} field="Time of day" type="time" class="form-control"/>

                    <div className="form-group row">
                        <label  className=" col-sm-5 col-form-label">Remarks</label>
                        <div className="col-sm-7 col-md-6">
                        <textarea name="remarks" onChange={onChange} value={state.remarks} type="text" className="form-control" rows="2" placeholder="Add remarks here..." />
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

export default Add_batch_comp