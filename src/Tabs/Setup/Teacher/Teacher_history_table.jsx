import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import History_table_comp from "./Component/History_table_comp"


const History_table =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <History_table_comp />
            
        </div>
        <Footer />
        </>
    )
}

export default History_table