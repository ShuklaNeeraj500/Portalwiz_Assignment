import React ,{useState}from "react"
import {Link, useHistory} from "react-router-dom"
import Heading from "../../../../Common-To-All/Heading"
import {toast} from "react-toastify"
import Input from "../../Student/Component/Input"
import axios from "axios";


const Add_role_comp =()=>{
    let history = useHistory();

    const[field ,setField]= useState({
        uname: sessionStorage.getItem("username"),
        role_profile:"",
    })
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
            role_profile:field.role_profile , created_by :field.uname , created_date:newdate, 
            uname:field.uname
        }
        axios.post("http://sandbox.portalwiz.com/php/add_role.php", obj)
        .then( (res) => {console.log(res)
            if(res.data.message === "Role Created successfully."){
                toast.success("Role Created successfully!")
                history.push("/role");
            }else{
                alert("Role Creation Failed!")
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
                <li className="breadcrumb-item active"><Link to="/role">Role</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add Roles</li>
            </ol>
        </nav> 

        <Heading name="Add Roles" />
        <div className="container">

            <form onSubmit={onSubmit}>
            
            <div className="row mb-4">        
                <div className="col-12 d-flex justify-content-between pr-md-5">
                <h4>Add Role Profiles</h4>
                    <div>
                    <Link to="/role" className="btn btn-danger btn_link">Cancel</Link>
                        <button type="submit" className="btn btn-primary mx-3 btn_link">Save</button>
                    </div>
                </div>
            </div>

            <div className="row ">
                <div className="col-11 col-md-8 mx-auto mx-md-0">
                <Input field="Level Name"
                    name="role_profile"
                    type="text"
                    placeholder="Add text" class="form-control" 
                    value={field.role_profile} onChange={onChange}/>
                </div> 
            </div>
          </form>
        </div>
    </div>
    </>
    )
}
export default Add_role_comp