import React from 'react';
import {Link} from 'react-router-dom';
export const MainHeader = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-2 text-center">logo</div>
                    <div className="col-md-6 text-center"> <input className="form-control" placeholder="Search ..." /></div>
                    <div className="col-md-4 text-center"> &nbsp;&nbsp;&nbsp;  <Link to="/" className="Link" style={{color:'#ffffff', borderColor:"#ffffff",borderSize:2}}> Posts </Link> &nbsp; &nbsp; <Link to="/SignUp" style={{color:'#ffffff', borderColor:"#ffffff",borderSize:2}} className="Link">  Register </Link> &nbsp; &nbsp; <Link to="/SignIn" style={{color:'#ffffff', borderColor:"#ffffff",borderSize:2}} className="Link">  Login </Link>  </div>
                </div>
            </div>
        </div>
    )
}
export const ProfileHeader = ()=>{
    return(
        <h2>Profile Header</h2>
    )
}
export const FollowHeader = ()=>{
    return(
        <h2>Follow Headers </h2>
    )
}