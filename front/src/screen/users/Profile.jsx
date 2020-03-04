import React, { Component } from 'react';

import {MainHeader, SecondHeader } from '../../componet/Header.jsx';
import {ProfileHeader,LeftSideBar,RightSideBar} from "./component/profile/Card";
import CreatePost from "../post/CreatePost";
import { ReadPostCard,EmptyPost } from '../../componet/Card.jsx';
import {isAuthenticated} from "../../auth/index";
import { Redirect } from 'react-router-dom';
import { postBy,photoAPI } from '../post/apiPost.jsx';
import DefaultImage from "../post/defaultImage.jpg";
export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      auth:false,
      userId:"",
      redirect:false,
      redirecToPost:false,
      post:[],
    }
  }
  login=()=>{
    const userId = this.props.match.params.userId;
    if(isAuthenticated()){
      const token = isAuthenticated().token;
      const {_id} = isAuthenticated().user;
      this.setState({auth:true,userId:_id});
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
    const {userId}=this.state;
    console.log("userid A"+JSON.stringify(userId));
    this.login();
    this.loadPost("5e13098730d38e3e9cf75056");
  }
    render() {
      const {auth,userId,redirect,post,redirecToPost}=this.state;
      if(redirect){return <Redirect to="/" />}
      if(redirecToPost){return <Redirect to="/posts" />}
       console.log(JSON.stringify(post));
        return (
 <>
<main>
  <div className="main-wrapper">
    <MainHeader />
    <SecondHeader />
    <ProfileHeader />
    <div className="container">
      <div className="row">
          <LeftSideBar />
          <div className="col-lg-6 order-1 order-lg-2">
          { auth ? (<CreatePost />):("")}
          {post.length > 0 ? post.map((post,index)=>(
               //? `http://localhost:8080/api/posts/photo/${post._id}`: DefaultImage
               //{`${photoAPI}/${post._id}` ? `${photoAPI}/${post._id}`: 'defaultImage.jpg'}
               <ReadPostCard key={index} auth={auth} post={post} postImage={photoAPI+post._id} noImage={DefaultImage} imageAlt={post.title} />
                )):<EmptyPost post={post} />
            }
          </div>
          <RightSideBar />
      </div>
    </div>
  </div>
</main>
 </>
        )
    }
}
