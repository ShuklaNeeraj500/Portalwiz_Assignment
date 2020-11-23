import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import View_role_comp from "./Component/View_role_comp"


const Edit_role =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <View_role_comp />
        </div>
        <Footer />
        </>
    )
}

export default Edit_role