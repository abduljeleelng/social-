import React,{Fragment} from 'react';

export const CardProfile = () =>{
    return(
    //return(
<div className="card card-profile widget-item p-0">
  <div className="profile-banner">
    <figure className="profile-banner-small">
      <a href="profile.html">
        <img src="assets/images/banner/banner-small.jpg" alt />
      </a>
      <a href="profile.html" className="profile-thumb-2">
        <img src="assets/images/profile/profile-midle-1.jpg" alt />
      </a>
    </figure>
    <div className="profile-desc text-center">
      <h6 className="author"><a href="profile.html">Dimbel Lebmid</a></h6>
      <p>Any one can join with but Social network us if you want Any one can join with us if you want</p>
    </div>
  </div>
</div>
    )
}

export const LikeCard = ()=>{
    return(
<div className="card widget-item">
  <h4 className="widget-title">page you may like</h4>
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
          <h3 className="list-title"><a href="#">Travel The World</a></h3>
          <p className="list-subtitle"><a href="#">adventure</a></p>
        </div>
        <button className="like-button active">
          <img className="heart" src="assets/images/icons/heart.png" alt />
          <img className="heart-color" src="assets/images/icons/heart-color.png" alt />
        </button>
      </li>
    </ul>
  </div>
</div>

    )
}

export const TopNew = () =>{
    return(
<div className="card widget-item">
  <h4 className="widget-title">latest top news</h4>
  <div className="widget-body">
    <ul className="like-page-list-wrapper">
      <li className="unorder-list">
        {/* profile picture end */}
        <div className="profile-thumb">
          <a href="#">
            <figure className="profile-thumb-small">
              <img src="assets/images/profile/profile-small-28.jpg" alt="profile picture" />
            </figure>
          </a>
        </div>
        {/* profile picture end */}
        <div className="unorder-list-info">
          <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
          <p className="list-subtitle">2 min ago</p>
        </div>
      </li>
    </ul>
  </div>
</div>

    )
}