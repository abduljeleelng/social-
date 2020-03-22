import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/cathh.png'
export const MainHeader = ({profilePhoto, noProfilePhoto}) => {
    return(
<header>
  <div className="header-top sticky bg-white d-none d-lg-block">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5">
    
          <div className="header-top-navigation">
            <nav>
              <ul>
                <li ><Link to={`/`}> Home </Link></li>
                <li className="msg-trigger"><Link className="msg-trigger-btn" to="/user">Profile </Link></li>
                <li className="notification-trigger"><Link className="msg-trigger-btn" to="/">notification</Link></li>
              </ul>
            </nav>
          </div>
       
        </div>
        <div className="col-md-2">
          {/* brand logo start */}
          <div className="brand-logo text-center">
            <Link to="/">
              <img src={logo} alt="I am Catholics" />
            </Link>
          </div>
          {/* brand logo end */}
        </div>
        <div className="col-md-5">
          <div className="header-top-right d-flex align-items-center justify-content-end">
            {/* header top search start */}
            <div className="header-top-search">
              <form className="top-search-box">
                <input type="text" placeholder="Search" className="top-search-field" />
                <button className="top-search-btn"><i className="flaticon-search" /></button>
              </form>
            </div>
            {/* header top search end */}
            {/* profile picture start */}
            <div className="profile-setting-box">
              <div className="profile-thumb-small">
                <Link to="/" className="profile-triger">
                  <figure>
                    <img src={profilePhoto} onError={i=>i.target.src=`${noProfilePhoto}`} alt="profile" />
                  </figure>
                </Link>
              </div>
            </div>
            {/* profile picture end */}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
    )
}
export const SecondHeader = ({profilePhoto, noProfilePhoto}) =>{
    return(
<header>
  <div className="mobile-header-wrapper sticky d-block d-lg-none">
    <div className="mobile-header position-relative ">
      <div className="mobile-logo" style={{backgroundColor:'#fff'}}>
        <Link to="/">
          <img src={logo}  alt="logo" />
        </Link>
      </div>
      <div className="mobile-menu w-100">
        <ul>
          <li>
            <button className="notification request-trigger"><i className="flaticon-users" />
              {/*<span>03</span>*/}
            </button>
            <ul className="frnd-request-list">
              <li>
                <div className="frnd-request-member">
                  <figure className="request-thumb">
                    <a href="/user">
                      <img src={profilePhoto} onError={i=>i.target.src=`${noProfilePhoto}`} alt="proflie" />
                    </a>
                  </figure>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <button className="notification"><i className="flaticon-notification" />
              {/*<span>03</span>*/}
            </button>
          </li>
          <li>
            <button className="chat-trigger notification"><i className="flaticon-chats" />
              {/*<span>04</span>*/}
            </button>
            <div className="mobile-chat-box">
              <div className="live-chat-title">
                {/* profile picture end */}
                <div className="profile-thumb">
                  <Link to="/user">
                    <figure className="profile-thumb-small profile-active">
                      <img src={profilePhoto} onError={i=>i.target.src=`${noProfilePhoto}`} alt="profile" />
                    </figure>
                  </Link>
                </div>
                {/* profile picture end */}
                <div className="posted-author">
                  <h6 className="author"><a href="profile.html">Robart Marloyan</a></h6>
                  <span className="active-pro">active now</span>
                </div>
                <div className="live-chat-settings ml-auto">
                  <button className="chat-settings"><img src="assets/images/icons/settings.png" alt="chat " /></button>
                  <button className="close-btn"><img src="assets/images/icons/close.png" alt="chat " /></button>
                </div>
              </div>
              <div className="chat-text-field mob-text-box">
                <textarea className="live-chat-field custom-scroll" placeholder="Text Message"  />
                <button className="chat-message-send" type="submit" value="submit">
                  <img src="assets/images/icons/plane.png" alt="plan" />
                </button>
              </div>
            </div>
          </li>
          <li>
            <button className="search-trigger">
              <i className="search-icon flaticon-search" />
              <i className="close-icon flaticon-cross-out" />
            </button>
            <div className="mob-search-box">
              <form className="mob-search-inner">
                <input type="text" placeholder="Search Here" className="mob-search-field" />
                <button className="mob-search-btn"><i className="flaticon-search" /></button>
              </form>
            </div>
          </li>
        </ul>
      </div>
      <div className="mobile-header-profile" style={{backgroundColor:'#fff'}}>
        {/* profile picture end */}
        <div className="profile-thumb profile-setting-box" style={{backgroundColor:'#fff'}} >
          <Link to="/" className="profile-triger" style={{backgroundColor:'#fff'}}>
            <figure className="profile-thumb-middle" style={{backgroundColor:'#fff'}}>
              <img src={profilePhoto} onError={i=>i.target.src=`${noProfilePhoto}`} alt="profile" />
            </figure>
          </Link>
        </div>
        {/* profile picture end */}
      </div>
    </div>
  </div>
</header>
    )
}
