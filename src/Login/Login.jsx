import React, {Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Common-To-All/Navbar";
import Axios from "axios";
import "./login.css";
import { toast } from "react-toastify";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      password: "",
    };
  }

  onChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({ [name]: value });
  }

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      uname: this.state.uname,
      password: this.state.password,
      tokenId: 123,
    };

    Axios.post("http://sandbox.portalwiz.com/php/login.php", obj)
      .then(
        (res) => {
          if (res.data.message === "Login Successfully...") {
            console.log(res)
            //alert("Login Successfull");
            this.setState({
              dataSent: res.data.message,
              user_name: res.data.username,
            });
            console.log(res.data.message);
            sessionStorage.setItem("role", res.data.role);
            sessionStorage.setItem("username", res.data.username);
            if(res.data.role === "Superadmin"){
              this.props.history.push("/User");
            }
            else{this.props.history.push("/bulletin");}
          }
          else{toast.error("Invalid username or password!")}
        }
      )
      .catch((err) => console.log(err));
    //console.log(obj);
  }
  render() {
    return (
      <>
        <Navbar />
        {sessionStorage.getItem("username") ? ( <h2 style={{ textAlign: "center" }}>You are Login</h2>) : (

          <div className="card col-11 col-md-4  py-3 px-4 px-md-5 shadow mx-auto login">
          <h2 className="text-center mb-4 mt-2 head">Login Here</h2>

            <form onSubmit={this.onSubmit.bind(this)}>

              <div className="form-group text-left">
                <input
                  type="text"
                  className="form-control input_field "
                  id="uname"
                  value={this.state.uname}
                  placeholder="Username"
                  onChange={this.onChange.bind(this)}
                  autoComplete="off"
                  name="uname"
                />
              </div>

              <div className="form-group text-left">
                <input
                  type="password"
                  className="form-control input_field"
                  id="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.onChange.bind(this)}
                  autoComplete="off"
                  name="password"
                />
                  <small className="text-muted medium d-flex align-content-end justify-content-end p-2">
                    Forget &nbsp;<span><NavLink activeClassName="#" to="#">{" "}Password ?</NavLink></span> 
                  </small>
              </div>

              <button type="submit" className="btn btn-primary mb-3 ml-2 shadow">Login</button>
              <div>{this.state.dataSent && ( <div> {" "} {this.state.dataSent} {this.state.user_name} <br /> </div> )}</div>
                
            </form>

              <div className="d-flex justify-content-end align-items-center">
                <small className=" text-muted small ">Haven't Registered Yet ?</small>
                <NavLink activeClassName="#" className=" btn btn-sm m-2 py-1 btn-outline-primary" to="/signup">Signup</NavLink>
              </div>
          </div>
        )}
      </>
    );
  }
}
//export default Login;

