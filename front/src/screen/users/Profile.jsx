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
export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      auth:false,
      userId:"5e60e34db5d6003e0cdf45b2",
      redirect:false,
      redirecToPost:false,
      post:[],
      user:[],
    }
  }
  login=()=>{
    const userId = this.props.match.params.userId;
    if(isAuthenticated()){
      const {_id} = isAuthenticated().user;
      console.log("user Id "+_id);
      this.setState({auth:true,userId:userId});
    }else if(userId){
      this.setState({userId:userId});
    }else{
      this.setState({redirect:true,auth:false});
    }
  }

  loadPost(userId){
    postBy(userId).then((data,err)=>{
      if(err){
        console.log(err);
       this.setState({redirecToPost:true});
      }
      if(data.error){
         console.log(data.error)
      }else{
      this.setState({post:data.posts});
      }
    })
  }
  
  componentDidMount(){
    const userId = this.props.match.params.userId;
    //const {userId} = this.setState;
    this.login();
    this.loadPost(userId);
    userList().then(data=>{
      if(data.error){
        return console.log(data.error)
      }
      this.setState({user:data.user});
    });
  }
    render() {
      const {auth,userId,redirect,post,redirecToPost,user}=this.state;
      if(redirect){return <Redirect to="/" />}
      if(redirecToPost){return <Redirect to="/posts" />}
        return (
 <>
<main>
  <div className="main-wrapper">
    <MainHeader  userId={userId} />
    <SecondHeader userId={userId} />
    <ProfileHeader userId={userId} cover="" nocover={NoCover} photo="" nophoto={NoProfile} />
    <div className="container">
      <div className="row">
          <LeftSideBar />
          <div className="col-lg-6 order-1 order-lg-2">
          { auth ? (<CreatePost profileImage="" noProfileImage={NoProfile} />):("")}
          {post.length > 0 ? post.map((post,index)=>(
               //? `http://localhost:8080/api/posts/photo/${post._id}`: DefaultImage
               //{`${photoAPI}/${post._id}` ? `${photoAPI}/${post._id}`: 'defaultImage.jpg'}
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
