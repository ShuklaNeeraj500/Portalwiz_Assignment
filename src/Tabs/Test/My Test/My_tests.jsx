import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import My_tests_comp from "./Component//My_tests_comp"

const My_tests =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
             <My_tests_comp/>
        </div>
        <Footer />
        </>
    )
}

export default My_tests