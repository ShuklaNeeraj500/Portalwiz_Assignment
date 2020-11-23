import React, {useState ,useEffect} from "react"
import {toast} from "react-toastify"
import {Link} from "react-router-dom"
import {useParams } from "react-router-dom";
import Heading from "../../../../Common-To-All/Heading"
import {Readonly_Input} from "../../Student/Component/Input"
import axios from "axios"

const View_preference_comp =()=>{
let message="";
const { id } = useParams();

    const[state ,setState]= useState({
        uname: sessionStorage.getItem("username"),
        up_id:"",
        preference_role_id:"",    
    })
    useEffect(()=>{
        allRoles();
      },[])
    
      const allRoles = async () =>{
        const obj ={
          uname :sessionStorage.getItem("username"),
          id:id
        }
        axios.post("http://sandbox.portalwiz.com/php/user_preference/select_preference.php", obj)
        .then( (response) => {
            let resData = JSON.parse(response.data.data);
            console.log(resData);
            setState({
                up_id:resData[0].up_id,
                preference_role_id:resData[0].preference_role_id,
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
            uname:sessionStorage.getItem("username"), id:id,
            preference_role_id:state.preference_role_id , updated_by :sessionStorage.getItem("username"), updated_date:newdate, 
        }
        axios.post("http://sandbox.portalwiz.com/php/user_preference/edit_preference.php", obj)
        .then((res) => {
            console.log(res)
            if (res.data.message === "User Preference Updated") {
              allRoles();
              toast.success("User Preference Updated successfully!")
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
                <li className="breadcrumb-item"><Link to="/preference">User Preference</Link></li>
                <li className="breadcrumb-item active" aria-current="page">View User Preferences</li>
            </ol>
        </nav> 

        <Heading name="View User Preference" />
        <div className="container">

<form onSubmit={onSubmit}>
    
    <div className="row mb-4">        
        <div className="col-12 d-flex justify-content-between pr-md-5">
        <h4>Edit User Preference</h4>
            <div>
                {/* <button className="btn btn-danger btn_link">Cancel</button> */}
                {/* <button type="submit" className="btn btn-primary mx-3 btn_link">Save</button> */}
            </div>
        </div>
    </div>

    <div className="row ">
        <div className="col-11 col-md-8 mx-auto mx-md-0">
        <div className="form-group row">
                <label className="col-sm-5 col-form-label">ID</label>
                <div className="col-md-6 col-sm-7">
                <input type="text" readOnly className="form-control bg-light border-0 font-weight-bold" value={state.up_id} />
                </div>
            </div>

            <Readonly_Input field="Level Name"
              
                   type="text" placeholder="Add text" 
                   class="form-control border-0 bg-light" 
                   value={state.preference_role_id} 
                />
            </div> 
        </div>
    </form>
</div>
    </div>
    </>
 )
}
export default View_preference_comp