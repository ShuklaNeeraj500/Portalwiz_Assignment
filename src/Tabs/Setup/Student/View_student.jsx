import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import View_student_comp from "./Component/View_student_comp"


const Edit_student =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <View_student_comp />
        </div>
        <Footer />
        </>
    )
}

export default Edit_student