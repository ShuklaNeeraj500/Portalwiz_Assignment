import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import My_exams_comp from "./Component/My_exams_comp"

const My_exams =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
             <My_exams_comp/>
        </div>
        <Footer />
        </>
    )
}

export default My_exams