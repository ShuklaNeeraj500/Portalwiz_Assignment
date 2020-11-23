import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import Student_table from "./Component/Student_table"
import "./student.css"

const Student =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Student_table />
        </div>
        <Footer />
        </>
    )
}

export default Student