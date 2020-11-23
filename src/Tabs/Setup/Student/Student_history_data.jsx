import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import History_data_comp from "./Component/History_data_comp"


const History_data =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <History_data_comp />
            
        </div>
        <Footer />
        </>
    )
}

export default History_data