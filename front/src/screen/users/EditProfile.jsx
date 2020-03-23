import React, { Component } from 'react';
import {MainHeader, SecondHeader } from '../../componet/Header.jsx';
import {ProfileHeader,LeftSideBar,RightSideBar} from "./component/profile/Card";
import { Redirect } from 'react-router-dom';
import {userList, user} from './API';
import DefaultImage from "../post/defaultImage.jpg";
import NoCover from "./images/mountains.jpg";
import NoProfile from "./images/avatar.jpg";
import Status from "./component/profile/Status";
import Edit from './component/profile/Edit.jsx';
import { isAuthenticated } from '../../auth/index.js';

export default class EditProfile extends Component {
  constructor(props){
    super(props);
    this.state={
        user:[],
        about:{},
    }
  }
  
  async componentDidMount(){
    try {
      const userId = isAuthenticated().user._id ;
      userList().then(data=>{
        if(data.error){
          return console.log(data.error)
        }
        this.setState({user:data.user});
      });
      user(userId).then(data=>{
        if(data.error){ return console.log(data.error)}
        this.setState({about:data})
      })
      
    }catch (error){
      console.log(error)
    }


  }
    render() {
      const {userId,redirect,about, user}=this.state;
      if(redirect){return <Redirect to="/" />}
        return (
 <>
<main>
  <div className="main-wrapper">
    <MainHeader  noProfilePhoto={NoProfile} profilePhoto="" />
    <SecondHeader noProfilePhoto={NoProfile} profilePhoto="" />
    <ProfileHeader userId={userId} cover="" nocover={NoCover} photo="" nophoto={NoProfile} />
    <div className="container">
      <div className="row">
          <LeftSideBar about={about} />
          <div className="col-lg-6 order-1 order-lg-2">
          <Status profileImage="" noProfileImage={NoProfile} />
          <Edit profileImage="" noProfilePhoto={NoProfile} noImage={DefaultImage}  />
          </div>
          <RightSideBar user={user} profileImage="" noProfilePhoto={NoProfile} noImage={DefaultImage} />
      </div>
    </div>
  </div>
</main>
 </>
        )
    }
}
