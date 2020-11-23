import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Edit_question_comp from "./Component/Edit_question_comp"


const Edit_question =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Edit_question_comp />
        </div>
        <Footer />
        </>
    )
}

export default Edit_question