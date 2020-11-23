import React ,{useState}from "react"
import {Link, useHistory} from "react-router-dom"
import Heading from "../../../Common-To-All/Heading"
import {toast} from "react-toastify"
import axios from "axios";


const Compose_comp =()=>{

    let history = useHistory();

    const[state ,setState]= useState({
        uname: sessionStorage.getItem("username"),
        email:"", subject:"", message:"",
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
            sent_by :state.uname , sent_date:newdate, uname:state.uname,
            email:state.email, subject:state.subject, message:state.message,
            
        }
        axios.post("http://sandbox.portalwiz.com/php/mail/mail.php", obj)
        .then( (res) => {console.log(res)
            if(res.data.message === "Mail Sent"){
                toast.success("Mail sent successfully!")
                // history.push("/role");
                setState({
                    email:"", subject:"", message:"",
                })
            }else{
                alert("Mail not sent!")
            }
        })
        .catch( (err) => console.log(err) );
      
      
    }  
    return(
        
        <>
        <div className="container-fluid mb-3 mb-md-0">
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb Breadcrumb align-items-center">
                    <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/message">Messages</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Send Message</li>
                </ol>
             </nav>

             <Heading name="Send Message" />

             <div className="container">

             <form onSubmit={onSubmit}>

                <div class="form-group row mt-4">
                    <label for="input1" class=" col-sm-2 col-md-1 col-form-label">To</label>
                    <div class="col-sm-10 col-md-6">
                        <input type="text" name="email" onChange={onChange} value={state.email} class="form-control"  placeholder="Add Subject" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="input2" class=" col-sm-2 col-md-1 col-form-label">Subject</label>
                    <div class="col-sm-10 col-md-6">
                        <input type="text" name="subject" onChange={onChange} value={state.subject} class="form-control" placeholder="Add Subject" />
                    </div>
                </div>
                <div class="form-group row">
                    <label  class=" col-sm-2 col-md-1 col-form-label">Message</label>
                    <div class="col-sm-10 col-md-6">
                        <textarea type="text" name="message" onChange={onChange} value={state.message} class="form-control" rows="6" placeholder="Add your message here..." />
                    </div>
                </div>
                <div className="col-md-7 text-right mt-4">
                    <Link to="/message" className="btn btn-danger btn_link mx-3">Cancel</Link>
                    <button type="submit" class="btn btn-primary btn_link ">Send</button>
                </div>
            </form>
             </div>

            </div>
        </>
    )
}

export default Compose_comp