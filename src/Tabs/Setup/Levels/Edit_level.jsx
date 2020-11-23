import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Edit_level_comp from "./Component/Edit_level_comp"


const Edit_level =()=>{
    return(
        <>
       
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Edit_level_comp />
        </div>
        <Footer />
        </>
    )
}

export default Edit_level