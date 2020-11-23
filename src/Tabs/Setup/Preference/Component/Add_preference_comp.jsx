import React ,{useState}from "react"
import {Link, useHistory} from "react-router-dom"
import Heading from "../../../../Common-To-All/Heading"
import {toast} from "react-toastify"
import Input from "../../Student/Component/Input"
import axios from "axios";

const Add_preference_comp =()=>{
    let history = useHistory();

    const[state ,setState]= useState({
        uname: sessionStorage.getItem("username"),
        preference_role_id:"",
    })
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
            preference_role_id:state.preference_role_id , created_by :state.uname , created_date:newdate, 
            uname:state.uname
        }
        axios.post("http://sandbox.portalwiz.com/php/user_preference/add_preference.php", obj)
        .then( (res) => {console.log(res)
            if(res.data.message === "User Preference Created successfully."){
                toast.success("User Preference Created successfully!")
                history.push("/preference");
            }else{
                alert("User Preference Creation Failed!")
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
                <li className="breadcrumb-item"><Link to="/preference">User Preference</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add User Preferences</li>
            </ol>
        </nav> 

        <Heading name="User Preference" />

        <div className="container">

        <form onSubmit={onSubmit}>

        <div className="row mb-4">        
            <div className="col-12 d-flex justify-content-between pr-md-5">
            <h4>Add User Preference</h4>
                <div>
                    {/* <Link to="/preference" className="btn btn-danger btn_link">Cancel</Link> */}
                    <button type="submit" className="btn btn-primary mx-3 btn_link">Save</button>
                </div>
            </div>
        </div>

        <div className="row ">
            <div className="col-11 col-md-8 mx-auto mx-md-0">
            <Input field="User Preference ID"
                    name="preference_role_id"
                    type="text"
                    placeholder="Add text" class="form-control" 
                    value={state.preference_role_id} onChange={onChange}/>
            </div> 
        </div>
        </form>
        </div>

    </div>
    </>
 )
}
export default Add_preference_comp