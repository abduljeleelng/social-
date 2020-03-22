import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../../auth';
import {comment,uncomment} from '../apiPost';
//import NoProfile from "../../../images/avatar.jpg";


export default class Comment extends Component {
  constructor(){
    super();
    this.state={
      text:"",
      userId:"",
      token:"",
      loading:false,
    }
  }
    handleChange=text=>e=>{
      this.setState({[text]:e.target.value});
    }
    handleSubmit=e=>{
      e.preventDefault();
      this.setState({loading:true})
      const {text,userId,token}=this.state;
      const {postId}=this.props;
      //const comments = {text,userId,token,postId}
      if(!text){
        this.setState({ loading:false});
        return alert("don't post empty comment")
      }
      comment(userId, token, postId, {text,userId,token,postId} ).then(
        data => {
            if (data.error) {
                console.log(data.error);
            } else {
              alert("comment successful")
                this.setState({ text: "", loading:false});
                window.location.reload();
                //State({});
                // dispatch fresh list of coments to parent (SinglePost)
                //this.props.updateComments(data.comments);
            }
        }
      );
    }
    deleteComment = comment => {
      const userId = isAuthenticated().user._id;
      const token = isAuthenticated().token;
      const postId = this.props.postId;
      uncomment(userId, token, postId, comment).then(data => {
          if (data.error) {
              console.log(data.error);
          } else {
              this.props.updateComments(data.comments);
          }
      });
    };

  deleteConfirmed = comment => {
      let answer = window.confirm(
          "Are you sure you want to delete your comment?"
      );
      if (answer) {
          this.deleteComment(comment);
      }
  };
    componentDidMount(){
      this.setState({token:isAuthenticated().token,userId:isAuthenticated().user._id})
    }
    render() {
        const {profileImage,noProfileImage} = this.props;
        const {text,loading}=this.state;
        return (
            <div className="card card-small">
            <div className="share-box-inner">
              <div className="profile-thumb">
                <Link to={`/${isAuthenticated().user._id}`}>
                  <figure className="profile-thumb-middle">
                    <img 
                    src={
                      profileImage ? 
                      (profileImage):(noProfileImage)
                    } 
                      onError={noProfileImage} alt="profile"
                    />
                  </figure>
                </Link>
              </div>
              <div className="share-content-box w-100">
                <form className="share-text-box">
                  <label>Comments : </label>
                  <textarea value={text} onChange={this.handleChange("text")} className="share-text-field" aria-disabled="true" placeholder="Comment on this Post" />
                  {loading ? 
                    (<p className="btn-share" > loading ...</p>):
                    (<button className="btn-share" type="submit" onClick={this.handleSubmit} > Comment ...</button>)
                  }
                </form>
              </div>
            </div>
          </div>
        )
    }
}
