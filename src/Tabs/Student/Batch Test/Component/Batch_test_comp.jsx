import React from "react"
import {Link} from "react-router-dom"
import Heading from "../../../../Common-To-All/Heading"


const Batch_test_comp=()=>{
  return(
    <>
    <div className="container-fluid  ">
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb Breadcrumb align-items-center">
            <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                <li className="breadcrumb-item"><strong>Students</strong></li>
                <li className="breadcrumb-item active" aria-current="page">Tests</li>
            </ol>
        </nav> 

        <Heading name="Tests" />
    </div>
    </>
    )
}
export default Batch_test_comp
