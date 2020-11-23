import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Add_level_comp from "./Component/Add_level_comp"


const Add_level =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Add_level_comp />
        </div>
        <Footer />
        </>
    )
}

export default Add_level