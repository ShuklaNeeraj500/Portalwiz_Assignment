import React from "react"
import {Link} from "react-router-dom"
import Heading from "../../../../Common-To-All/Heading"

const Abacus_comp =()=>{
return(
    <>
    <div className="container-fluid  ">
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb Breadcrumb align-items-center">
            <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                <li className="breadcrumb-item"><strong>Tests</strong></li>
                <li className="breadcrumb-item active" aria-current="page">Virtual Abacus</li>
            </ol>
        </nav> 

        <Heading name="Virtual Abacus" />
    </div>
    </>

)
}

export default Abacus_comp;