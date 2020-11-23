import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Preference_comp from "./Component/Preference_comp"


const Preference =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Preference_comp />
        </div>
        <Footer />
        </>
    )
}

export default Preference