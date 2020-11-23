import React from "react"
import {Link} from "react-router-dom"
import Heading from "../../../../Common-To-All/Heading"

const Contact_parent_comp =()=>{
    
    return(
        
        <>
            <div className="container-fluid">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb Breadcrumb align-items-center">
                    <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                    <li className="breadcrumb-item"><strong>Students</strong></li>
                    <li className="breadcrumb-item"><Link to="/batch-student">Students</Link></li>
                    <li className="breadcrumb-item"><Link to="/student-detail">Student details</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact parent</li>
                </ol>
             </nav>

             <Heading name="Contact Parent" />

             <div className="container">
             <form>
                <div class="form-group row">
                    <label for="input1" class=" col-sm-2 col-md-1 col-form-label">To</label>
                    <div class="col-sm-10 col-md-6">
                    <input type="text" readOnly className="form-control-plaintext" value="<Auto generated>"  />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="input2" class=" col-sm-2 col-md-1 col-form-label">Subject</label>
                    <div class="col-sm-10 col-md-6">
                    <input type="text" class="form-control" id="input2" placeholder="Add Subject" />
                    </div>
                </div>
                <div class="form-group row">
                    <label  class=" col-sm-2 col-md-1 col-form-label">Subject</label>
                    <div class="col-sm-10 col-md-6">
                    <textarea type="text" class="form-control" rows="6" placeholder="Add your message here..." />
                    </div>
                </div>
                <div className="col-md-7 text-right mt-4">
                    <button type="submit" class="btn btn-danger mx-3 btn_link">Cancel</button>
                    <button type="submit" class="btn btn-primary btn_link">Send</button>
                </div>
            </form>
             </div>

            </div>
        </>
    )
}

export default Contact_parent_comp