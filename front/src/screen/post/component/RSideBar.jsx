import React from 'react';
import { Link } from 'react-router-dom';
import heart from '../../../assets/images/icons/heart.png'
import heartColor from '../../../assets/images/icons/heart-color.png'
//assets/images/icons/heart.png

export const CardProfile = ({userId,coverPhoto,noCoverPhoto,user,profilePhoto, noProfilePhoto}) =>{
    return(
    //return(
<div className="card card-profile widget-item p-0">
  <div className="profile-banner">
    <figure className="profile-banner-small">
      <Link to={`/user/${userId}`}>
        <img src={coverPhoto} onError={i=>i.target.src=`${noCoverPhoto}`}  height="100" width="100%" alt="profile" />
      </Link>
      <Link to={`/user/${userId}`} className="profile-thumb-2">
        <img src={profilePhoto} onError={i=>i.target.src=`${noProfilePhoto}`} alt="profile" />
      </Link>
    </figure>
    <div className="profile-desc text-center">
    <h6 className="author"><Link to={`/user/${userId}`}>{user.firstName ? (user.firstName+" "+user.lastName):"finder user"}</Link></h6>
      <p>{user.status ? user.status:" No Status Yet"}</p>
    </div>
  </div>
</div>
    )
}

export const LikeCard = ({userId,profilePhoto,users, noProfilePhoto})=>{
    return(
<div className="card widget-item">
  <h4 className="widget-title">People you may Follow</h4>
  <div className="widget-body">
    <ul className="like-page-list-wrapper">
      {
        users.length > 0 ? users.map((user,i)=>(
          <li className="unorder-list" key={i}>
          {/* profile picture end */}
          <div className="profile-thumb">
            <Link to={`/user/${user._id}`}>
              <figure className="profile-thumb-small">
                <img src={profilePhoto} onError={i=>i.target.src=`${noProfilePhoto}`} alt="profile" />
              </figure>
            </Link>
          </div>
          {/* profile picture end */}
          <div className="unorder-list-info">
            <h3 className="list-title"><Link to={`/user/${user._id}`}>{user.firstName ? user.firstName+" "+user.lastName:"Unknow user"}</Link></h3>
            <p className="list-subtitle"><Link to={`/user/${user._id}`}>{user.status ? user.status :"user Profile"}</Link></p>
          </div>
          <button className="like-button active">
            <img className="heart" src={heart} alt="like" />
            <img className="heart-color" src={heartColor} alt="unlike" />
          </button>
        </li>

        )):("No users to follow")
      }
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
          <Link to="/">
            <figure className="profile-thumb-small">
              <img src="assets/images/profile/profile-small-28.jpg" alt="profile" />
            </figure>
          </Link>
        </div>
        {/* profile picture end */}
        <div className="unorder-list-info">
          <h3 className="list-title"><Link to="/">Any one can join with us if you want</Link></h3>
          <p className="list-subtitle">2 min ago</p>
        </div>
      </li>
    </ul>
  </div>
</div>

    )
}