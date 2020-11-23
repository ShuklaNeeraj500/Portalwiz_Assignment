import React from "react";
import Navbar from "../../../Common-To-All/Navbar";
import Footer from "../../../Common-To-All/Footer";
import Sidebar from "../../../Sidebar/Sidebar";
import Edit_user_comp from "./Component/Edit_user_comp"

const Edit_user =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
            <Sidebar />
            <Edit_user_comp />
        </div>
        <Footer />
        </>
    )
}

export default Edit_user

