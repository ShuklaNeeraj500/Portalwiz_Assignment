import React from "react"
import Navbar from "../../Common-To-All/Navbar"
import Footer from "../../Common-To-All/Footer"
import Sidebar from "../../Sidebar/Sidebar"
import Help_comp from "./Component/Help_comp"


const Help =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Help_comp />
        </div>
        <Footer />
        </>
    )
}

export default Help