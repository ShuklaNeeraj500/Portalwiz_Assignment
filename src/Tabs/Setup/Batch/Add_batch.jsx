import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Add_batch_comp from "./Component/Add_batch_comp"


const Add_batch =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Add_batch_comp />
        </div>
        <Footer />
        </>
    )
}

export default Add_batch