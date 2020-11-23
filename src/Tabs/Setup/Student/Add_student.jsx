import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Add_student_comp from "./Component/Add_student_comp"


const Add_student =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Add_student_comp />
        </div>
        <Footer />
        </>
    )
}

export default Add_student