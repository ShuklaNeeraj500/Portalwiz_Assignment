import React , {useState, useEffect} from "react"
import {Link , useHistory} from "react-router-dom"
import axios from "axios";
import {toast } from 'react-toastify';
import Input from "../../Student/Component/Input"
import Heading from "../../../../Common-To-All/Heading"

const Add_test_comp = ()=>{

    let history = useHistory();
    const [lev , setLev] = useState([]);

    const[state ,setState]= useState({
        uname: sessionStorage.getItem("username"),
        test_name:"", test_type:"",level_name:"" ,test_desc:""
    })

    useEffect(() => {
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
            uname:state.uname,  created_by:state.uname, created_date:newdate,
            test_name:state.test_name, test_type:state.test_name,
            level_name:state.level_name ,test_desc:state.test_desc,
          }
    // ------------Sending form data stored in "obj" object to the add_student.php file uusing AXIOS-------------

          axios.post("http://sandbox.portalwiz.com/php/test/add_test.php", obj)
                .then( (res) => {console.log(res)
                    if(res.data.message="Test Created successfully."){
                    toast.success("Test Created successfully!")
                        history.push("/test");
                    }else{
                        alert("Test Not created, Please try again!")
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
                    <li className="breadcrumb-item active" aria-current="page">Add Test</li>
                </ol>
             </nav>

            <Heading name="Add Test" />

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
                                    
                                {/* <div class="form-group row">
                                    <label class="col-sm-5 col-form-label">Test ID</label>
                                    <div class="col-sm-7 col-md-6 ">
                                    <input type="text" readonly class="form-control-plaintext" value="<Auto generated>"  />
                                    </div>
                                </div> */}
                                <Input field="Test Name" type="text" placeholder="Enter Name" class="form-control" onChange={onChange} name="test_name" value={state.test_name}/>

                                <Input field="Test Type" type="text" placeholder="Enter test type" class="form-control" onChange={onChange} name="test_type" value={state.test_type}/>

                                <div className="form-group row">
                                    <label className="col-sm-5 col-form-label">Level</label>
                                    <div className="col-sm-7 col-md-6 ">
                                        <select name="level_name" defaultValue={state.level_name}  onChange={onChange} className="form-control custom-select">
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

    export default Add_test_comp;