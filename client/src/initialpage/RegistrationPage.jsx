/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo} from '../Entryfile/imagepath.jsx'


class Registrationpage extends Component {
   //takes user input
   constructor(){
    super();
    this.state={
      user_email:'',
      password:'',
      password_repeat:'',
      errors:{}
    }
    //joins it to onChange fun
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    }
    onChange(e){
      this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(s){
      s.preventDefault();
    
      const newUser={
        user_email:this.state.email,
        password:this.state.password,
        password_repeat:this.state.password_repeat
      }
      
      axios.post('/light/register',newUser)
      .then(res=> console.log(res.data))
      .catch(err=>console.log(err.response.data));
      }
      //  state = {
  //     email: 'demo@example.com',
  //     password: 'test#123',
  //     repeatpassword:''
  //  }

	/**
	 * On User Login
	 */
   onUserLogin = e => {
      e.preventDefault();
      
      if (this.state.email !== '' && this.state.password !== '') {
         this.props.signinUserInFirebase(this.state, this.props.history);

         
      }
    }

    onApplyJob = e => {
        e.preventDefault();
        localStorage.removeItem('jobview')
        this.props.history.push('/applyjob/joblist')
    }

   render() {
      // const { user_email, password } = this.state;
      // const { loading } = this.props;
      return (
            
            <div className="main-wrapper">
              <Helmet>
                  <title>Register - HRMS Seeta High School</title>
                  <meta name="description" content="Login page"/>					
            </Helmet> 
        <div className="account-content">
          {/* <a href="/light/applyjob/joblist" 
            className="btn btn-primary apply-btn">Apply Job
          </a> */}
          <div className="container">
            {/* Account Logo */}
            <div className="account-logo">
              <a href="/light/app/main/dashboard">
                <img src={Applogo} alt="Dreamguy's Technologies" />
              </a>
            </div>
            {/* /Account Logo */}
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Register</h3>
                <p className="account-subtitle">To Access Dashboard</p>
                {/* Account Form */}
                <form action="" method="POST">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input className="form-control" 
                      name="user_email" type="email" 
                      placeholder="Enter your email"/>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" name="password_repeat"
                    type="password" placeholder="Enter password"/>
                  </div>
                  <div className="form-group">
                    <label>Repeat Password</label>
                    <input className="form-control" type="password" 
                    placeholder="Repeat Password"/>
                  </div>
                  <div className="form-group text-center">
                    <button className="btn btn-primary account-btn" type="submit">Register</button>
                  </div>
                  <div className="account-footer">
                    <p>Already have an account? <a href="/light/login">Login</a></p>
                  </div>
                </form>
                {/* /Account Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
      );
   }
}


export default Registrationpage;
