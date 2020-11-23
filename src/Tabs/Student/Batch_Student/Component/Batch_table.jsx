import React from "react";
import {Link} from "react-router-dom"
import Heading from "../../../../Common-To-All/Heading"

const Batch_table =()=>{

    return(
        <>
            <div className="container-fluid ">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb Breadcrumb align-items-center">
                        <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                        <li className="breadcrumb-item"><strong>Students</strong></li>
                        <li className="breadcrumb-item active" aria-current="page">Students</li>
                    </ol>
                </nav>

                <Heading name="Students" />


            <div className="container">

                    <div className="row my-4">
                        <div className="col-12 col-md-11 mx-auto d-flex justify-content-end">
                            <Link to="/" className="btn btn-primary btn_link">Assign Test</Link>
                        </div>
                    </div>
                
                <div className="row">
                   <div className="col-12 col-md-11 mx-auto">
                        <table className="table table-responsive-md table-bordered">
                            <thead>
                                <tr style={{backgroundColor:"#F1FAFF"}}>
                                    <th scope="col">ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Active</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Level</th>
                                    <th className="text-center" scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td> </td><td> </td><td> </td><td> </td>
                                    <td> </td><td> </td>
                                    <td className="text-center Action_icon ">
                                        <Link to="/student-detail" ><i className="fa fa-eye fa-fw"></i></Link>&nbsp;
                                        <Link><i className ="fa fa-pencil fa-fw" ></i></Link>&nbsp;
                                        <Link><i className="fa fa-trash fa-fw" ></i></Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td> </td><td> </td><td> </td><td> </td>
                                    <td> </td><td> </td>
                                    <td className="text-center Action_icon">
                                        <Link to="/student-detail"><i className="fa fa-eye fa-fw"></i></Link>&nbsp;
                                        <Link><i className ="fa fa-pencil fa-fw" ></i></Link>&nbsp;
                                        <Link><i className="fa fa-trash fa-fw" ></i></Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td> </td><td> </td><td> </td><td> </td>
                                    <td> </td><td> </td>
                                    <td className="text-center Action_icon">
                                        <Link to="/student-detail"><i className="fa fa-eye fa-fw"></i></Link>&nbsp;
                                        <Link><i className ="fa fa-pencil fa-fw" ></i></Link>&nbsp;
                                        <Link><i className="fa fa-trash fa-fw" ></i></Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td> </td><td> </td><td> </td><td> </td>
                                    <td> </td><td> </td>
                                    <td className="text-center Action_icon">
                                        <Link to="/student-detail"><i className="fa fa-eye fa-fw"></i></Link>&nbsp;
                                        <Link><i className ="fa fa-pencil fa-fw" ></i></Link>&nbsp;
                                        <Link><i class="fa fa-trash fa-fw" ></i></Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td> </td><td> </td><td> </td><td> </td>
                                    <td> </td><td> </td>
                                    <td className="text-center Action_icon">
                                        <Link to="/student-detail"><i className="fa fa-eye fa-fw"></i></Link>&nbsp;
                                        <Link><i className ="fa fa-pencil fa-fw" ></i></Link>&nbsp;
                                        <Link><i className="fa fa-trash fa-fw" ></i></Link></td>
                                </tr>
                            </tbody>
                        </table>
                   </div>
                </div>
            
        </div>

</div>

         
        </>
    )
}

export default Batch_table;