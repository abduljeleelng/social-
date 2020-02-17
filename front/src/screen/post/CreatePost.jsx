import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {isAuthenticated} from "../../auth";
import {newPost} from "./apiPost";

class CreatePost extends Component{
  constructor(){
    super();
    this.state = {
      title:"",
      body:"",
      note:false,
      error:"",
      gohome:false,
      reDirect:false,
      loading:false,
      user:{},
    }
  }

  handleChange=name=>e=>{
    this.setState({[name]:e.target.value});
  }
  handleCancel=e=>{
    e.preventDefault();
    this.setState({gohome:true});
  }
  handleCreatePost=e=>{
    e.preventDefault();
    this.setState({loading:true});
    const token = isAuthenticated().token;
    const userId = isAuthenticated().user._id
    const {title,body} = this.state;
    const post = {title,body};
    console.log(JSON.stringify(post));
    console.log(JSON.stringify(userId));
    console.log(JSON.stringify(token));
    newPost(userId,token,post).then(data=>{
      //if(data.error){console.log(data.error)}else{
        console.log("data from server");
        console.log(JSON.stringify(data));
        console.log(data);
        this.setState({loading:false});
      //}
    })
  }
  handleShareButton=e=>{
    e.preventDefault();
  }

  componentDidMount(){
    this.setState({ user: isAuthenticated().user });
    const userId = isAuthenticated().user._id;
    if(!userId){
      this.setState({reDirect:true});
    }
  }

  render(){
      const {title,body,note,error,gohome,reDirect,loading} = this.state;
      if(gohome){ return <Redirect to="Posts" />};
      if(reDirect){ return <Redirect to="/" />};
    return(
      <div className="card card-small">
          <div className="share-box-inner">
            {/* profile picture end */}
            <div className="profile-thumb">
              <a href="#">
                <figure className="profile-thumb-middle">
                  <img src="assets/images/profile/profile-small-37.jpg" alt="profile picture" />
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
                    <textarea name="share" className="share-field-big custom-scroll" placeholder="Say Something" value={body} onChange={this.handleChange("body")} />
                  </div>
                  <div className="modal-footer">
    {loading ? ("loading..") : (<button type="button" className="post-share-btn" data-dismiss="modal" onClick={this.handleCancel}>cancel</button>) }
                    <button type="button" className="post-share-btn" onClick={this.handleCreatePost}>post</button>
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

export default CreatePost;