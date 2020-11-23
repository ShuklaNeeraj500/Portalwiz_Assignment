import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Landing_page_comp from "./Component/Landing_page_comp"


const Landing_page =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Landing_page_comp />
        </div>
        <Footer />
        </>
    )
}

export default Landing_page