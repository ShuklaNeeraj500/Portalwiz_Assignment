import React, {Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Common-To-All/Navbar";
import Axios from "axios";
import "./signup.css";
import { toast } from "react-toastify";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      uname: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
   //--------------------------One onChange function is used for setting the state of various types of input fields --------------------------       
   onChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({ [name]: value });
}

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      uname: this.state.uname,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      tokenId: 123,
    };
    if (this.state.password === this.state.confirmPassword) {
      Axios.post("http://sandbox.portalwiz.com/php/insert.php", obj)
        .then((res) =>{
          // console.log(res.data)
          this.setState({
            dataSent: res.data.message,
          })
        }
        )
        .catch((err) => console.log(err));
    } else {
      toast.error("Password does not match.")
    }
  }
  render() {
    return (
      <>
        <Navbar />

        <div className="card col-11 col-md-4 mt-2 py-3 px-4 px-md-5 shadow mx-auto my-5 signup">
          <h2 className="text-center mb-4 mt-2 head">Create Account</h2>
          <form onSubmit={this.onSubmit.bind(this)}>
            {/* <div className="form-group text-left">
              <input
                type="text"
                className="form-control input_field"
                id="name"
                value={this.state.name}
                placeholder="Enter Name"
                onChange={this.onChange.bind(this)}
                autoComplete="off"
                name="name"
              />
            </div> */}
            <div className="form-group text-left">
              <input
                type="text"
                className="form-control input_field"
                id="uname"
                value={this.state.uname}
                placeholder="Enter Username"
                onChange={this.onChange.bind(this)}
                autoComplete="off"
                name="uname"
              />
            </div>
            <div className="form-group text-left">
              <input
                type="email"
                className="form-control input_field"
                id="email"
                value={this.state.email}
                placeholder="Enter Email"
                onChange={this.onChange.bind(this)}
                autoComplete="off"
                name="email"
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
            </div>
            <div className="form-group text-left">
              <input
                type="password"
                className="form-control input_field"
                id="confirmPassword"
                value={this.state.confirmPassword}
                placeholder="Confirm Password"
                onChange={this.onChange.bind(this)}
                autoComplete="off"
                name="confirmPassword"
              />
            </div>
            
            <button type="submit" className="btn btn-primary my-3 shadow">Register</button>
            <div>{this.state.dataSent && <div className="shadow-sm" style={{ color:"#113656" , fontWeight:"500" , letterSpacing:".5px"}}> {this.state.dataSent}</div>}</div>
          </form>

          <div className="d-flex justify-content-end  align-items-center">
            <small className=" text-muted small">Already a member ? </small>
            <NavLink activeClassName="#" className=" btn btn-sm m-2 btn-outline-primary" to="/">Login</NavLink>
          </div>
        </div>
      </>
    );
  }
}
//export default Signup;

