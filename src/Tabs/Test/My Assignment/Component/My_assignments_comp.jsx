import React from "react"
import {Link} from "react-router-dom"
import Heading from "../../../../Common-To-All/Heading"

const My_assignments_comp =()=>{
return(
    <>
    <div className="container-fluid  ">
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb Breadcrumb align-items-center">
            <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                <li className="breadcrumb-item"><strong>Tests</strong></li>
                <li className="breadcrumb-item active" aria-current="page">My Assignments</li>
            </ol>
        </nav> 

        <Heading name="My Assignments" />
    </div>
    </>

)
}

export default My_assignments_comp;