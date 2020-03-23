import React from 'react';
import {Link} from 'react-router-dom';
import { isAuthenticated } from '../../../auth';
//import { deletePost } from '../screen/post/apiPost';

export const ReadPostCard = ({
  likeToggle,
  post, postImage, imageAlt, noImage,singlePost,profilePhoto,noProfilePhoto,
   handledelete, like, }) => {
 return(
 <div className="card">
  {/* post title start */}
  <div className="post-title d-flex align-items-center">
    {/* profile picture end */}
    <div className="profile-thumb">
    <Link to={`/user/${post.postedBy._id}`}>
        <figure className="profile-thumb-middle">
          <img src={profilePhoto} onError={i=>i.target.src=`${noProfilePhoto}`} alt="profile" />
        </figure>
      </Link>
    </div>
    {/* profile picture end */}
    <div className="posted-author">
      <h6 className="author"><Link to={`/user/${post.postedBy._id}`}>{post.postedBy.firstName ? post.postedBy.firstName + post.postedBy.lastName : "Unkmow Poster" }</Link></h6>
      <span className="post-time">on {new Date(post.created).toDateString()} </span>
    </div>
    {singlePost ? (
    <div className="post-settings-bar">
      <span />
      <span />
      <span />
      <div className="post-settings arrow-shape">
        {isAuthenticated().user && isAuthenticated().user._id === post.postedBy._id ? (
                  <ul>
                  <li><button onClick={handledelete}> Delete</button></li>
                  <li><button>edit post</button></li>
                </ul>
        ):(
          <ul>
          <li> <Link to="/" >Login </Link> </li>
          <li> <Link to="/" >Sign Up </Link> </li>
          </ul>
        )}

      </div>
    </div>):"" }
  </div>
  {/* post title start */}
  <div className="post-content">
    <h4>{post.title}</h4>
    <div className="post-thumb-gallery">
      <figure className="post-thumb img-popup">
        <Link to="/">
          { singlePost ? 
          (<img src={postImage}  onError={i=>i.target.src=`${noImage}`} alt="post "  />) : 
          (<img src={postImage}  onError={i=>i.target.src=`${noImage}`} width={510} height={270} alt="post " />)
          }
          
        </Link>
      </figure>
    </div>
    <p className="post-desc">
      {singlePost ? (post.body): <> {post.body.substring(0,100)}<Link to={`/post/${post._id}`}> Read more ..</Link> </> }
      
    </p>

    <div className="post-meta">

    {like ? (
                  <button className="post-meta-like" onClick={likeToggle}>
                  <i className="bi bi-heart-beat " />
                  <span>you and {post.likes.length -1} people like this</span>
                  <strong>201</strong>
                </button>
                ) : (
                  <button className="post-meta-like" onClick={likeToggle}>
                  <i className="bi bi-heart-beat " />
                  <span>like, others {post.likes.length} people like this</span>
                  <strong>201</strong>
                </button>
                )}
      <ul className="comment-share-meta">
        <li>
          <Link to={`/post/${post._id}`} >
          <button className="post-comment">
            <i className="bi bi-chat-bubble" />
            <span>{post.comments.length > 0 ? post.comments.length : 0}</span>
          </button>
          </Link>
        </li> 
        {/*<li>
          <button className="post-share">
            <i className="bi bi-share" />
            <span>07</span>
          </button>
        </li>*/}
      </ul>
    </div>
  </div>
</div>

    )
}

export const EmptyPost =({post})=>{
  return(
      <div className="card">
        <div className="post-content">
          <h4 style={{alignContent:"center"}} className="text-center"> {post.title} </h4>
          <p className="post-desc text-center"> {post.detail}</p>
          <div className="post-meta">
          </div>
        </div>
      </div>
  )
}

export const CommentList = ({comment,profilePhoto,noProfilePhoto,handleDelete})=>{
  //const {name,time, message} = props.comment;

  return(
      <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={profilePhoto ? profilePhoto : noProfilePhoto}
        onError={i=>i.target.src=`${noProfilePhoto}`}
        //src={`https://api.adorable.io/avatars/48/${name.toLowerCase()}@adorable.io.png`}
        alt={comment.postedBy.firstName}
      />
    
      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{new Date (comment.created).toDateString()}</small>
        <h6 className="mt-0 mb-1 text-muted">{`Comment By ${comment.postedBy.firstName}   ${comment.postedBy.lastName}  `}</h6>
        {comment.text}
      </div>
      {isAuthenticated().user && isAuthenticated().user._id === comment.postedBy._id && (
      <button onClick={handleDelete} className="p-2 shadow-sm rounded bg-light border">Delete</button>
      )}
    </div>
  );
}
