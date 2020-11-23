import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Edit_preference_comp from "./Component/Edit_preference_comp"


const Edit_preference =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Edit_preference_comp />
        </div>
        <Footer />
        </>
    )
}

export default Edit_preference