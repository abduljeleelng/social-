import React,{Fragment} from 'react';

export const Notifications = () =>{

        return(
<div className="card widget-item">
  <h4 className="widget-title">Recent Notifications</h4>
  <div className="widget-body">
    <ul className="like-page-list-wrapper">
      <li className="unorder-list">
        {/* profile picture end */}
        <div className="profile-thumb">
          <a href="#">
            <figure className="profile-thumb-small">
              <img src="assets/images/profile/profile-small-9.jpg" alt="profile picture" />
            </figure>
          </a>
        </div>
        {/* profile picture end */}
        <div className="unorder-list-info">
          <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
          <p className="list-subtitle">5 min ago</p>
        </div>
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
      <a href="#">
        <img src="assets/images/banner/advertise.jpg" alt="advertisement" />
      </a>
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
        {/* profile picture end */}
        <div className="profile-thumb">
          <a href="#">
            <figure className="profile-thumb-small">
              <img src="assets/images/profile/profile-small-33.jpg" alt="profile picture" />
            </figure>
          </a>
        </div>
        {/* profile picture end */}
        <div className="unorder-list-info">
          <h3 className="list-title"><a href="#">Ammeya Jakson</a></h3>
          <p className="list-subtitle"><a href="#">10 mutual</a></p>
        </div>
        <button className="like-button">
          <img className="heart" src="assets/images/icons/heart.png" alt />
          <img className="heart-color" src="assets/images/icons/heart-color.png" alt />
        </button>
      </li>
    </ul>
  </div>
</div>

    )
}