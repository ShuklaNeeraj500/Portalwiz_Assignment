import React  from "react"
import Navbar from "../../Common-To-All/Navbar"
import Footer from "../../Common-To-All/Footer"
import Sidebar from "../../Sidebar/Sidebar"
import Bulletin_comp from "./Component/Bulletin_comp"



const Bulletin =()=>{
    return(
        <>
        <Navbar />
        <div className="d-flex Tab_page">
     
             <Sidebar />
            <Bulletin_comp />
     
        </div>
        <Footer />
        </>
    )
}

export default Bulletin;