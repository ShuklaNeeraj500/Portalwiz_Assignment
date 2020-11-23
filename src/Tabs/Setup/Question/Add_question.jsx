import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Add_question_comp from "./Component/Add_question_comp"


const Add_question =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Add_question_comp />
        </div>
        <Footer />
        </>
    )
}

export default Add_question