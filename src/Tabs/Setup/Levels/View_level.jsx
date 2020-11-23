import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import View_level_comp from "./Component/View_level_comp"


const Edit_level =()=>{
    return(
        <>
       
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <View_level_comp />
        </div>
        <Footer />
        </>
    )
}

export default Edit_level