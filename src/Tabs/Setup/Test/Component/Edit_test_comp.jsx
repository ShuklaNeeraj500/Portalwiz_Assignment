import React, {useState ,useEffect} from "react"
import Input from "../../Student/Component/Input"
import {toast} from "react-toastify"
import {Link, useParams} from "react-router-dom"
import Heading from "../../../../Common-To-All/Heading"
import table_img from "./table.png"
import axios from "axios"


const Edit_test_comp = ()=>{
    let message="";
const { id } = useParams();
const [lev , setLev] = useState([]);

    const[state ,setState]= useState({
        uname: sessionStorage.getItem("username"), test_id:"",
        test_name:"", test_type:"",level_name:"" ,test_desc:""
    })
    useEffect(()=>{
        select_Tests();
        loadLevel();
      },[])

 // Below function will fetch the select test values on which we have clicked for editing 
      const select_Tests = async () =>{
        const obj ={
          uname :sessionStorage.getItem("username"),
          id:id
        }
        axios.post("http://sandbox.portalwiz.com/php/test/select_test.php", obj)
        .then( (response) => {
            let resData = JSON.parse(response.data.data);
            console.log(resData);
            setState({
                test_name:resData[0].test_name, test_desc:resData[0].test_desc,
                test_type:resData[0].test_type, level_name:resData[0].level_name, 
                test_id:resData[0].test_id
            })
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

// this function will set the input values to state variables , and will make all the inputs into controlled inputs

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
// This function will submit the form 
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
            uname:sessionStorage.getItem("username"), id:id ,
            updated_by :sessionStorage.getItem("username"), updated_date:newdate, 
            test_name:state.test_name, test_type:state.test_name,
            level_name:state.level_name ,test_desc:state.test_desc,
        }
        axios.post("http://sandbox.portalwiz.com/php/test/edit_test.php", obj)
        .then((res) => {
            console.log(res)
            if (res.data.message === "Test Updated") {
              select_Tests();
              toast.success("Test Updated successfully!")
            } else {
              message = res.data.message;
              alert(message)
            }
            })
        .catch( (err) => console.log(err) );

    }  
    return (
        <>
          <div className="container-fluid Student_tab">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb Breadcrumb align-items-center">
                    <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                    <li className="breadcrumb-item"><strong>Setup</strong></li>
                    <li className="breadcrumb-item"><Link to="/test">Tests</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Test</li>
                </ol>
             </nav>
             <Heading name={`Edit Test - ${state.test_name}`} />

                <div className="container">

                <form onSubmit={onSubmit} >
                    <div className="row mb-4 ">      
                    <div className="col-12 d-flex justify-content-between pr-md-5">
                        <h4>Test Information</h4>
                            <div>
                                <Link to="/test" className="btn btn-danger btn_link">Cancel</Link>
                                <button type="submit" className="btn btn-primary mx-3 btn_link">Save</button>
                            </div>
                        </div>
                    </div>
                        <div className="row ">
                            <div className="col-11 col-md-7 mx-auto mx-md-0">

                                <div className="form-group row">
                                    <label className="col-sm-5 col-form-label">Test ID</label>
                                    <div className="col-md-6 col-sm-7">
                                    <input type="text" readOnly className="form-control bg-light border-0 font-weight-bold" value={state.test_id} />
                                    </div>
                                </div>   
        
                                <Input field="Test Name" type="text" placeholder="Enter Name" class="form-control" onChange={onChange} name="test_name" value={state.test_name}/>

                                <Input field="Test Type" type="text" placeholder="Enter test type" class="form-control" onChange={onChange} name="test_type" value={state.test_type}/>

                                <div className="form-group row">
                                    <label className="col-sm-5 col-form-label">Level</label>
                                    <div className="col-sm-7 col-md-6 ">
                                        <select name="level_name" value={state.level_name}  onChange={onChange} className="form-control custom-select">
                                        <option selected>Choose</option>
                                            {lev.map((data , i)=>(<option key={i} value={data.level_name}>{data.level_name}</option>)) } 
                                        </select>
                                    </div>
                                </div>

                                <Input field="Description" type="text" placeholder="Add Description" class="form-control" onChange={onChange} name="test_desc" value={state.test_desc}/>
                        </div> 
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}

export default Edit_test_comp;