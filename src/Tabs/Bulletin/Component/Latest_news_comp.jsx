import React from "react";

const Latest_news_comp =(props)=>{
    return(
        <>
            <div className="p-3 rounded shadow-sm my-4 news" style={{backgroundColor:"#BFD0E7"}}>
                <p>Posted by: <em>{props.name} on {props.date_time}</em></p>
                <p className="ml-3">{props.message}</p><br/>
            </div>
        </>
    )
}
export default Latest_news_comp