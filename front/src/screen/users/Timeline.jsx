import React, { Component } from 'react';
import {MainHeader, SecondHeader } from '../../componet/Header.jsx';
import {ProfileHeader,LeftSideBar,RightSideBar,FriendZone,NotificationZone,AdvertZone} from "./component/profile/Card";
import CreatePost from "../post/CreatePost";
import { ReadPostCard,EmptyPost } from '../../componet/Card.jsx';
import {isAuthenticated} from "../../auth/index";
import { Redirect } from 'react-router-dom';
import { postBy, photoAPI } from '../post/apiPost.jsx';
import {userList} from './API';
import DefaultImage from "../post/defaultImage.jpg";
import NoCover from "./images/mountains.jpg";
import NoProfile from "./images/avatar.jpg";
export default class Timeline extends Component {
  constructor(props){
    super(props);
    this.state={
      userId:"",
      redirect:false,
      redirecToPost:false,
      post:[],
      user:[],
    }
  }
  
 componentDidMount(){
    const { _id } = isAuthenticated().user;
    this.setState({userId:_id});
    postBy(_id).then((data,err)=>{
        if(err){
            console.log(err)
         //this.setState({redirecToPost:true});
        }
        if(data.error){
           console.log(data.error)
        }else{
        this.setState({post:data.posts});
        }
    })
    userList().then(data=>{
      if(data.error){
        return console.log(data.error)
      }
      this.setState({user:data.user});
    });
  }
    render() {
      const {auth,userId,redirect,post,user}=this.state;
      if(redirect){ return <Redirect to="/" />}
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
          <CreatePost profileImage="" noProfileImage={NoProfile} />
          { post.length > 0 ? post.map((post,index)=>(
               <ReadPostCard key={index} auth={auth} post={post} postImage={photoAPI+post._id} noImage={DefaultImage} imageAlt={post.title} profilePhoto="" noProfilePhoto={NoProfile} />
                )):<EmptyPost post={post} />
          }
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
