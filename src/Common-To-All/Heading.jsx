import React from "react"
const Heading = (props)=>{
    return(
        <>
            <div className="container-fluid mb-4 main_heading">
                <div className="col-12 mx-auto bg-light shadow-sm">
                <h4 style={{color:"#174873" , paddingTop:".3em", paddingBottom:".3em", letterSpacing:"1px"}}>{props.name}</h4>
                </div>
             </div>
        </>
    )
}
export default Heading