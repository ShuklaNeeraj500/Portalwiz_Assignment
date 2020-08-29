import React from "react";
import "../src/Sidebar.css";
import {NavLink} from "react-router-dom"
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
                  <div className="link align-items-center"><AssignmentIcon style={{color :"#81b214" ,fontSize:"1.5em"}} /><li><NavLink activeClassName="#" className="nav-link" to="/">Dashboard </NavLink></li></div>
                  <div className="link align-items-center"><PhoneIphoneIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><NavLink activeClassName="#" className="nav-link" to="/application">Applications </NavLink></li></div>
                  <div className="link align-items-center"><AccountBoxIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><NavLink activeClassName="#" className="nav-link" to="/account">Accounts </NavLink></li></div>
                  <div className="link align-items-center"><BarChartIcon style={{color :"#81b214" ,fontSize:"1.5em"}} /><li><NavLink activeClassName="#" className="nav-link" to="/marketing">Marketing </NavLink></li></div>
                  <div className="link align-items-center"><FaceIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><NavLink activeClassName="#" className="nav-link" to="/user">Users </NavLink></li></div>
                  <div className="link align-items-center"><WorkIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><NavLink activeClassName="#" className="nav-link" to="/role">Roles </NavLink></li></div> 
                  <div className="link align-items-center"><SmsFailedIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><NavLink activeClassName="#" className="nav-link" to="/permision">Permisions </NavLink></li></div>
                  <div className="link align-items-center"><PostAddIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><NavLink activeClassName="#" className="nav-link" to="/page">Pages </NavLink></li></div>
                  <div className="link align-items-center"><EditIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><NavLink activeClassName="#" className="nav-link" to="/theme">Theme Editor </NavLink></li></div>
                  <div className="link align-items-center"><CreditCardIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><NavLink activeClassName="#" className="nav-link" to="/landingpage">Landing Page</NavLink></li></div>
                  <div className="link align-items-center"><LocalHospitalIcon style={{color :"#81b214" ,fontSize:"1.5em"}}/><li><NavLink activeClassName="#" className="nav-link" to="/maintenance">Maintenance Mode</NavLink></li></div>
                </ul>
            </nav>
            
        </>
    )
}
export default Sidebar



                                                                                              
   