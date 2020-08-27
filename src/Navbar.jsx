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
        <a class="navbar-brand btn text-white font-weight-bolder align-self-center" id="sidebarCollapse">
            <FormatAlignLeftIcon />
            Controller
        </a>
            <ul class="navbar-nav ml-auto ">
                <li class="nav-item dropdown dropdown-item-text">
                    <a class="nav-link dropdown-toggle pr-3" href="#" id="navbarDropdownMenuLink" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Account  </a>
                    <div class="dropdown-menu  bg-white border-0" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#"><PermIdentityIcon /> Login</a>
                        <a class="dropdown-item" href="#"><LoyaltyIcon /> Signup</a>     
                    </div>
                </li>
            </ul>
     </nav>
    </>
    )
}
export default Navbar