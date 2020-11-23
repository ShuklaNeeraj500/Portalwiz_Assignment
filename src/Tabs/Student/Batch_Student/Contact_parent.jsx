import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Contact_parent_comp from "./Component/Contact_parent_comp"


const Student_detail =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Contact_parent_comp />
        </div>
        <Footer />
        </>
    )
}

export default Student_detail