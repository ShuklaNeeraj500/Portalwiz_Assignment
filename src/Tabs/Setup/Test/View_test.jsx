import React from "react"
import Navbar from "../../../Common-To-All/Navbar"
import Footer from "../../../Common-To-All/Footer"
import Sidebar from "../../../Sidebar/Sidebar"
import View_test_comp from "./Component/View_test_comp"


const View_test =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <View_test_comp />
        </div>
        <Footer />
        </>
    )
}

export default View_test