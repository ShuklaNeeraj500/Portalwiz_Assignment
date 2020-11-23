import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Add_test_comp from "./Component/Add_test_comp"


const Add_test =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Add_test_comp />
        </div>
        <Footer />
        </>
    )
}

export default Add_test