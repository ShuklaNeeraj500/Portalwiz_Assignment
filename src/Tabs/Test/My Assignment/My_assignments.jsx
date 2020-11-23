import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import My_assignments_comp from "./Component/My_assignments_comp"

const My_assignments =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
             <My_assignments_comp/>
        </div>
        <Footer />
        </>
    )
}

export default My_assignments