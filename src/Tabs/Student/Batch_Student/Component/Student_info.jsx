import React from "react"
import { Link } from "react-router-dom"
import Latest_news_comp from "../../../Bulletin/Component/Latest_news_comp"
import Heading from "../../../../Common-To-All/Heading"

const Student_info = ()=>{
    return (
        <>
          <div className="container-fluid ">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb Breadcrumb align-items-center">
                    <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                    <li className="breadcrumb-item"><strong>Students</strong></li>
                    <li className="breadcrumb-item"><Link to="/batch-student">Students</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Student details</li>
                </ol>
             </nav>

            <Heading name="Student Information - [Student Name]" />
{/* -----------------------------Navigation-Tab--------------------------- */}
             <div className="container">
                <div className="row mt-4 ">
                    <div className="col-md-9 mx-auto order-md-1 order-2">
                        <nav>
                            <div className="nav" id="nav-tab" role="tablist">
                                <a className="nav_tab nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Personal Information</a>
                                <a className="nav_tab nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Notes</a>
                                <a className="nav_tab nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Tests</a>
                            </div>
                        </nav>
                        <div className="tab-content" >
{/* ----------------------Personal- Information------------------------------- */}
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="container">

                                <h3 className="mt-4 mb-4">Personal Information</h3>
                                    
                                <div className="form-group row">
                                    <label className="col-sm-5 col-form-label">Profile Picture</label>
                                    <div className="col-sm-6 ">
                                        <input type="text" readOnly className="form-control-plaintext" value="<Auto generated>"  />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-5 col-form-label">Student ID</label>
                                    <div className="col-sm-6 ">
                                        <input type="text" readOnly className="form-control-plaintext" value="<Auto generated>"  />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-5 col-form-label">First Name</label>
                                    <div className="col-sm-6 ">
                                        <input type="text" readOnly className="form-control-plaintext" value="<Auto generated>"  />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-5 col-form-label">Middle Name</label>
                                    <div className="col-sm-6 ">
                                        <input type="text" readOnly className="form-control-plaintext" value="<Auto generated>"  />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-5 col-form-label">Last Name</label>
                                    <div className="col-sm-6 ">
                                        <input type="text" readOnly className="form-control-plaintext" value="<Auto generated>"  />
                                    </div>
                                </div>
                                </div>
                            </div>
{/* ----------------------Personal-Information-End------------------------------- */}

{/* ------------------------Notes-tab-Start------------------------------- */}
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="container">
                                    <h3 className="mt-4 mb-4">Notes</h3>
                                    <form>
                                        <div class="form-group">
                                            <textarea className="border-dark form-control" placeholder="Add notes here..." rows="3"></textarea>
                                        </div> 
                                        <div className="text-right">
                                            <button type="submit" className="btn btn-primary btn_link">Save</button>
                                        </div>
                                    </form>

                                    <Latest_news_comp name="Rohan " date_time="12-Sep-2020" message="The message is written here" />
                                    <Latest_news_comp name="Rohan " date_time="12-Sep-2020" message="The message is written here" />
                                    <Latest_news_comp name="Rohan " date_time="12-Sep-2020" message="The message is written here"/>
                                </div>
            {/* ---------------Pagination---------------- */}
                                <div className="row mt-3">
                                    <div className="col-4 mx-auto"> 
                                        <nav aria-label="Page navigation ">
                                            <ul class="pagination pagination justify-content-center pagination_div">
                                                <li class="page-item ">
                                                    <a class="page-link border-0 " href="#" aria-label="Previous">
                                                        <span aria-hidden="true">&laquo;</span>
                                                    </a>
                                                </li>
                                                <li class="page-item"><a class="page-link border-0 " href="">1</a></li>
                                                <li class="page-item"><a class="page-link border-0 " href="">2</a></li>
                                                <li class="page-item"><a class="page-link border-0 " href="">3</a></li>
                                                <li class="page-item">
                                                    <a class="page-link border-0" href="#" aria-label="Next">
                                                        <span aria-hidden="true">&raquo;</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                            </div>
{/* --------------------------Notes-Tab-End-------------------------- */}

{/* --------------------------Test-Tab-Start--------------------------- */}
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <div className="container">
                                    <h3 className="mt-4 mb-4">Tests</h3>
                                    <p className="mb-2">Assigned Test</p>
                                    <table class="table table-responsive-sm table-bordered text-center">
                                        <thead>
                                            <tr>
                                            <th scope="col">Sr. no.</th>
                                            <th scope="col">Test-Title</th>
                                            <th scope="col">Marks Obtained</th>
                                            <th scope="col">Out-Of</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row">1</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            </tr>
                                            <tr>
                                            <th scope="row">2</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            </tr>
                                            <tr>
                                            <th scope="row">3</th>
                                            <td ></td>
                                            <td ></td>
                                            <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
{/* --------------------------Test-Tab-End--------------------------- */}

                        </div> 
                    </div>
                    <div className="col-11 col-md-2 mx-auto order-md-2 order-1 py-3 py-md-0">
                        <Link to="/contact_parent" className="btn btn-primary btn_link">Contact Parents</Link>
                    </div>
                </div>
             </div>
{/* ----------------------------Navigation-Tab-End------------------------------- */}

            </div>
        </>
    )
}

export default Student_info;