import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Add_teacher_comp from "./Component/Add_teacher_comp"


const Add_teacher =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Add_teacher_comp />
            
        </div>
        <Footer />
        </>
    )
}

export default Add_teacher