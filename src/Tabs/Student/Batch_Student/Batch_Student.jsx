import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Batch_table from "./Component/Batch_table"


const Batch_Student =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Batch_table />
        </div>
        <Footer />
        </>
    )
}

export default Batch_Student