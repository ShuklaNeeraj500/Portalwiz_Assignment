import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Add_location_comp from "./Component/Add_location_comp"


const Add_Location =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Add_location_comp />
        </div>
        <Footer />
        </>
    )
}

export default Add_Location