import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Edit_batch_comp from "./Component/Edit_batch_comp"


const Edit_batch =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Edit_batch_comp />
        </div>
        <Footer />
        </>
    )
}

export default Edit_batch