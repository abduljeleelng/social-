import React from 'react';

export const ScrollToTop =()=>(
<div className="scroll-top not-visible">
  <i className="bi bi-finger-index" />
</div>
)

export const Footer = () => {
    return(
<footer className="d-none d-lg-block">
  <div className="footer-area reveal-footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="footer-wrapper">
            <div className="footer-card position-relative">
              <div className="friends-search">
                <form className="search-box">
                  <input type="text" placeholder="Search Your Friends" className="search-field" />
                  <button className="search-btn"><i className="flaticon-search" /></button>
                </form>
              </div>
              <div className="friend-search-list">
                <div className="frnd-search-title">
                  <button className="frnd-search-icon"><i className="flaticon-settings" /></button>
                  <p>search friends</p>
                  <button className="close-btn" data-close="friend-search-list"><i className="flaticon-cross-out" /></button>
                </div>
                <div className="frnd-search-inner custom-scroll">
                  <ul>
                    <li className="d-flex align-items-center profile-active">
                      {/* profile picture end */}
                      <div className="profile-thumb active">
                        <a href="#">
                          <figure className="profile-thumb-small">
                            <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture" />
                          </figure>
                        </a>
                      </div>
                      {/* profile picture end */}
                      <div className="posted-author">
                        <h6 className="author">Jon Wilime</h6>
                        <p>Many desktop publishing</p>
                      </div>
                    </li>
                    <li className="d-flex align-items-center profile-active">
                      {/* profile picture end */}
                      <div className="profile-thumb active">
                        <a href="#">
                          <figure className="profile-thumb-small">
                            <img src="assets/images/profile/profile-small-2.jpg" alt="profile picture" />
                          </figure>
                        </a>
                      </div>
                      {/* profile picture end */}
                      <div className="posted-author">
                        <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                        <button className="add-frnd">add friend</button>
                      </div>
                    </li>
                    <li className="d-flex align-items-center profile-active">
                      {/* profile picture end */}
                      <div className="profile-thumb active">
                        <a href="#">
                          <figure className="profile-thumb-small">
                            <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture" />
                          </figure>
                        </a>
                      </div>
                      {/* profile picture end */}
                      <div className="posted-author">
                        <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
                        <button className="add-frnd">add friend</button>
                      </div>
                    </li>
                    <li className="d-flex align-items-center profile-active">
                      {/* profile picture end */}
                      <div className="profile-thumb active">
                        <a href="#">
                          <figure className="profile-thumb-small">
                            <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture" />
                          </figure>
                        </a>
                      </div>
                      {/* profile picture end */}
                      <div className="posted-author">
                        <h6 className="author"><a href="profile.html">Jon Wilime</a></h6>
                        <button className="add-frnd">10 mutual friends</button>
                      </div>
                    </li>
                    <li className="d-flex align-items-center profile-active">
                      {/* profile picture end */}
                      <div className="profile-thumb active">
                        <a href="#">
                          <figure className="profile-thumb-small">
                            <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture" />
                          </figure>
                        </a>
                      </div>
                      {/* profile picture end */}
                      <div className="posted-author">
                        <h6 className="author"><a href="profile.html">Robart faul</a></h6>
                        <button className="add-frnd">12 mutual friends</button>
                      </div>
                    </li>
                    <li className="d-flex align-items-center profile-active">
                      {/* profile picture end */}
                      <div className="profile-thumb active">
                        <a href="#">
                          <figure className="profile-thumb-small">
                            <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture" />
                          </figure>
                        </a>
                      </div>
                      {/* profile picture end */}
                      <div className="posted-author">
                        <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
                        <button className="add-frnd">add friend</button>
                      </div>
                    </li>
                    <li className="d-flex align-items-center profile-active">
                      {/* profile picture end */}
                      <div className="profile-thumb active">
                        <a href="#">
                          <figure className="profile-thumb-small">
                            <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture" />
                          </figure>
                        </a>
                      </div>
                      {/* profile picture end */}
                      <div className="posted-author">
                        <h6 className="author"><a href="profile.html">Jon Wilime</a></h6>
                        <button className="add-frnd">10 mutual friends</button>
                      </div>
                    </li>
                    <li className="d-flex align-items-center profile-active">
                      {/* profile picture end */}
                      <div className="profile-thumb active">
                        <a href="#">
                          <figure className="profile-thumb-small">
                            <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture" />
                          </figure>
                        </a>
                      </div>
                      {/* profile picture end */}
                      <div className="posted-author">
                        <h6 className="author"><a href="profile.html">Robart faul</a></h6>
                        <button className="add-frnd">12 mutual friends</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card card-small mb-0 active-profile-wrapper">
              <div className="active-profiles-wrapper">
                <div className="active-profile-carousel slick-row-20 slick-arrow-style">
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="#">
                        <figure className="profile-thumb-small">
                          <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small">
                          <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small">
                          <img src="assets/images/profile/profile-small-2.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small">
                          <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small">
                          <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small">
                          <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small">
                          <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small">
                          <img src="assets/images/profile/profile-small-6.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small">
                          <img src="assets/images/profile/profile-small-7.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small">
                          <img src="assets/images/profile/profile-small-8.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small">
                          <img src="assets/images/profile/profile-small-9.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small">
                          <img src="assets/images/profile/profile-small-10.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small">
                          <img src="assets/images/profile/profile-small-11.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                </div>
              </div>
            </div>
            <div className="footer-card position-relative">
              <div className="live-chat-inner">
                <div className="chat-text-field">
                  <textarea className="live-chat-field custom-scroll" placeholder="Text Message" defaultValue={""} />
                  <button className="chat-message-send" type="submit" value="submit">
                    <img src="assets/images/icons/plane.png" alt />
                  </button>
                </div>
                <div className="chat-output-box">
                  <div className="live-chat-title">
                    {/* profile picture end */}
                    <div className="profile-thumb active">
                      <a href="#">
                        <figure className="profile-thumb-small">
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
                      <button className="chat-settings"><i className="flaticon-settings" /></button>
                      <button className="close-btn" data-close="chat-output-box"><i className="flaticon-cross-out" /></button>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    )
}
export const SecondFooter = () =>{
    return(
<footer className="d-block d-lg-none">
  <div className="footer-area reveal-footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="mobile-footer-inner d-flex">
            <div className="mobile-frnd-search">
              <button className="search-toggle-btn"><i className="flaticon-search" /></button>
            </div>
            <div className="mob-frnd-search-inner">
              <form className="mob-frnd-search-box d-flex">
                <input type="text" placeholder="Search Your Friends" className="mob-frnd-search-field" />
              </form>
            </div>
            <div className="card card-small mb-0 active-profile-mob-wrapper">
              <div className="active-profiles-mob-wrapper slick-row-10">
                <div className="active-profile-mobile">
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="#">
                        <figure className="profile-thumb-small profile-active">
                          <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small profile-active">
                          <img src="assets/images/profile/profile-small-8.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small profile-active">
                          <img src="assets/images/profile/profile-small-2.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small profile-active">
                          <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small profile-active">
                          <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small profile-active">
                          <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                  {/* profile picture end */}
                  <div className="single-slide">
                    <div className="profile-thumb active profile-active">
                      <a href="javascript:void(0)">
                        <figure className="profile-thumb-small profile-active">
                          <img src="assets/images/profile/profile-small-9.jpg" alt="profile picture" />
                        </figure>
                      </a>
                    </div>
                  </div>
                  {/* profile picture end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    )
}