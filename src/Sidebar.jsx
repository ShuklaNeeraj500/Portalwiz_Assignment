import React from "react";
import "../src/Sidebar.css";
import AssignmentIcon from '@material-ui/icons/Assignment';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BarChartIcon from '@material-ui/icons/BarChart';
import FaceIcon from '@material-ui/icons/Face';
import WorkIcon from '@material-ui/icons/Work';
import SmsFailedIcon from '@material-ui/icons/SmsFailed';
import PostAddIcon from '@material-ui/icons/PostAdd';
import EditIcon from '@material-ui/icons/Edit';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const Sidebar =() =>{
    return(
        <>
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Learning Management System</h3>
                    <strong>LMS</strong>
                </div>
                <ul className="list-unstyled components">
                  <div className="link align-items-center"><AssignmentIcon style={{color :"#81b214" ,fontSize:"1.5em"}} /> <li> <a href="#"> Dashboard</a></li></div>
                  <div className="link align-items-center"><PhoneIphoneIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><a href="#">Applications</a></li></div>
                  <div className="link align-items-center"><AccountBoxIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><a href="#">Accounts</a></li></div>
                  <div className="link align-items-center"><BarChartIcon style={{color :"#81b214" ,fontSize:"1.5em"}} /><li><a href="#">Marketing</a></li></div>
                  <div className="link align-items-center"><FaceIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><a href="#">Users</a></li></div>
                  <div className="link align-items-center"><WorkIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><a href="#">Roles</a></li></div> 
                  <div className="link align-items-center"><SmsFailedIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><a href="#">Permisions</a></li></div>
                  <div className="link align-items-center"><PostAddIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><a href="#">Pages</a></li></div>
                  <div className="link align-items-center"><EditIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><a href="#">Theme Editor</a></li></div>
                  <div className="link align-items-center"><CreditCardIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><a href="#">Landing Page</a></li></div>
                  <div className="link align-items-center"><LocalHospitalIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><a href="#">Maintenance Mode</a></li></div>
                </ul>
            </nav>
            
        </>
    )
}
export default Sidebar