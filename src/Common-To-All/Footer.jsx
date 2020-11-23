import React from "react"
const Footer =()=>{
   const style={
        color:'#fff',
        backgroundColor:'#2C2E30',
    }
    return(
        <> 
    <div className="d-flex justify-content-between container-fluid py-1 text-monospace"  style={style}>
        <p className="m-0"> &#169; Copyright.All Rights Reserved</p>
        <p className="m-0">Version 1.0 | Development</p>
    </div>
    </>
    )
}
export default Footer