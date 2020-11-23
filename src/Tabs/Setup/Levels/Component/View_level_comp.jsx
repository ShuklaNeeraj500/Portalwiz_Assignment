import React, {useState ,useEffect} from "react"
import {Link} from "react-router-dom"
import {toast} from "react-toastify"
import {useParams } from "react-router-dom";
import Heading from "../../../../Common-To-All/Heading"
import {Readonly_Input} from "../../Student/Component/Input"
import axios from "axios"

const View_level_comp =()=>{
let message="";
const { id } = useParams();

    const[field ,setField]= useState({
        uname: sessionStorage.getItem("username"),
        level_id:"",
        level_name:"",
        level_desc:"",
        level_status:""    
    })
    useEffect(()=>{
        allLevels();
      },[])
    
      const allLevels = async () =>{
        const obj ={
          uname : sessionStorage.getItem("username"),
          id:id
        }
        axios.post("http://sandbox.portalwiz.com/php/select_level.php", obj)
        .then( (response) => {
            let resData = JSON.parse(response.data.data);
            console.log(resData);
            setField({
                level_id:resData[0].level_id,
                level_name:resData[0].level_name,
                level_desc:resData[0].level_desc,
                level_status:resData[0].level_status  
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
            uname:sessionStorage.getItem("username"),
            level_name:field.level_name , updated_by :sessionStorage.getItem("username"), updated_date:newdate, 
            level_desc:field.level_desc, level_status:field.level_status, id:id
        }

        axios.post("http://sandbox.portalwiz.com/php/edit_level.php", obj)
        .then((res) => {
            console.log(res)
            if (res.data.message === "Level Updated") {
              allLevels();
              toast.success("Level Updated successfully!")
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
                <li className="breadcrumb-item"><Link to="/level">Levels</Link></li>
                <li className="breadcrumb-item active" aria-current="page">View Level</li>
            </ol>
        </nav> 

        <Heading name={"View Level-" +" "+ field.level_name}/>
        
        <div className="container">

        <form onSubmit={onSubmit}>
            
            <div className="row mb-4">        
                <div className="col-12 d-flex justify-content-between pr-md-5">
                <h4>Level Information</h4>
                    <div>
                        {/* <button className="btn btn-danger btn_link">Cancel</button>
                        <button type="submit" className="btn btn-primary mx-3 btn_link">Save</button> */}
                    </div>
                </div>
            </div>

            <div className="row ">
                <div className="col-11 col-md-8 mx-auto mx-md-0">

                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label">Level ID</label>
                        <div className="col-md-6 col-sm-7">
                        {/* {field.level_id} */}
                        <input type="text" readOnly className="form-control bg-light border-0 font-weight-bold" value={field.level_id} />
                        </div>
                    </div>

                    <Readonly_Input field="Level Name" type="text" placeholder="Add text" class="form-control bg-light border-0" value={field.level_name} />
   
                    <div className="form-group row">
                        <label  className=" col-sm-5 col-form-label">Description</label>
                        <div className="col-sm-7 col-md-6">
                        <textarea readOnly type="text" className="form-control border-0 bg-light" rows="2" 
                                  placeholder="--" value={field.level_desc} 
                        />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label">Status</label>
                        <div className="col-sm-7 col-md-6 align-items-center d-flex ">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input bg-light border-0"
                                        type="radio" 
                                        readOnly
                                        id="inlineRadio1"
                                        value="Active"
                                        checked={field.level_status === "Active"}
                                       
                                        />
                                        

                                <label className="form-check-label" htmlFor="inlineRadio1">Active</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input bg-light border-0" 
                                       type="radio"
                                       readOnly
                                       id="inlineRadio2" 
                                       value="Inactive"
                                       checked={field.level_status === "Inactive"}
                                       
                                       />

                                <label className="form-check-label" htmlFor="inlineRadio2">Inactive</label>
                            </div>
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

export default View_level_comp