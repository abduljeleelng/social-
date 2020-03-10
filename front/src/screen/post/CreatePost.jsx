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
      fileSize: 0,
      user:{},
    }
  }
  componentDidMount(){
    this.postData = new FormData();
    this.setState({ user: isAuthenticated().user });
    const userId = isAuthenticated().user._id;
    if(!userId){
      this.setState({reDirect:true});
    }
  }

  handleChange=name=>event=>{
   // this.setState({[name]:event.target.value});
   // this.setState({["photo"]:event.target.files[0]});
    this.setState({ error: "" });
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    //const fileSize = name === "photo" ? event.target.files[0].size : 0;
    this.postData.set(name, value);
    this.setState({ [name]: value });
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
    newPost(userId,token,this.postData).then(data=>{
      if(data.error){
        console.log(data);
        this.setState({loading:false});
     }
      else{
        console.log(data);
        this.setState({loading:false,gohome:true,title:"",body:"",photo:""});
      }
    })
  }
  handleShareButton=e=>{
    e.preventDefault();
  }
  render(){
      const {title,body,note,error,gohome,reDirect,loading,photo,} = this.state;
      const {profileImage,noProfileImage} = this.props;
      //console.log(photo);
      if(gohome){ window.location.reload(false); };
      if(reDirect){ return <Redirect to="/" />};
    return(
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

export default CreatePost;