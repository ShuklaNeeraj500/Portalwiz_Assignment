import React, {useState ,useEffect} from "react"
import Input from "../../Student/Component/Input"
import {Link} from "react-router-dom"
import {useParams } from "react-router-dom";
import Heading from "../../../../Common-To-All/Heading"
import {toast} from "react-toastify"
import axios from "axios"

const Edit_batch_comp =()=>{

let message="";
const [loc , setLoc] =useState([]);
const [lev , setLev] = useState([]);

const { id } = useParams();

    const[state ,setState]= useState({
        uname:sessionStorage.getItem("username"), 
        batch_name:"", location_name:"", level_name:"", day_of_week:"",
        time_of_day:"", calendar_link:"", remarks:"", batch_id:"",
        batch_calendar_file:"",  
    })
    
    useEffect(()=>{
        loadBatch();
        loadLocation();
        loadLevel();
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
// ------------------------------------------------------
      const loadBatch = async () =>{
        const obj ={
          uname : state.uname,
          id:id
        }
        axios.post("http://sandbox.portalwiz.com/php/batches/select_batch.php", obj)
        .then( (response) => {
            let resData = JSON.parse(response.data.data);
            console.log(resData);
            setState({
                batch_name:resData[0].batch_name, location_name:resData[0].location_name, 
                level_name:resData[0].level_name, day_of_week:resData[0].day_of_week, batch_id:resData[0].batch_id,
                time_of_day:resData[0].time_of_day, calendar_link:resData[0].calendar_link, 
                remarks:resData[0].remarks, batch_calendar_file:resData[0].batch_calendar_file, 
            })
        })
        .catch( (err) => console.log(err) );

      }

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

    const onSubmit =(e) =>{
     
        e.preventDefault();

/*---------------Fetching Date in YEAR-MONTH-DATE  format-------------------------- */ 
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        var newdate = year + "-" + month + "-" + day;

/*---------------Creating object to send data through Axios------------------------- */
        const obj = {
            uname:sessionStorage.getItem("username"), updated_by:sessionStorage.getItem("username"), 
            updated_date:newdate, id:id,
            batch_name:state.batch_name, location_name:state.location_name, 
            level_name:state.level_name, day_of_week:state.day_of_week, 
            time_of_day:state.time_of_day, calendar_link:state.calendar_link, 
            remarks:state.remarks, batch_calendar_file:state.batch_calendar_file, 
        }

        axios.post("http://sandbox.portalwiz.com/php/batches/edit_batch.php", obj)
        .then((res) => {
            console.log(res)
            if (res.data.message === "Batch Updated") {
              toast.success("Batch Updated successfully!")
              loadBatch();
         
            } else {
              message = res.data.message;
              alert(message)
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
                <li className="breadcrumb-item active" aria-current="page">Edit Batch</li>
            </ol>
        </nav> 

     
        <Heading name={"Edit Batch -"+ " "+ state.batch_name }/>
        
        <div className="container">

        <form onSubmit={onSubmit}>

            <div className="row mb-4">    
            {/*-----------------Header------------------------  */}
                <div className="col-12 d-flex justify-content-between pr-md-5">
                <h4>Batch Information</h4>
                    <div>
                        <Link to="/batch" className="btn btn-danger btn_link">Cancel</Link>
                        <button type="submit" className="btn btn-primary mx-3 btn_link">Save</button>
                    </div>
                </div>
            </div>

            <div className="row ">
            {/* -----------------First Column----------------- */}
                <div className="col-11 col-md-6 mx-auto">

                    <div class="form-group row">
                        <label class="col-sm-5 col-form-label">Batch ID</label>
                        <div class="col-sm-7 col-md-6 ">
                        <input type="text" readOnly className="form-control bg-light border-0 font-weight-bold" value={state.batch_id} />
                        </div>
                    </div>

                <Input name="batch_name" onChange={onChange} value={state.batch_name} field="Batch Name" type="text" placeholder="Add Name" class="form-control"/>
               
                <div className="form-group row">
                    <label className="col-sm-5 col-form-label">Location</label>
                    <div className="col-sm-7 col-md-6 ">
                        <select name="location_name" value={state.location_name}  onChange={onChange} className="form-control custom-select">
                        <option selected>Choose</option>
                        {loc.map((data , i)=>(<option key={i} value={data.name}>{data.name}</option>)) } 
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-5 col-form-label">Level</label>
                    <div className="col-sm-7 col-md-6 ">
                        <select name="level_name" value={state.level_name} onChange={onChange} className="form-control custom-select">
                        <option selected>Choose</option>
                        {lev.map((data , i)=>(<option key={i} value={data.level_name}>{data.level_name}</option>)) } 
                        </select>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-sm-5 col-form-label">Day of Week</label>
                    <div class="col-md-6 col-sm-7">
                        <select name="day_of_week"  value={state.day_of_week} onChange={onChange}  class="form-control custom-select">
                        <option>Choose</option><option value="Monday">Monday</option><option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option><option value="Thursday">Thursday</option><option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option><option value="Sunday">Sunday</option>
                        </select>
                    </div>
                </div>
                <Input name="time_of_day" onChange={onChange} value={state.time_of_day} field="Time of day" type="time" class="form-control"/>

                </div>
            {/* ------------Second Column----------------- */}
                <div className="col-11 col-md-6 mx-auto">

                    <div class="form-group row">
                        <label  class=" col-sm-5 col-form-label">Remarks</label>
                        <div class="col-sm-7 col-md-6">
                        <textarea name="remarks" onChange={onChange} value={state.remarks} type="text" class="form-control" rows="2" placeholder="Add remarks here..." />
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

export default Edit_batch_comp