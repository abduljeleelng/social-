import React, { Component } from 'react';
import {MainHeader, SecondHeader } from '../../componet/Header.jsx';
import {ProfileHeader,LeftSideBar,RightSideBar} from "./component/profile/Card";
import CreatePost from "../post/CreatePost";
import { ReadPostCard,EmptyPost } from '../post/component';
//import {isAuthenticated} from "../../auth/index";
import { Redirect } from 'react-router-dom';
import { postBy, photoAPI } from '../post/apiPost.jsx';
import {userList, user} from './API';
import DefaultImage from "../post/defaultImage.jpg";
import NoCover from "./images/mountains.jpg";
import NoProfile from "./images/avatar.jpg";
export default class profile extends Component {
  constructor(props){
    super(props);
    this.state={
      userId:"",
      redirect:false,
      redirecToPost:false,
      post:[],
      user:[],
      about:{},
    }
  }
  
 componentDidMount(){
    const userId  = this.props.match.params.userId
    this.setState({userId:userId});
    postBy(userId).then((data,err)=>{
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
    user(userId).then(data=>{
      if(data.error){return console.log(data.error)}
      this.setState({about:data})
    })
  }
  componentDidUpdate(prevProps){
    if(this.props.match.params.userId !== this.state.userId){
      const userId  = this.props.match.params.userId;
      this.setState({userId:userId});
      postBy(userId).then((data,err)=>{
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
      user(userId).then(data=>{
        if(data.error){return console.log(data.error)}
        this.setState({about:data})
      })
    }
  }
    render() {
      const {auth,userId,redirect,post,user,about}=this.state;
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
          <LeftSideBar about={about}   />
          <div className="col-lg-6 order-1 order-lg-2">
          <CreatePost profileImage="" noProfileImage={NoProfile} />
          { post.length > 0 ? post.map((post,index)=>(
               <ReadPostCard key={index} auth={auth} post={post} postImage={photoAPI+post._id} noImage={DefaultImage} imageAlt={post.title} profilePhoto="" noProfilePhoto={NoProfile} />
                )):<EmptyPost post={{"title":"No Post !!!","detail":" this user don't have any post for now"}} />
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
