import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Add_role_comp from "./Component/Add_role_comp"


const Add_role =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Add_role_comp />
        </div>
        <Footer />
        </>
    )
}

export default Add_role