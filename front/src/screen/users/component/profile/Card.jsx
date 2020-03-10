import React from 'react';
import {Link} from 'react-router-dom';
import { isAuthenticated } from '../../../../auth';


export  const ProfileHeader =({auth, userId, cover,photo, nophoto, nocover})=> {
  console.log(photo)
  const yellow = "#ee35";
  //style={{backgroundColor:`${yellow}`, backgroundImages:`${photo ? photo:nophoto}`,backgroundPosition:'center', backgroundSize:'cover'}}
  const bg = {
     backgroundColor:`${yellow}`,
     backgroundImage:`url(${cover ? cover:nocover})`,
     backgroundPosition:'center',
      backgroundSize:'cover'
  }
        return (
          <>
          <div className={`profile-banner-large ${bg}`}  style={bg} data-bg={cover} onError={nocover}></div>
          <div className="profile-menu-area bg-white">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3">
                  <div className="profile-picture-box">
                    <figure className="profile-picture">
                      <Link to={`/profile${userId}`}>
                        <img src={photo ? photo : nophoto} onError={nophoto} alt="profile picture" />
                      </Link>
                    </figure>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 offset-lg-1">
                  <div className="profile-menu-wrapper">
                    <div className="main-menu-inner header-top-navigation">
                      <nav>
                        <ul className="main-menu">
                          <li className="active"><Link to={`/${userId}`}>timeline</Link></li>
                          <li><Link to={`/about/${userId}`}>about</Link></li>
                          <li><Link to={`/photo/${userId}`}>photos</Link></li>
                          <li><Link to={`/friend/${userId}`}>friends</Link></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 d-none d-md-block">
                  <div className="profile-edit-panel">
                   {isAuthenticated().user && isAuthenticated().user._id === userId ? (<button className="edit-btn">edit profile</button>):("")} 
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
        )
}

