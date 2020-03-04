import React, { Component } from 'react';
import {MainHeader, SecondHeader } from '../../componet/Header.jsx';
import {ProfileHeader,} from "./component/profile/Card";
import {SocialLink,LeftSideBar,AboutContent,AboutPhoto,AboutFriend,AboutBook,AboutSport} from './component/About/Card';

export default class About extends Component {
    render() {
        return (
          <>
<main>
  <div className="main-wrapper">
  <MainHeader />
    <SecondHeader />
    <ProfileHeader />
    <SocialLink />
    <div className="about-author-details">
      <div className="container">
        <div className="row">
          <LeftSideBar />
          <AboutContent />
        </div>
      </div>
    </div>
    <AboutPhoto />
    <AboutFriend />
    <AboutBook />
    <AboutSport />
  </div>
</main>
        </>
        )
    }
}
