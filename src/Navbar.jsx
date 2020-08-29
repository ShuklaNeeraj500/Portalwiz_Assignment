import React from "react"
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import $ from 'jquery';

const Navbar =()=>{
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        });
        })
    return(
    < >
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#81b214'}} >
        <a className="navbar-brand btn text-white font-weight-bolder pl-0" id="sidebarCollapse"><FormatAlignLeftIcon /> Controller
        </a>
            <ul className="navbar-nav ml-auto ">
                <li className="nav-item dropdown dropdown-item-text">
                    <a className="nav-link dropdown-toggle pr-4 text-white" href="#" id="navbarDropdownMenuLink" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account </a>
                    <div className="dropdown-menu  bg-white border-0 position-absolute" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item " href="#">  <PermIdentityIcon /> Login</a>
                        <a className="dropdown-item" href="#"><LoyaltyIcon /> Signup</a>     
                    </div>
                </li>
            </ul>
     </nav>
    </>
    )
}
export default Navbar