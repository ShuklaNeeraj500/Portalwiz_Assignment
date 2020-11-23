import React from "react"
import Navbar from "../../Common-To-All/Navbar"
import Footer from "../../Common-To-All/Footer"
import Sidebar from "../../Sidebar/Sidebar"
import Compose_comp from "./Component/Compose_comp"


const Compose=()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page" >
            <Sidebar />
            <Compose_comp />
        </div>
        <Footer />
        </>
    )
}

export default Compose