import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import View_teacher_comp from "./Component/View_teacher_comp"


const View_teacher =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <View_teacher_comp />
            
        </div>
        <Footer />
        </>
    )
}

export default View_teacher