import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import View_preference_comp from "./Component/View_preference_comp"


const Edit_preference =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <View_preference_comp />
        </div>
        <Footer />
        </>
    )
}

export default Edit_preference