import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Teacher_profile_comp from "./Component/Teacher_profile_comp"

const Teacher_profile =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Teacher_profile_comp />
        </div>
        <Footer />
        </>
    )
}

export default Teacher_profile