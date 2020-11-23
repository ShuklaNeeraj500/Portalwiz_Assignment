import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Mind_math_comp  from "./Component/Mind_math_comp"

const Mind_math =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Mind_math_comp />
        </div>
        <Footer />
        </>
    )
}

export default Mind_math