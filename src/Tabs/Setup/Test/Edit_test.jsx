import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Edit_test_comp from "./Component/Edit_test_comp"


const Edit_test =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Edit_test_comp />
        </div>
        <Footer />
        </>
    )
}

export default Edit_test