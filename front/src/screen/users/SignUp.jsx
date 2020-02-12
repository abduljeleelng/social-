import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import SweetAlert from 'sweetalert2-react'

import Login from '../../componet/users/Login';

import {signup } from '../../auth';


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

export default class SignUp extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:"",
            firstName:"",
            lastName:"",
            age:"",
            country:"",
            gender:"",
            error : "",
            regError:"",
            message:'',
            loading :false,
            user:"",
            redirecTo:false,
            note:false,
        }
    }
    handleChange = name => e =>{
        this.setState({[name]:e.target.value});
        this.setState({message:'',error:'',note:false,redirecTo:false,regError:""});
    };
    HandleSignUp =e=>{
        e.preventDefault();
        this.setState({loading:true});
        const {email,password,firstName,lastName,gender,age,country}=this.state;
        const user = {email,password,firstName,lastName,gender,age,country};
        console.log(JSON.stringify(user));
        signup(user).then(data=>{
            console.log(JSON.stringify(data))
            if(data.errors || data.error || data===undefined){
                this.setState({regError:data.errors || data.error});
                this.setState({loading:false});
            }else{
                this.setState({loading:false,message:data.messages,note:true});
            }
        })
    };

    render() {
        const {email,password,firstName,lastName,gender,age,country,loading,regError ,redirecTo,note,message} = this.state;
        if(redirecTo){return <Redirect to="Posts" />}
        return (
            <>
            <SweetAlert
                  show={note}
                  title="Account"
                  text={message}
                  onConfirm={() => this.setState({note:false })}
              />
<main>
  <div className="main-wrapper pb-0 mb-0">
    <div className="timeline-wrapper">
      <div className="timeline-header">
        <div className="container-fluid p-0">
          <div className="row no-gutters align-items-center">
            <div className="col-lg-6">
              <div className="timeline-logo-area d-flex align-items-center">
                <div className="timeline-logo">
                  <a href="/">
                    <img src="assets/images/logo/logo.png" alt="timeline logo" />
                  </a>
                </div>
                <div className="timeline-tagline">
                  <h6 className="tagline">It’s helps you to connect and share with the people in your life</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/*** login component here  */}
              <Login />
            </div>
          </div>
        </div>
      </div>
      <div className="timeline-page-wrapper">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="timeline-bg-content bg-img" data-bg="../../assets/images/timeline/adda-timeline.jpg">
                <h3 className="timeline-bg-title">Let’s see what’s happening to you and your world. Welcome I am a Catholic.</h3>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center justify-content-center">
              <div className="signup-form-wrapper">
                <h1 className="create-acc text-center">Create An Account</h1>
                <div className="signup-inner text-center">
                  <h3 className="title">Wellcome, I am a Catholic </h3>
                  <form className="signup-inner--form">
                    <div className="row">
                        <p>{regError}  </p>
                      <div className="col-12">
                        <input type="email" value={email} onChange={this.handleChange("email")} className="single-field" placeholder="Email" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" value={firstName} onChange={this.handleChange("firstName")}  className="single-field" placeholder="First Name" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" value={lastName} onChange={this.handleChange("lastName")}  className="single-field" placeholder="Last Name" />
                      </div>
                      <div className="col-12">
                        <input type="password" value={password} onChange={this.handleChange("password")}  className="single-field" placeholder="Password" />
                      </div>
                      <div className="col-md-6">
                        <select className="nice-select" value={gender} onChange={this.handleChange("gender")}  name="sortby">
                          <option value="00">Gender</option>
                          <option value="01">Male</option>
                          <option value="02">Female</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <select className="nice-select" value={age} onChange={this.handleChange("age")}  name="sortby">
                          <option value="00">Age</option>
                          <option value="01">18+</option>
                          <option value="02">18-</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <select className="nice-select" value={country} onChange={this.handleChange("country")}  name="sortby">
                          <option value="00">Country</option>
                          <option value="Nigeria"> Nigeria</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                      <div className="col-12">
                        {loading ? ("loading ......"):(<button className="submit-btn" onClick={this.HandleSignUp}>Create Account</button>)}
                      </div>
                    </div>
                    <h6 className="terms-condition">I have read &amp; accepted the <a href="#">terms of use</a></h6>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

</>
        )
    }
}
