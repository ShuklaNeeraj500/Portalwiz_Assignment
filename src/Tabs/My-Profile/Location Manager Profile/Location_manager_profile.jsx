import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Location_manager_profile_comp  from "./Component/Location_manager_profile_comp"

const Location_manager_profile =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Location_manager_profile_comp />
        </div>
        <Footer />
        </>
    )
}

export default Location_manager_profile