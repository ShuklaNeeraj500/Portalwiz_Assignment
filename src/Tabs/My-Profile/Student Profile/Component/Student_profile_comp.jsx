import React from "react"
import {Link} from "react-router-dom"
import Heading from "../../../../Common-To-All/Heading"

const Student_profile_comp= ()=>{
return(
    <>
    <div className="container-fluid  ">
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb Breadcrumb align-items-center">
                <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                <li className="breadcrumb-item"><strong>My Profile</strong></li>
                <li className="breadcrumb-item active" aria-current="page">Student's Profile</li>
            </ol>
        </nav> 

        <Heading name="Student's Profile" />
    </div>
    </>
)
}
export default Student_profile_comp