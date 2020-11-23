import React from "react";
import Latest_news_comp from "./Latest_news_comp"
import Heading from "../../../Common-To-All/Heading"
import "../Bulletin.css"

const Bulletin_comp =()=>{
    return(
        <>
        <div className="container-fluid">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb Breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Bulletin Board</li>
                </ol>
             </nav>

                <Heading name="Bulletin Board" />
            
                <div className="row">
                    <div className="col-11 mx-auto d-flex justify-content-between align-items-center">
                        <h5  style={{color:"#3282b8"}} className="m-0 heading">Location Name</h5>
                        <div>
                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option defaultValue>Select Location</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 imp_links">
                    <div className="col-11 mx-auto d-block ">
                        <h6 className="m-0 heading">Important Links</h6><br />
                            <div className="border border-dark pl-3 py-4 ">
                                <div className="d-flex align-items-center"><i className="fa mr-2 fa-google-plus-square fa-2x calender" ></i><a href="#">Google Calender Link</a></div><br />
                                <div className="d-flex align-items-center"><i className="fa mr-2 fa-calendar fa-2x calender"></i><a href="#" download>Batch Calender</a></div>
                            </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-11 mx-auto d-block">
                        <h6 className="m-0 heading">Latest News</h6>
                        
                        <Latest_news_comp name="Name" date_time="1-Sep-2019 1:30 PM" message="Update for all Locations"/>
                        <Latest_news_comp name="Name" date_time="1-Sep-2019 1:30 PM" message="Update for all Locations"/>
                        <Latest_news_comp name="Name" date_time="1-Sep-2019 1:30 PM" message="Update for all Locations"/>
                        
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-4 mx-auto"> 
                        <nav aria-label="Page navigation ">
                            <ul className="pagination pagination justify-content-center pagination_div">
                                <li className="page-item ">
                                    <a className="page-link border-0 " href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link border-0 " href="">1</a></li>
                                <li className="page-item"><a className="page-link border-0 " href="">2</a></li>
                                <li className="page-item"><a className="page-link border-0 " href="">3</a></li>
                                <li className="page-item">
                                    <a className="page-link border-0" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>


        </div>
        </>
    )
}

export default Bulletin_comp