export const LeftSideBar = ()=>{
    return(
        <div className="col-lg-3 order-2 order-lg-1">
        <aside className="widget-area profile-sidebar">
          {/* widget single item start */}
          <div className="card widget-item">
            <h4 className="widget-title">kate palson</h4>
            <div className="widget-body">
              <div className="about-author">
                <p>I Don’t know how? But i believe that it is possible one day if i stay with my dream all time</p>
                <ul className="author-into-list">
                  <li><a href="#"><i className="bi bi-office-bag" />Graphic Designer</a></li>
                  <li><a href="#"><i className="bi bi-home" />Melbourne, Australia</a></li>
                  <li><a href="#"><i className="bi bi-location-pointer" />Pulshar, Melbourne</a></li>
                  <li><a href="#"><i className="bi bi-heart-beat" />Travel, Swimming</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* widget single item end */}
          {/* widget single item start */}
          <div className="card widget-item">
            <h4 className="widget-title">Sweets Memories</h4>
            <div className="widget-body">
              <div className="sweet-galley img-gallery">
                <div className="row row-5">
                  <div className="col-4">
                    <div className="gallery-tem">
                      <figure className="post-thumb">
                        <a className="gallery-selector" href="assets/images/gallery/gallery-1.jpg">
                          <img src="assets/images/gallery/gallery-1.jpg" alt="sweet memory" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="gallery-tem">
                      <figure className="post-thumb">
                        <a className="gallery-selector" href="assets/images/gallery/gallery-2.jpg">
                          <img src="assets/images/gallery/gallery-2.jpg" alt="sweet memory" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="gallery-tem">
                      <figure className="post-thumb">
                        <a className="gallery-selector" href="assets/images/gallery/gallery-3.jpg">
                          <img src="assets/images/gallery/gallery-3.jpg" alt="sweet memory" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="gallery-tem">
                      <figure className="post-thumb">
                        <a className="gallery-selector" href="assets/images/gallery/gallery-4.jpg">
                          <img src="assets/images/gallery/gallery-4.jpg" alt="sweet memory" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="gallery-tem">
                      <figure className="post-thumb">
                        <a className="gallery-selector" href="assets/images/gallery/gallery-5.jpg">
                          <img src="assets/images/gallery/gallery-5.jpg" alt="sweet memory" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="gallery-tem">
                      <figure className="post-thumb">
                        <a className="gallery-selector" href="assets/images/gallery/gallery-6.jpg">
                          <img src="assets/images/gallery/gallery-6.jpg" alt="sweet memory" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="gallery-tem">
                      <figure className="post-thumb">
                        <a className="gallery-selector" href="assets/images/gallery/gallery-7.jpg">
                          <img src="assets/images/gallery/gallery-7.jpg" alt="sweet memory" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="gallery-tem">
                      <figure className="post-thumb">
                        <a className="gallery-selector" href="assets/images/gallery/gallery-8.jpg">
                          <img src="assets/images/gallery/gallery-8.jpg" alt="sweet memory" />
                        </a>
                      </figure>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="gallery-tem">
                      <figure className="post-thumb">
                        <a className="gallery-selector" href="assets/images/gallery/gallery-9.jpg">
                          <img src="assets/images/gallery/gallery-9.jpg" alt="sweet memory" />
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* widget single item end */}
          {/* widget single item start */}
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
                <li className="unorder-list">
                  {/* profile picture end */}
                  <div className="profile-thumb">
                    <a href="#">
                      <figure className="profile-thumb-small">
                        <img src="assets/images/profile/profile-small-30.jpg" alt="profile picture" />
                      </figure>
                    </a>
                  </div>
                  {/* profile picture end */}
                  <div className="unorder-list-info">
                    <h3 className="list-title"><a href="#">Foodcort Nirala</a></h3>
                    <p className="list-subtitle"><a href="#">food</a></p>
                  </div>
                  <button className="like-button">
                    <img className="heart" src="assets/images/icons/heart.png" alt />
                    <img className="heart-color" src="assets/images/icons/heart-color.png" alt />
                  </button>
                </li>
                <li className="unorder-list">
                  {/* profile picture end */}
                  <div className="profile-thumb">
                    <a href="#">
                      <figure className="profile-thumb-small">
                        <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture" />
                      </figure>
                    </a>
                  </div>
                  {/* profile picture end */}
                  <div className="unorder-list-info">
                    <h3 className="list-title"><a href="#">Rolin Theitar</a></h3>
                    <p className="list-subtitle"><a href="#">drama</a></p>
                  </div>
                  <button className="like-button">
                    <img className="heart" src="assets/images/icons/heart.png" alt />
                    <img className="heart-color" src="assets/images/icons/heart-color.png" alt />
                  </button>
                </li>
                <li className="unorder-list">
                  {/* profile picture end */}
                  <div className="profile-thumb">
                    <a href="#">
                      <figure className="profile-thumb-small">
                        <img src="assets/images/profile/profile-small-29.jpg" alt="profile picture" />
                      </figure>
                    </a>
                  </div>
                  {/* profile picture end */}
                  <div className="unorder-list-info">
                    <h3 className="list-title"><a href="#">Active Mind</a></h3>
                    <p className="list-subtitle"><a href="#">fitness</a></p>
                  </div>
                  <button className="like-button">
                    <img className="heart" src="assets/images/icons/heart.png" alt />
                    <img className="heart-color" src="assets/images/icons/heart-color.png" alt />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* widget single item end */}
        </aside>
      </div>
    )
}

