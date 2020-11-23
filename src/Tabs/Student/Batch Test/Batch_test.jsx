import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Batch_test_comp from "./Component/Batch_test_comp"


const Batch_test =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Batch_test_comp />
        </div>
        <Footer />
        </>
    )
}

export default Batch_test