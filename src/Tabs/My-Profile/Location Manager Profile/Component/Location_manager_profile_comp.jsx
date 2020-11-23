import React from "react"
import {Link} from "react-router-dom"
import Heading from "../../../../Common-To-All/Heading"

const Location_manager_profile_comp= ()=>{
    return(
        <>
    <div className="container-fluid  ">
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb Breadcrumb align-items-center">
            <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                <li className="breadcrumb-item"><strong>My Profile</strong></li>
                <li className="breadcrumb-item active" aria-current="page">Location Manager's Profile</li>
            </ol>
        </nav> 

        <Heading name="Location Manager's Profile" />
    </div>
        </>
    )
}
export default Location_manager_profile_comp