export const RightSideBar = ({user,profileImage,imageAlt,noProfilePhoto})=> {
    return(
        <div className="col-lg-3 order-3">
        <aside className="widget-area">
        <div className="card widget-item">
            <h4 className="widget-title">Friends Zone</h4>
            <div className="widget-body">
              <ul className="like-page-list-wrapper">
                {user.length>0 ? user.map((user,i)=>(
                               <li className="unorder-list" key={i}>
                               {/* profile picture end */}
                               <div className="profile-thumb">
                                 <Link to href="#">
                                   <figure className="profile-thumb-small">
                                     <img src={profileImage} onError={i=>i.target.src=`${noProfilePhoto}`} alt={imageAlt} />
                                   </figure>
                                 </Link>
                               </div>
                               {/* profile picture end */}
                               <div className="unorder-list-info">
                                 <h3 className="list-title"><Link to={`/${user._id}`} >{user.firstName +" "+ user.lastName}</Link></h3>
                                 <p className="list-subtitle"><Link to={`/friend/${user._id}`}>10 mutual</Link></p>
                               </div>
                               <button className="like-button">
                                 <img className="heart" src="assets/images/icons/heart.png" alt="follow" />
                                 <img className="heart-color" src="assets/images/icons/heart-color.png" alt="unfollow" />
                               </button>
                             </li>

                )):("No user ")}
              </ul>
            </div>
          </div>
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
       
        </aside>
      </div> 
    )
}

export const FriendZone = ({user,profileImage,noImage,imageAlt})=>{
return(
  <div className="card widget-item">
  <h4 className="widget-title">Friends Zone</h4>
  <div className="widget-body">
    <ul className="like-page-list-wrapper">
      <li className="unorder-list">
        {/* profile picture end */}
        <div className="profile-thumb">
          <Link to href="#">
            <figure className="profile-thumb-small">
              <img src={profileImage} onError={noImage} alt={imageAlt} />
            </figure>
          </Link>
        </div>
        {/* profile picture end */}
        <div className="unorder-list-info">
          <h3 className="list-title"><Link to={`/${user._id}`} >{user.name}</Link></h3>
          <p className="list-subtitle"><Link to={`/friend/${user._id}`}>10 mutual</Link></p>
        </div>
        <button className="like-button">
          <img className="heart" src="assets/images/icons/heart.png" alt="follow" />
          <img className="heart-color" src="assets/images/icons/heart-color.png" alt="unfollow" />
        </button>
      </li>
    </ul>
  </div>
</div>
)
}

export const AdvertZone = ()=>{
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

export const NotificationZone = ()=>{
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
      <li className="unorder-list">
        {/* profile picture end */}
        <div className="profile-thumb">
          <a href="#">
            <figure className="profile-thumb-small">
              <img src="assets/images/profile/profile-small-35.jpg" alt="profile picture" />
            </figure>
          </a>
        </div>
        {/* profile picture end */}
        <div className="unorder-list-info">
          <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
          <p className="list-subtitle">10 min ago</p>
        </div>
      </li>
      <li className="unorder-list">
        {/* profile picture end */}
        <div className="profile-thumb">
          <a href="#">
            <figure className="profile-thumb-small">
              <img src="assets/images/profile/profile-small-15.jpg" alt="profile picture" />
            </figure>
          </a>
        </div>
        {/* profile picture end */}
        <div className="unorder-list-info">
          <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
          <p className="list-subtitle">18 min ago</p>
        </div>
      </li>
      <li className="unorder-list">
        {/* profile picture end */}
        <div className="profile-thumb">
          <a href="#">
            <figure className="profile-thumb-small">
              <img src="assets/images/profile/profile-small-6.jpg" alt="profile picture" />
            </figure>
          </a>
        </div>
        {/* profile picture end */}
        <div className="unorder-list-info">
          <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
          <p className="list-subtitle">25 min ago</p>
        </div>
      </li>
      <li className="unorder-list">
        {/* profile picture end */}
        <div className="profile-thumb">
          <a href="#">
            <figure className="profile-thumb-small">
              <img src="assets/images/profile/profile-small-34.jpg" alt="profile picture" />
            </figure>
          </a>
        </div>
        {/* profile picture end */}
        <div className="unorder-list-info">
          <h3 className="list-title"><a href="#">Any one can join with us if you want</a></h3>
          <p className="list-subtitle">39 min ago</p>
        </div>
      </li>
    </ul>
  </div>
</div>
)
}
