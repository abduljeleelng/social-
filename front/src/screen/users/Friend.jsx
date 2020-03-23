import React, { Component } from 'react';
import {MainHeader, SecondHeader } from '../../componet/Header.jsx';
import {ProfileHeader} from "./component/profile/Card";
import { Link } from 'react-router-dom';
import NoCover from "./images/mountains.jpg";
import NoProfile from "./images/avatar.jpg";
import { isAuthenticated } from '../../auth/index.js';
import { user, userList } from './API/index.jsx';
//import NoProfile from "./images/avatar.jpg";

export default class Friend extends Component {
  constructor(){
    super();
    this.state={
      userId:"",
      user:"",
      users:"",
      
    }
  }

  async componentDidMount(){
    try{
      const userId = await isAuthenticated().user._id;
      this.setState({userId:userId});
      user(userId).then(data=>{
        if(data.error){return console.log(data.error)}
        this.setState({user:data});
      })
      userList().then(data=>{
        if(data.error){return console.log(data.error)};
        this.setState({users:data.user})
      })
    }catch(error){return console.log(error)}
  }
    render() {
      const {userId,user,users}= this.state;
      //console.log(JSON.stringify(user));
      //console.log(JSON.stringify(users))
        return (
          <>
          <MainHeader  noProfilePhoto={NoProfile} profilePhoto="" />
          <SecondHeader  noProfilePhoto={NoProfile} profilePhoto="" />
<main>
  <div className="main-wrapper">
    <ProfileHeader userId={userId} cover="" nocover={NoCover} photo="" nophoto={NoProfile} />
    {/* sendary menu start */}
    <div className="menu-secondary">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="secondary-menu-wrapper secondary-menu-2 bg-white">
              <div className="page-title-inner">
                <h4 className="page-title">friends {users.length}</h4>
              </div>
              <div className="filter-menu">
                <button className="active" data-filter="*">all</button>
                <button data-filter=".recently">recently</button>
                <button data-filter=".relative">relative</button>
                <button data-filter=".collage">collage</button>
                <button data-filter=".request">request</button>
              </div>
            {/*
              <div className="post-settings-bar">
                <span />
                <span />
                <span />
                <div className="post-settings arrow-shape">
                  <ul>
                    <li><button>edit profile</button></li>
                    <li><button>activity log</button></li>
                    <li><button>embed adda</button></li>
                  </ul>
                </div>
              </div>
            
            */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* sendary menu end */}
    {/* photo section start */}
    <div className="friends-section mt-20">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content-box friends-zone">
              <div className="row mt--20 friends-list">
                {
                  users.length > 0 ? users.map((users,i)=>(
                    <div className="col-lg-3 col-sm-6 recently " key={i}>
                    <div className="friend-list-view">
                      {/* profile picture end */}
                      <div className="profile-thumb">
                        <Link to={`/user/${users._id}`}>
                          <figure className="profile-thumb-middle">
                            <img src="" onError={i=>i.target.src=`${NoProfile}`} alt="profile" />
                          </figure>
                        </Link>
                      </div>
                      {/* profile picture end */}
                      <div className="posted-author">
                        <h6 className="author"><Link to="/user">Kate Midiltoin</Link></h6>
                        <button className="add-frnd">add friend</button>
                      </div>
                    </div>
                  </div>
                  )):("")
                }
                                {
                  user.followers > 0 ? user.followers.map((users,i)=>(
                    <div className="col-lg-3 col-sm-6 collage " key={i}>
                    <div className="friend-list-view">
                      {/* profile picture end */}
                      <div className="profile-thumb">
                        <Link to={`/user/${users._id}`}>
                          <figure className="profile-thumb-middle">
                            <img src="" onError={i=>i.target.src=`${NoProfile}`} alt="profile" />
                          </figure>
                        </Link>
                      </div>
                      {/* profile picture end */}
                      <div className="posted-author">
                        <h6 className="author"><Link to="/user">Kate Midiltoin</Link></h6>
                        <button className="add-frnd">add friend</button>
                      </div>
                    </div>
                  </div>
                  )):("" )
                }
                                                {
                  user.following > 0 ? user.following.map((users,i)=>(
                    <div className="col-lg-3 col-sm-6 relative " key={i}>
                    <div className="friend-list-view">
                      {/* profile picture end */}
                      <div className="profile-thumb">
                        <Link to={`/user/${users._id}`}>
                          <figure className="profile-thumb-middle">
                            <img src="" onError={i=>i.target.src=`${NoProfile}`} alt="profile" />
                          </figure>
                        </Link>
                      </div>
                      {/* profile picture end */}
                      <div className="posted-author">
                        <h6 className="author"><Link to="/user">Kate Midiltoin</Link></h6>
                        <button className="add-frnd">add friend</button>
                      </div>
                    </div>
                  </div>
                  )):("")
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* photo section end */}
  </div>
</main>
</>
        )
    }
}
