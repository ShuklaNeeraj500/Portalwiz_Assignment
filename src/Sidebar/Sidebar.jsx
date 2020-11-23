import React , {useState} from "react";
import {NavLink} from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import Img from "./logo.jpg"
import Img2 from "./small-logo.jpeg"
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DataUsageIcon from '@material-ui/icons/DataUsage';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import "./Sidebar.css"; 
import axios from "axios";


const Sidebar =() =>{

const [click , setClick] = useState(true);
const [user, setUser] = useState({
    role: sessionStorage.getItem("role"),
    uname:sessionStorage.getItem("username"), 
  })
// const [role , setRole]=useState("")

const Clicked = ()=>{
        const target = document.getElementById("sidebar");
        target.classList.toggle("active");
        setClick(prevState=> !prevState);
}

const close_btn ={
    color: "white",
    padding:"5px",
    outline: "none",
    }

    return(
        <>
        <div id="sidebar" >

            <div className="sidebar-header">
                <img src={Img} className="img-fluid border big-logo"/>
                {/* <img src={Img2} className="img-fluid small-logo " /> */}
            </div>
        {/*----------------- React Tool-Tip Component --------------------*/}
            <ReactTooltip  place="right" effect="solid" delayShow={200} />
        <div className="sidebar_content">
            <ul className="list-unstyled nav_container">
                <div className="close-btn text-right ">
                    <IconButton style={close_btn} className="d-md-none mr-3" onClick={Clicked}><CloseIcon/></IconButton>
                </div>


                <div className="link align-items-center ">
                    <li>
                        <NavLink className="Close_bar_icon" to="/bulletin"><i className="fa fa-th  icon-Sidebar-active"  data-tip="Bulletin Board"></i></NavLink>    
                        <NavLink activeClassName="main-tabs-active"  exact className="main-tabs"  to="/bulletin"><i className="fa fa-th mr-2" ></i> Bulletin Board </NavLink>
                    </li>
                </div>
                
                <div className="link align-items-center">                  
                    <li>
                        <NavLink className="Close_bar_icon" to="/message"><i className="fa fa-comments-o  icon-Sidebar-active"  data-tip="Message" ></i></NavLink>
                        <NavLink  activeClassName="main-tabs-active"  className="main-tabs"  to="/message"><i className="fa fa-comments-o mr-2" ></i> Message </NavLink>
                    </li>
                </div>
                
                <div data-spy="scroll" className="link align-items-center">                  
                    <li>
                   
                    <Popup trigger={<i className="fa fa-user-circle-o icon-Sidebar-active" ></i>} position="right"
                        on="hover" mouseLeaveDelay="200" closeOnDocumentClick offsetX={15}
                        contentStyle={{backgroundColor:"#29567D" , color:"#000" }}
                        arrow arrowStyle={{color:"#29567D"}}>   
                        
                        <div className="d-flex flex-column menu">
                            <p className="sidebar_popup"><DataUsageIcon style={{fontSize:".7em"}}/>&nbsp;Students</p>
                           <NavLink className="d-none" to="#"/> {/* This link is just used to remove the highlight from 1st link */}
                           <NavLink className=" text-decoration-none menu-item" to="/batch-student"><ArrowRightIcon fontSize="small"/> Students</NavLink>
                           <NavLink className="text-decoration-none menu-item" to="/batch-test"><ArrowRightIcon fontSize="small"/> Tests</NavLink>
                        </div>
                    </Popup>
                        
                        
                        <a className="main-tabs"  id="dropdown-tab"  data-toggle="collapse" href="#student"><i className="fa fa-user-circle-o mr-2" ></i> Students <i className="fa fa-sort-desc float-right mr-4"></i></a>
                        <ul className="collapse list-unstyled drop_menu" id="student">
                            <li>
                                <NavLink to="/batch-student" ><i className="fa fa-angle-right fa-fw " ></i> Students</NavLink>
                            </li>
                            <li>
                                <NavLink to="/batch-test"><i className="fa fa-angle-right fa-fw " ></i> Tests</NavLink>
                            </li>
                        </ul>
                    </li>
                </div>
                
                <div className="link align-items-center">                   
                    <li>
                    <Popup trigger={<i className="fa fa-bar-chart  icon-Sidebar-active "></i>} position="right"
                        on="hover" mouseLeaveDelay="200" closeOnDocumentClick offsetX={15}
                        contentStyle={{backgroundColor:"#29567D" , color:"#000" ,width:"auto" }}
                        arrow arrowStyle={{color:"#29567D"}}>   
                        
                        <div className="d-flex flex-column menu">
                        <p className="sidebar_popup"><DataUsageIcon style={{fontSize:".7em"}}/>&nbsp;My Profile</p>
                        <NavLink className="d-none" to="#"/>  {/* This link is just used to remove the highlight from 1st link */}
                        <NavLink className="text-decoration-none menu-item" to="/student-profile"><ArrowRightIcon fontSize="small"/> Student Profile</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/teacher-profile"><ArrowRightIcon fontSize="small"/> Teacher Profile</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/location-manager-profile"><ArrowRightIcon fontSize="small"/> Location Manager Profile</NavLink>
                        </div>
                    </Popup>
                        
                        <a  className="main-tabs " id="dropdown-tab" data-toggle="collapse" href="#profile"><i className="fa fa-bar-chart mr-2" ></i> My Profile <i className="fa fa-sort-desc float-right mr-4"></i></a>
                        <ul className="collapse list-unstyled drop_menu" id="profile">
                            <li>
                                <NavLink to="/student-profile"><i className="fa fa-angle-right fa-fw " ></i> Student Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/teacher-profile"><i className="fa fa-angle-right fa-fw " ></i> Teacher Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/location-manager-profile"><i className="fa fa-angle-right fa-fw " ></i> Location Manager Profile</NavLink>
                            </li>
                        </ul>
                    </li>
                </div>
                
                <div className="link align-items-center">                
                    <li>  
                    <Popup trigger={<i className="fa fa-file-text-o  icon-Sidebar-active" ></i>} position="right"
                        on="hover" mouseLeaveDelay="200" closeOnDocumentClick offsetX={15}
                        contentStyle={{backgroundColor:"#29567D" , color:"#000"  }}
                        arrow arrowStyle={{color:"#29567D"}}>   
                        
                        <div className="d-flex flex-column menu">
                        <p className="sidebar_popup"><DataUsageIcon style={{fontSize:".7em"}}/>&nbsp;Tests</p>
                        <NavLink className="d-none" to="#"/> {/* This link is just used to remove the highlight from 1st link */}
                        <NavLink className="text-decoration-none menu-item" to="/my-assignment"><ArrowRightIcon fontSize="small"/> My Assignments</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/my-test"><ArrowRightIcon fontSize="small"/> My Tests</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/my-exam"><ArrowRightIcon fontSize="small"/> My Exams</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/abacus"><ArrowRightIcon fontSize="small"/> Virtual Abacus</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/mind-math"><ArrowRightIcon fontSize="small"/> Mind Math</NavLink>
                        </div>
                    </Popup>
                        
                        <a  className="main-tabs " id="dropdown-tab" data-toggle="collapse" href="#test"><i className="fa fa-file-text-o mr-2" ></i> Tests <i className="fa fa-sort-desc float-right mr-4"></i></a>
                        <ul className="collapse list-unstyled drop_menu" id="test">
                            <li>
                                <NavLink to="/my-assignment"><i className="fa fa-angle-right fa-fw " ></i> My Assignments</NavLink>
                            </li>
                            <li>
                                <NavLink to="/my-test"><i className="fa fa-angle-right fa-fw " ></i> My Tests</NavLink>
                            </li>
                            <li>
                                <NavLink to="/my-exam"><i className="fa fa-angle-right fa-fw " ></i> My Exams</NavLink>
                            </li>
                            <li>
                                <NavLink to="/abacus"><i className="fa fa-angle-right fa-fw " ></i> Virtual Abacus</NavLink>
                            </li>
                            <li>
                                <NavLink to="/mind_math"><i className="fa fa-angle-right fa-fw " ></i> Mind Math</NavLink>
                            </li>
                        </ul>
                    </li>
                </div>
                
              {user.role === "Superadmin" && (
                <div className="link align-items-center"  >                   
                    <li > 
                    <Popup trigger={<i className="fa fa-cogs  icon-Sidebar-active" ></i>}  position="right"
                        on="hover" mouseLeaveDelay="200" closeOnDocumentClick offsetX={15}
                        contentStyle={{backgroundColor:"#29567D" , color:"#000"}}
                        arrow arrowStyle={{color:"#29567D"}}>   
                        
                        <div className="d-flex flex-column menu">
                        <p className="sidebar_popup"><DataUsageIcon style={{fontSize:".7em"}}/>&nbsp;Setup</p>
                        <NavLink className="d-none" to="#"/> {/* This link is just used to remove the highlight from 1st link */}
                        <NavLink className="text-decoration-none menu-item" to="/student" ><ArrowRightIcon fontSize="small"/> Students</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/teacher"><ArrowRightIcon fontSize="small"/> Teachers</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/location"><ArrowRightIcon fontSize="small"/> Locations</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/batch"><ArrowRightIcon fontSize="small"/> Batches</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/level"><ArrowRightIcon fontSize="small"/> Levels</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/preference"><ArrowRightIcon fontSize="small"/> Preferences</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/question"><ArrowRightIcon fontSize="small"/> Questions</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/test"><ArrowRightIcon fontSize="small"/> Tests</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/user"><ArrowRightIcon fontSize="small"/> Users</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/role"><ArrowRightIcon fontSize="small"/> Roles</NavLink>
                        <NavLink className="text-decoration-none menu-item" to="/landing-page"><ArrowRightIcon fontSize="small"/> Landing Page</NavLink>

                        </div>
                    </Popup>
                        
                        <a className="main-tabs " id="dropdown-tab"  data-toggle="collapse" href="#setup"><i className="fa fa-cogs mr-2" ></i> Setup <i className="fa fa-sort-desc float-right mr-4"></i> </a>
                        <ul className="collapse list-unstyled drop_menu" id="setup">
                            <li>
                                <NavLink to="/student" ><i className="fa fa-angle-right fa-fw " ></i> Students</NavLink>
                            </li>
                            <li>
                                <NavLink to="/teacher"><i className="fa fa-angle-right fa-fw " ></i> Teachers</NavLink>
                            </li>
                            <li>
                                <NavLink to="/location"><i className="fa fa-angle-right fa-fw " ></i> Locations</NavLink>
                            </li>
                            <li>
                                <NavLink to="/batch"><i className="fa fa-angle-right fa-fw " ></i> Batches</NavLink>
                            </li>
                            <li>
                                <NavLink to="/level"><i className="fa fa-angle-right fa-fw " ></i> Levels</NavLink>
                            </li>
                            <li>
                                <NavLink to="/preference"><i className="fa fa-angle-right fa-fw " ></i> Preferences</NavLink>
                            </li>
                            <li>
                                <NavLink to="/question"><i className="fa fa-angle-right fa-fw " ></i> Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to="/test"><i className="fa fa-angle-right fa-fw " ></i> Tests</NavLink>
                            </li>
                            <li>
                                <NavLink to="/user"><i className="fa fa-angle-right fa-fw " ></i> Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/role"><i className="fa fa-angle-right fa-fw " ></i> Roles</NavLink>
                            </li>
                            <li>
                                <NavLink to="/landing-page"><i className="fa fa-angle-right fa-fw " ></i> Landing Page</NavLink>
                            </li>
                        </ul>
                    </li>
                </div> 
              )}
                
                <div className="link align-items-center">                 
                    <li>
                        <NavLink className="Close_bar_icon" to="/help"><i className="fa fa-question-circle icon-Sidebar-active"  data-tip="Help"></i></NavLink>
                        <NavLink  activeClassName="main-tabs-active" className="main-tabs"  to="/help"><i className="fa fa-question-circle mr-2" ></i> Help </NavLink>
                    </li>
                </div>  
            </ul>
        </div>
    </div>
            
        </>
    )
}
export default Sidebar



                                                                                              
   