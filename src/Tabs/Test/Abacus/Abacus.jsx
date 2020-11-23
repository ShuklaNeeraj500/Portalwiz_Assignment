import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Abacus_comp  from "./Component/Abacus_comp"

const Abacus =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Abacus_comp />
        </div>
        <Footer />
        </>
    )
}

export default Abacus