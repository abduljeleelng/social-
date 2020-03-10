import React, { Component } from 'react'

export default class comment extends Component {
    render() {
        return (
            <div className="card card-small">
            <div className="share-box-inner">
              {/* profile picture end */}
              <div className="profile-thumb">
                <a href="#">
                  <figure className="profile-thumb-middle">
                    <img src={profileImage ? profileImage:noProfileImage} onError={noProfileImage} alt="profile picture" />
                  </figure>
                </a>
              </div>
              {/* profile picture end */}
              {/* share content box start */}
              <div className="share-content-box w-100">
                <form className="share-text-box">
                  <textarea name="share" className="share-text-field" aria-disabled="true" placeholder="Say Something" data-toggle="modal" data-target="#textbox" id="email" defaultValue={""} />
                  <button className="btn-share" type="submit" onClick={this.handleShareButton} >share</button>
                </form>
              </div>
              {/* share content box end */}
              {/* Modal start */}
              <div className="modal fade" id="textbox" aria-labelledby="textbox">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Share Your Mood</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body custom-scroll">
                      <input name="share" className="form-control" placeholder="Title of your post" value={title} onChange={this.handleChange("title")} />
                      <br />
                      <textarea name="share" className="share-field-big custom-scroll" placeholder="Say Something" value={body} onChange={this.handleChange("body")} /> <br />
  
                      <input type="file" accept="image/*" name="share" className="form-control" placeholder="Title of your post"  onChange={this.handleChange("photo")} /> <br />
  
                      <img src={photo} alt={title} />
  
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="post-share-btn" data-dismiss="modal">cancel</button>
                  {loading ? ("loading..") : ( <button type="button" className="post-share-btn" onClick={this.handleCreatePost}>post</button>) }
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal end */}
            </div>
          </div>
        )
    }
}
