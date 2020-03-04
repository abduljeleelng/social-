import React, { Component } from 'react';
import {MainHeader, SecondHeader } from '../../componet/Header.jsx';
import {ProfileHeader} from "./component/profile/Card";

export default class Photo extends Component {
    render() {
        return (
          <>
          <MainHeader />
          <SecondHeader />
<main>
  <div className="main-wrapper">
    <ProfileHeader />
    {/* profile menu area end */}
    {/* sendary menu start */}
    <div className="menu-secondary">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="secondary-menu-wrapper secondary-menu-2 bg-white">
              <div className="page-title-inner">
                <h4 className="page-title">photos (120)</h4>
              </div>
              <div className="filter-menu">
                <button className="active" data-filter="*">all</button>
                <button data-filter=".timeline">timeline</button>
                <button data-filter=".upload">upload</button>
                <button data-filter=".folder">folder</button>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* sendary menu end */}
    {/* photo section start */}
    <div className="photo-section mt-20">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content-box">
              <div className="content-body">
                <div className="row mt--30 photo-filter">
                  <div className="col-sm-6 col-md-4 timeline upload folder">
                    <div className="photo-group active">
                      <div className="gallery-toggle">
                        <div className="gallery-overlay">
                          <img src="assets/images/photos/photo-blank.jpg" alt="Photo Gallery" />
                          <div className="view-icon" />
                        </div>
                        <div className="photo-gallery-caption">
                          <h3 className="photos-caption">create folder</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 folder">
                    <div className="photo-group">
                      <div className="gallery-toggle">
                        <div className="d-none product-thumb-large-view">
                          <img src="assets/images/photos/photo-7.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-8.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-9.jpg" alt="Photo Gallery" />
                        </div>
                        <div className="gallery-overlay">
                          <img src="assets/images/photos/photo-7.jpg" alt="Photo Gallery" />
                          <div className="view-icon" />
                        </div>
                        <div className="photo-gallery-caption">
                          <h3 className="photos-caption">Adda Timeline (79)</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 upload">
                    <div className="photo-group">
                      <div className="gallery-toggle">
                        <div className="d-none product-thumb-large-view">
                          <img src="assets/images/photos/photo-8.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-6.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-2.jpg" alt="Photo Gallery" />
                        </div>
                        <div className="gallery-overlay">
                          <img src="assets/images/photos/photo-8.jpg" alt="Photo Gallery" />
                          <div className="view-icon" />
                        </div>
                        <div className="photo-gallery-caption">
                          <h3 className="photos-caption">Upload (134)</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 folder">
                    <div className="photo-group">
                      <div className="gallery-toggle">
                        <div className="d-none product-thumb-large-view">
                          <img src="assets/images/photos/photo-1.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-5.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-10.jpg" alt="Photo Gallery" />
                        </div>
                        <div className="gallery-overlay">
                          <img src="assets/images/photos/photo-1.jpg" alt="Photo Gallery" />
                          <div className="view-icon" />
                        </div>
                        <div className="photo-gallery-caption">
                          <h3 className="photos-caption">Office Hangout (12)</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 upload">
                    <div className="photo-group">
                      <div className="gallery-toggle">
                        <div className="d-none product-thumb-large-view">
                          <img src="assets/images/photos/photo-2.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-8.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-11.jpg" alt="Photo Gallery" />
                        </div>
                        <div className="gallery-overlay">
                          <img src="assets/images/photos/photo-2.jpg" alt="Photo Gallery" />
                          <div className="view-icon" />
                        </div>
                        <div className="photo-gallery-caption">
                          <h3 className="photos-caption">Dream Land (24)</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 timeline">
                    <div className="photo-group">
                      <div className="gallery-toggle">
                        <div className="d-none product-thumb-large-view">
                          <img src="assets/images/photos/photo-3.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-6.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-4.jpg" alt="Photo Gallery" />
                        </div>
                        <div className="gallery-overlay">
                          <img src="assets/images/photos/photo-3.jpg" alt="Photo Gallery" />
                          <div className="view-icon" />
                        </div>
                        <div className="photo-gallery-caption">
                          <h3 className="photos-caption">Travel Zone (34)</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 timeline">
                    <div className="photo-group">
                      <div className="gallery-toggle">
                        <div className="d-none product-thumb-large-view">
                          <img src="assets/images/photos/photo-4.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-9.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-6.jpg" alt="Photo Gallery" />
                        </div>
                        <div className="gallery-overlay">
                          <img src="assets/images/photos/photo-4.jpg" alt="Photo Gallery" />
                          <div className="view-icon" />
                        </div>
                        <div className="photo-gallery-caption">
                          <h3 className="photos-caption">Pure Nature (17)</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 folder">
                    <div className="photo-group">
                      <div className="gallery-toggle">
                        <div className="d-none product-thumb-large-view">
                          <img src="assets/images/photos/photo-5.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-7.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-2.jpg" alt="Photo Gallery" />
                        </div>
                        <div className="gallery-overlay">
                          <img src="assets/images/photos/photo-5.jpg" alt="Photo Gallery" />
                          <div className="view-icon" />
                        </div>
                        <div className="photo-gallery-caption">
                          <h3 className="photos-caption">Family Tour (37)</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 upload">
                    <div className="photo-group">
                      <div className="gallery-toggle">
                        <div className="d-none product-thumb-large-view">
                          <img src="assets/images/photos/photo-6.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-5.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-8.jpg" alt="Photo Gallery" />
                        </div>
                        <div className="gallery-overlay">
                          <img src="assets/images/photos/photo-6.jpg" alt="Photo Gallery" />
                          <div className="view-icon" />
                        </div>
                        <div className="photo-gallery-caption">
                          <h3 className="photos-caption">Chill Zone (06)</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 folder">
                    <div className="photo-group">
                      <div className="gallery-toggle">
                        <div className="d-none product-thumb-large-view">
                          <img src="assets/images/photos/photo-10.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-8.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-6.jpg" alt="Photo Gallery" />
                        </div>
                        <div className="gallery-overlay">
                          <img src="assets/images/photos/photo-10.jpg" alt="Photo Gallery" />
                          <div className="view-icon" />
                        </div>
                        <div className="photo-gallery-caption">
                          <h3 className="photos-caption">Food Fun (21)</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 upload">
                    <div className="photo-group">
                      <div className="gallery-toggle">
                        <div className="d-none product-thumb-large-view">
                          <img src="assets/images/photos/photo-9.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-4.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-2.jpg" alt="Photo Gallery" />
                        </div>
                        <div className="gallery-overlay">
                          <img src="assets/images/photos/photo-9.jpg" alt="Photo Gallery" />
                          <div className="view-icon" />
                        </div>
                        <div className="photo-gallery-caption">
                          <h3 className="photos-caption">Kitchen Cook (09)</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 timeline">
                    <div className="photo-group">
                      <div className="gallery-toggle">
                        <div className="d-none product-thumb-large-view">
                          <img src="assets/images/photos/photo-11.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-7.jpg" alt="Photo Gallery" />
                          <img src="assets/images/photos/photo-1.jpg" alt="Photo Gallery" />
                        </div>
                        <div className="gallery-overlay">
                          <img src="assets/images/photos/photo-11.jpg" alt="Photo Gallery" />
                          <div className="view-icon" />
                        </div>
                        <div className="photo-gallery-caption">
                          <h3 className="photos-caption">Gardening (05)</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
