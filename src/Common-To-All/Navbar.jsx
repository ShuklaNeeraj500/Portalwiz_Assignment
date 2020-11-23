import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import IconButton from "@material-ui/core/IconButton";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const [sess, setSess] = useState(sessionStorage.getItem("username"));

  const history = useHistory();

  function Clicked() {
    const target = document.getElementById("sidebar");
    target.classList.toggle("active");
    setClick(!click);
  }

  function logout() {
    if (sessionStorage.removeItem("username")) {
      window.location.reload(false);
     history.push("/")
    }
  }

  const Hem_btn = {
    backgroundColor: "#fff",
    outline: "none",
    padding: "7px",
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
    color: "#174873",
  };

  const navbar={
    backgroundColor: "#fff",
    color:"#174873",
    height:"4.5em",
    borderBottom:"5px solid #E89801",
  }

  //   if (sessionStorage.getItem("username")) {
  //     let sess = sessionStorage.getItem("username");
  //     console.log(sess);
  //   } else {
  //     console.log("out");
  //   }

  //console.log(sess);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow" style={navbar}>
        {sess ? (
          <IconButton style={Hem_btn} id="sidebarCollapse" onClick={Clicked}>{click ?(<ArrowForwardIcon
                      style={{ fontSize: "1.8rem" }} />) : (<MenuOpenIcon style={{ fontSize: "1.8rem" }} />)}
          </IconButton>
        ) : (
          <span></span>
        )}

        <a className="navbar-brand btn font-weight-bolder" style={{color:"#174873" , fontSize:"1.5em", letterSpacing:"1.5px"}}>Learning Management System</a>
        <div className="d-flex ml-auto  justify-content-center align-items-center">
          {sess ? (<EmailRoundedIcon fontSize="default" style={{ marginRight: "1rem", color:"#174873 " }} />  ) : (<span> </span>)}
 
          <h6 className=" mb-0">
            {sess ? <span>{sess}</span> : <span></span>}
          </h6>
          <ul className="navbar-nav  ">
            <li className="nav-item dropdown ">
              <a
                className="nav-link "
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <AccountCircleIcon style={{color:"#174873"}} fontSize="large" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right border-0 position-absolute"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {sess ? (
                  <NavLink
                    activeClassName="#"
                    className=" dropdown-item" style={{color:"#174873" , fontWeight:"500"}}
                    to=""
                    onClick={logout}
                  >
                    <ExitToAppIcon style={{color:"#E89801" , marginRight:"5px"}} /> Logout
                  </NavLink>
                ) : (
                  <NavLink
                    activeClassName="#"
                    className=" dropdown-item" style={{color:"#174873" , fontWeight:"500"}}
                    to="/"
                  >
                    <PermIdentityIcon style={{color:"#E89801" , marginRight:"5px"}} /> Login
                  </NavLink>
                )}
                {sess ? (
                  <NavLink activeClassName="#" className=" dropdown-item" style={{color:"#174873" , fontWeight:"500"}} to="/bulletin">
                    <PermIdentityIcon style={{color:"#E89801" , marginRight:"5px"}}/> Profile
                  </NavLink>
                ) : (
                  <NavLink
                    activeClassName="#"
                    className=" dropdown-item" style={{color:"#174873" , fontWeight:"500"}}
                    to="/signup"
                  >
                    <LoyaltyIcon style={{color:"#E89801" , marginRight:"5px"}}/> Signup
                  </NavLink>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
