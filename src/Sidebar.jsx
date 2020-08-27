import React from "react"
import "../src/Sidebar.css"
import Link from "../src/Link"
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
import $ from 'jquery';



const Sidebar =() =>{
    return(
        <>
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Learning Management System</h3>
                    <strong>LMS</strong>
                </div>
                <ul className="list-unstyled components">

                  <div className="link  align-items-center"><AssignmentIcon /><Link  name="Dashboard" /></div>
                  <div className="link  align-items-center"><PhoneIphoneIcon /><Link name="Applications"/></div>
                  <div className="link  align-items-center"><AccountBoxIcon /><Link name="Accounts"/></div>
                  <div className="link  align-items-center"><BarChartIcon /><Link name="Marketing"/></div>
                  <div className="link  align-items-center"><FaceIcon /><Link name="Users"/></div>
                  <div className="link  align-items-center"><WorkIcon /><Link name="Roles"/></div> 
                  <div className="link  align-items-center"><SmsFailedIcon /><Link name="Permisions"/></div>
                  <div className="link  align-items-center"><PostAddIcon /><Link name="Pages"/></div>
                  <div className="link  align-items-center"><EditIcon /><Link name="Theme Editor"/></div>
                  <div className="link  align-items-center"><CreditCardIcon /><Link name="Landing Page"/></div>
                  <div className="link  align-items-center"><LocalHospitalIcon /><Link name="Maintenance Mode"/></div>
        
                </ul>
            </nav>
        </>
    )
}
export default Sidebar