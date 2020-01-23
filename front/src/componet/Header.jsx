import React from 'react';
import {Link} from 'react-router-dom';
export const MainHeader = () => {
    return(
        <header>
  <div className="header-top sticky bg-white d-none d-lg-block">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5">
          {/* header top navigation start */}
          <div className="header-top-navigation">
            <nav>
              <ul>
                <li className="active"><a href="index.html">home</a></li>
                <li className="msg-trigger"><a className="msg-trigger-btn" href="#a">message</a>
                  <div className="message-dropdown" id="a">
                    <div className="dropdown-title">
                      <p className="recent-msg">recent message</p>
                      <div className="message-btn-group">
                        <button>New group</button>
                        <button>New Message</button>
                      </div>
                    </div>
                    <ul className="dropdown-msg-list">
                      <li className="msg-list-item d-flex justify-content-between">
                        {/* profile picture end */}
                        <div className="profile-thumb">
                          <figure className="profile-thumb-middle">
                            <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture" />
                          </figure>
                        </div>
                        {/* profile picture end */}
                        {/* message content start */}
                        <div className="msg-content">
                          <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
                          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                        </div>
                        {/* message content end */}
                        {/* message time start */}
                        <div className="msg-time">
                          <p>25 Apr 2019</p>
                        </div>
                        {/* message time end */}
                      </li>
                      <li className="msg-list-item d-flex justify-content-between">
                        {/* profile picture end */}
                        <div className="profile-thumb">
                          <figure className="profile-thumb-middle">
                            <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture" />
                          </figure>
                        </div>
                        {/* profile picture end */}
                        {/* message content start */}
                        <div className="msg-content">
                          <h6 className="author"><a href="profile.html">Jhon Doe</a></h6>
                          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                        </div>
                        {/* message content end */}
                        {/* message time start */}
                        <div className="msg-time">
                          <p>15 May 2019</p>
                        </div>
                        {/* message time end */}
                      </li>
                      <li className="msg-list-item d-flex justify-content-between">
                        {/* profile picture end */}
                        <div className="profile-thumb">
                          <figure className="profile-thumb-middle">
                            <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture" />
                          </figure>
                        </div>
                        {/* profile picture end */}
                        {/* message content start */}
                        <div className="msg-content">
                          <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                        </div>
                        {/* message content end */}
                        {/* message time start */}
                        <div className="msg-time">
                          <p>20 Jun 2019</p>
                        </div>
                        {/* message time end */}
                      </li>
                    </ul>
                    <div className="msg-dropdown-footer">
                      <button>See all in messenger</button>
                      <button>Mark All as Read</button>
                    </div>
                  </div>
                </li>
                <li className="notification-trigger"><a className="msg-trigger-btn" href="#b">notification</a>
                  <div className="message-dropdown" id="b">
                    <div className="dropdown-title">
                      <p className="recent-msg">Notification</p>
                      <button>
                        <i className="flaticon-settings" />
                      </button>
                    </div>
                    <ul className="dropdown-msg-list">
                      <li className="msg-list-item d-flex justify-content-between">
                        {/* profile picture end */}
                        <div className="profile-thumb">
                          <figure className="profile-thumb-middle">
                            <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture" />
                          </figure>
                        </div>
                        {/* profile picture end */}
                        {/* message content start */}
                        <div className="msg-content notification-content">
                          <a href="profile.html">Robert Faul</a>,
                          <a href="profile.html">william jhon</a>
                          <p>and 35 other people reacted to your photo</p>
                        </div>
                        {/* message content end */}
                        {/* message time start */}
                        <div className="msg-time">
                          <p>25 Apr 2019</p>
                        </div>
                        {/* message time end */}
                      </li>
                      <li className="msg-list-item d-flex justify-content-between">
                        {/* profile picture end */}
                        <div className="profile-thumb">
                          <figure className="profile-thumb-middle">
                            <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture" />
                          </figure>
                        </div>
                        {/* profile picture end */}
                        {/* message content start */}
                        <div className="msg-content notification-content">
                          <a href="profile.html">Robert mushkil</a>,
                          <a href="profile.html">Terry jhon</a>
                          <p>and 20 other people reacted to your photo</p>
                        </div>
                        {/* message content end */}
                        {/* message time start */}
                        <div className="msg-time">
                          <p>20 May 2019</p>
                        </div>
                        {/* message time end */}
                      </li>
                      <li className="msg-list-item d-flex justify-content-between">
                        {/* profile picture end */}
                        <div className="profile-thumb">
                          <figure className="profile-thumb-middle">
                            <img src="assets/images/profile/profile-small-6.jpg" alt="profile picture" />
                          </figure>
                        </div>
                        {/* profile picture end */}
                        {/* message content start */}
                        <div className="msg-content notification-content">
                          <a href="profile.html">Horijon Mbala</a>,
                          <a href="profile.html">Bashu jhon</a>
                          <p>and 55 other people reacted to your post</p>
                        </div>
                        {/* message content end */}
                        {/* message time start */}
                        <div className="msg-time">
                          <p>15 Jan 2019</p>
                        </div>
                        {/* message time end */}
                      </li>
                    </ul>
                    <div className="msg-dropdown-footer">
                      <button>See all in messenger</button>
                      <button>Mark All as Read</button>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          {/* header top navigation start */}
        </div>
        <div className="col-md-2">
          {/* brand logo start */}
          <div className="brand-logo text-center">
            <a href="index.html">
              <img src="assets/images/logo/logo.png" alt="brand logo" />
            </a>
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
                <a href="javascript:void(0)" className="profile-triger">
                  <figure>
                    <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture" />
                  </figure>
                </a>
                <div className="profile-dropdown">
                  <div className="profile-head">
                    <h5 className="name"><a href="#">Madison Howard</a></h5>
                    <a className="mail" href="#">mailnam@mail.com</a>
                  </div>
                  <div className="profile-body">
                    <ul>
                      <li><a href="profile.html"><i className="flaticon-user" />Profile</a></li>
                      <li><a href="#"><i className="flaticon-message" />Inbox</a></li>
                      <li><a href="#"><i className="flaticon-document" />Activity</a></li>
                    </ul>
                    <ul>
                      <li><a href="#"><i className="flaticon-settings" />Setting</a></li>
                      <li><a href="signup.html"><i className="flaticon-unlock" />Sing out</a></li>
                    </ul>
                  </div>
                </div>
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
export const SecondHeader = () =>{
    return(
<header>
  <div className="mobile-header-wrapper sticky d-block d-lg-none">
    <div className="mobile-header position-relative ">
      <div className="mobile-logo">
        <a href="index.html">
          <img src="assets/images/logo/logo-white.png" alt="logo" />
        </a>
      </div>
      <div className="mobile-menu w-100">
        <ul>
          <li>
            <button className="notification request-trigger"><i className="flaticon-users" />
              <span>03</span>
            </button>
            <ul className="frnd-request-list">
              <li>
                <div className="frnd-request-member">
                  <figure className="request-thumb">
                    <a href="profile.html">
                      <img src="assets/images/profile/profile-midle-1.jpg" alt="proflie author" />
                    </a>
                  </figure>
                  <div className="frnd-content">
                    <h6 className="author"><a href="profile.html">merry watson</a></h6>
                    <p className="author-subtitle">Works at HasTech</p>
                    <div className="request-btn-inner">
                      <button className="frnd-btn">confirm</button>
                      <button className="frnd-btn delete">delete</button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="frnd-request-member">
                  <figure className="request-thumb">
                    <a href="profile.html">
                      <img src="assets/images/profile/profile-midle-2.jpg" alt="proflie author" />
                    </a>
                  </figure>
                  <div className="frnd-content">
                    <h6 className="author"><a href="profile.html">merry watson</a></h6>
                    <p className="author-subtitle">Works at HasTech</p>
                    <div className="request-btn-inner">
                      <button className="frnd-btn">confirm</button>
                      <button className="frnd-btn delete">delete</button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="frnd-request-member">
                  <figure className="request-thumb">
                    <a href="profile.html">
                      <img src="assets/images/profile/profile-midle-3.jpg" alt="proflie author" />
                    </a>
                  </figure>
                  <div className="frnd-content">
                    <h6 className="author"><a href="profile.html">merry watson</a></h6>
                    <p className="author-subtitle">Works at HasTech</p>
                    <div className="request-btn-inner">
                      <button className="frnd-btn">confirm</button>
                      <button className="frnd-btn delete">delete</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <button className="notification"><i className="flaticon-notification" />
              <span>03</span>
            </button>
          </li>
          <li>
            <button className="chat-trigger notification"><i className="flaticon-chats" />
              <span>04</span>
            </button>
            <div className="mobile-chat-box">
              <div className="live-chat-title">
                {/* profile picture end */}
                <div className="profile-thumb">
                  <a href="profile.html">
                    <figure className="profile-thumb-small profile-active">
                      <img src="assets/images/profile/profile-small-15.jpg" alt="profile picture" />
                    </figure>
                  </a>
                </div>
                {/* profile picture end */}
                <div className="posted-author">
                  <h6 className="author"><a href="profile.html">Robart Marloyan</a></h6>
                  <span className="active-pro">active now</span>
                </div>
                <div className="live-chat-settings ml-auto">
                  <button className="chat-settings"><img src="assets/images/icons/settings.png" alt /></button>
                  <button className="close-btn"><img src="assets/images/icons/close.png" alt /></button>
                </div>
              </div>
              <div className="message-list-inner">
                <ul className="message-list custom-scroll">
                  <li className="text-friends">
                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                    <div className="message-time">10 minute ago</div>
                  </li>
                  <li className="text-author">
                    <p>Many desktop publishing packages and web page editors</p>
                    <div className="message-time">5 minute ago</div>
                  </li>
                  <li className="text-friends">
                    <p>packages and web page editors </p>
                    <div className="message-time">2 minute ago</div>
                  </li>
                  <li className="text-friends">
                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                    <div className="message-time">10 minute ago</div>
                  </li>
                  <li className="text-author">
                    <p>Many desktop publishing packages and web page editors</p>
                    <div className="message-time">5 minute ago</div>
                  </li>
                  <li className="text-friends">
                    <p>packages and web page editors </p>
                    <div className="message-time">2 minute ago</div>
                  </li>
                </ul>
              </div>
              <div className="chat-text-field mob-text-box">
                <textarea className="live-chat-field custom-scroll" placeholder="Text Message" defaultValue={""} />
                <button className="chat-message-send" type="submit" value="submit">
                  <img src="assets/images/icons/plane.png" alt />
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
      <div className="mobile-header-profile">
        {/* profile picture end */}
        <div className="profile-thumb profile-setting-box">
          <a href="javascript:void(0)" className="profile-triger">
            <figure className="profile-thumb-middle">
              <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture" />
            </figure>
          </a>
          <div className="profile-dropdown text-left">
            <div className="profile-head">
              <h5 className="name"><a href="#">Madison Howard</a></h5>
              <a className="mail" href="#">mailnam@mail.com</a>
            </div>
            <div className="profile-body">
              <ul>
                <li><a href="profile.html"><i className="flaticon-user" />Profile</a></li>
                <li><a href="#"><i className="flaticon-message" />Inbox</a></li>
                <li><a href="#"><i className="flaticon-document" />Activity</a></li>
              </ul>
              <ul>
                <li><a href="#"><i className="flaticon-settings" />Setting</a></li>
                <li><a href="signup.html"><i className="flaticon-unlock" />Sing out</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* profile picture end */}
      </div>
    </div>
  </div>
</header>
    )
}
export const ProfileHeader = ()=>{
    return(
        <h2>Profile Header</h2>
    )
}
export const FollowHeader = ()=>{
    return(
        <h2>Follow Headers </h2>
    )
}