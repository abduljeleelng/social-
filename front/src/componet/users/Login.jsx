import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import {signin, authenticate } from '../../auth';


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:"",
            error : "",
            loading :false,
            redirecTo:false,
            user:""
        }
    }
    
    handleChange = name => e =>{
        this.setState({[name]:e.target.value});
        this.setState({message:'',error:'',redirecTo:false,});
    };

    handleSignIn=e=>{
        e.preventDefault();
        this.setState({loading:true});
        const {email,password}=this.state;
        const user = {email,password};
        console.log(JSON.stringify(user));
         if (password !== "" && validateEmail(email)){
             signin(user)
             .then(data=>{
                 if(data===undefined){
                    this.setState({loading:false});
                    this.setState({error:"network | Internal server Error"});
                 }
                 else if(data.token){
                 authenticate(data,()=>{
                     this.setState({user:data.user,redirecTo:true,email:"",password:"",loading:false});
                 })
                }
                else if (data.error){
                    this.setState({loading:false});
                    this.setState({error:data.error});
                }
                else{
                    this.setState({loading:false});
                    this.setState({error:"Undentify Error, Conatct Web Admin"});
                }
             })
        }
        else{
            this.setState({loading:false});
            this.setState({error:"Enter valid email and Password"});
        }
    }


    render() {
        const {email,password,loading,error,redirecTo,user} = this.state;
        //if(redirecTo){return <Redirect to={`/${user._id}`} />}
        if(redirecTo){return <Redirect to="/posts" />}
        
        return (
            <div className="login-area">
            <div className="row align-items-center">
              <div className="col-12 col-sm">
                <input type="email" onChange={this.handleChange("email")} value={email} placeholder="Email " className="single-field" />
              </div>
              <div className="col-12 col-sm">
                <input type="password" onChange={this.handleChange("password")} value={password} placeholder="Password" className="single-field" />
              </div>
              <div className="col-12 col-sm-auto">
                {loading ? ("loading ...."):(<button onClick={this.handleSignIn} className="login-btn">Login</button>)}
              </div>
            </div>
            <p style={{color:'white'}}> {error} </p>
          </div>
        )
    }
}
