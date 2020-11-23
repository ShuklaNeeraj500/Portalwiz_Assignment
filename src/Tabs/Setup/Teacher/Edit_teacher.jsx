import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Edit_teacher_comp from "./Component/Edit_teacher_comp"


const Edit_teacher =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Edit_teacher_comp />
            
        </div>
        <Footer />
        </>
    )
}

export default Edit_teacher