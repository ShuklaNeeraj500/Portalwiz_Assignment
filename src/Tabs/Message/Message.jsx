import React from "react"
import Navbar from "../../Common-To-All/Navbar"
import Footer from "../../Common-To-All/Footer"
import Sidebar from "../../Sidebar/Sidebar"
import Message_comp from "./Component/Message_comp"


const Message =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page" >
            <Sidebar />
            <Message_comp />
        </div>
        <Footer />
        </>
    )
}

export default Message