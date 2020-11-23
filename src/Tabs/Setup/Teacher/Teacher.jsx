import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Teacher_table from "./Component/Teacher_table"


const Teacher =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Teacher_table />
            
        </div>
        <Footer />
        </>
    )
}

export default Teacher