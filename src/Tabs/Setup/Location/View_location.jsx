import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import View_location_comp from "./Component/View_location_comp"


const Edit_Location =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <View_location_comp />
        </div>
        <Footer />
        </>
    )
}

export default Edit_Location