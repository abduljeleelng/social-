import React, { Component } from 'react';
import {MainHeader, SecondHeader } from '../../componet/Header.jsx';
import {ProfileHeader,LeftSideBar,RightSideBar,FriendZone,NotificationZone,AdvertZone} from "./component/profile/Card";
import CreatePost from "../post/CreatePost";
import { ReadPostCard,EmptyPost } from '../../componet/Card.jsx';
import {isAuthenticated} from "../../auth/index";
import { Redirect } from 'react-router-dom';
import { postBy,photoAPI } from '../post/apiPost.jsx';
import {userList} from './API';
import DefaultImage from "../post/defaultImage.jpg";
import NoCover from "./images/mountains.jpg";
import NoProfile from "./images/avatar.jpg";
import Status from "./component/profile/Status";
import Edit from './component/profile/Edit.jsx';



export default class EditProfile extends Component {
  constructor(props){
    super(props);
    this.state={
        user:[],
    }
  }
  
  componentDidMount(){
    userList().then(data=>{
        if(data.error){
          return console.log(data.error)
        }
        this.setState({user:data.user});
      });

  }
    render() {
      const {userId,redirect, user}=this.state;
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
          <LeftSideBar />
          <div className="col-lg-6 order-1 order-lg-2">
          <Status profileImage="" noProfileImage={NoProfile} />
          <Edit profileImage="" noProfilePhoto={NoProfile} noImage={DefaultImage} />
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
