import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Add_preference_comp from "./Component/Add_preference_comp"


const Add_preference =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Add_preference_comp />
        </div>
        <Footer />
        </>
    )
}

export default Add_preference