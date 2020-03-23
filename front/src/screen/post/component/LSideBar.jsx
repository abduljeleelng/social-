import React from 'react';
//import { Link } from 'react-router-dom';

export const Notifications = ({profilePhoto, noProfilePhoto}) =>{

        return(
<div className="card widget-item">
  <h4 className="widget-title">Recent Notifications</h4>
  <div className="widget-body">
    <ul className="like-page-list-wrapper">
      <li className="unorder-list">
        {/* profile picture end *
        <div className="profile-thumb">
          <Link to="/">
            <figure className="profile-thumb-small">
              <img src={profilePhoto} onError={i=>i.target.src=`${noProfilePhoto}`} alt="profile" />
            </figure>
          </Link>
        </div>
        {/* profile picture end *
        <div className="unorder-list-info">
          <h3 className="list-title"><Link to="/">Any one can join with us if you want</Link></h3>
          <p className="list-subtitle">5 min ago</p>
        </div>
        */}
      </li>
    </ul>
  </div>
</div>

    )
}

export const Advert = ()=>{
    return(
<div className="card widget-item">
  <h4 className="widget-title">Advertizement</h4>
  <div className="widget-body">
    <div className="add-thumb">
      {/*
      <Link to="/">
        <img src="assets/images/banner/advertise.jpg" alt="advertisement" />
      </Link>
      */}
    </div>
  </div>
</div>

    )
}
export const FriendsZOne = () =>{
    return(
<div className="card widget-item">
  <h4 className="widget-title">Friends Zone</h4>
  <div className="widget-body">
    <ul className="like-page-list-wrapper">
      <li className="unorder-list">
        {/* profile picture end *
        <div className="profile-thumb">
          <Link to="/">
            <figure className="profile-thumb-small">
              <img src="assets/images/profile/profile-small-33.jpg" alt="profile" />
            </figure>
          </Link>
        </div>
        {/* profile picture end *
        <div className="unorder-list-info">
          <h3 className="list-title"><Link to="/">Ammeya Jakson</Link></h3>
          <p className="list-subtitle"><Link to="/">10 mutual</Link></p>
        </div>
        <button className="like-button">
          <img className="heart" src="assets/images/icons/heart.png" alt="like" />
          <img className="heart-color" src="assets/images/icons/heart-color.png" alt="unlike" />
        </button>
        */}
      </li>
    </ul>
  </div>
</div>

    )
}