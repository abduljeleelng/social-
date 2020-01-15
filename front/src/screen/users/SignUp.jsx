import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { MainHeader } from '../../componet/Header';
import { Footer } from '../../componet/Footer';

export default class SignUp extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:"",
            error : false,
            message:'',
        }
    }
    handleChange = name => e =>{
        this.setState({[name]:e.target.value});
        this.setState({message:'',error:''});
    };

    HandleSignUp =e=>{
        e.preventDefault();
        const {email,password}=this.state;
        const user = {email,password};
        console.log(JSON.stringify(user));
    };

    render() {
        return (
            <>
            <MainHeader />
            <div className="container-fluid">
                <br /><br /><br />
                <div className="row">
                    <div className="col-md-8 bg-signup">
                    </div>
                    <div className="col-md-3">
                        <h2>Register  </h2>
                        <hr />
                            <form>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" onChange={this.handleChange("email")} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" onChange={this.handleChange("password")}  />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input"  />
                                <label className="form-check-label">Check me out</label>
                            </div>
                            <button type="submit" onClick={this.HandleSignUp} className="btn btn-success push-right">Register  </button>
                            </form>
                            <p>I  have an account <Link to="/SignIn">Login </Link></p>
                            <p>Forget password <Link to="/SignIn">Click here  </Link></p>
                    </div>
                    <div className="col-md-1">
                    </div>
                </div>
            </div>
            <Footer />
            </>
        )
    }
}
