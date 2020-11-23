import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Student_profile_comp from "./Component/Student_profile_comp"

const Student_profile =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Student_profile_comp />
        </div>
        <Footer />
        </>
    )
}

export default Student_profile