import React from "react"
const Loading_spinner =()=>{
    return(
        <>
        <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary m-5" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        </div>
        
        </>
    )
}

export default Loading_spinner