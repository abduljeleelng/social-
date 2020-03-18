import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import { isAuthenticated } from '../auth';
//import { deletePost } from '../screen/post/apiPost';

export const ReadPostCard = ({
  likeToggle,
  post, postImage, imageAlt, noImage,singlePost,auth,profilePhoto,noProfilePhoto,
   handledelete, like, likes,comment}) => {
 return(
 <div className="card">
  {/* post title start */}
  <div className="post-title d-flex align-items-center">
    {/* profile picture end */}
    <div className="profile-thumb">
    <Link to={`/${post.postedBy._id}`}>
        <figure className="profile-thumb-middle">
          <img src={profilePhoto} onError={i=>i.target.src=`${noProfilePhoto}`} alt="profile picture" />
        </figure>
      </Link>
    </div>
    {/* profile picture end */}
    <div className="posted-author">
      <h6 className="author"><Link to={`/${post.postedBy._id}`}>{post.postedBy.firstName ? post.postedBy.firstName + post.postedBy.lastName : "Unkmow Poster" }</Link></h6>
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
        <Link href={postImage}>
          { singlePost ? 
          (<img src={postImage} alt={imageAlt} onError={i=>i.target.src=`${noImage}`}   />) : 
          (<img src={postImage} alt={imageAlt} onError={i=>i.target.src=`${noImage}`} width={510} height={270} />)
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
          <h4 style={{alignContent:"center"}} className="text-center"> No Post from Any Users </h4>
          <p className="post-desc text-center"> you can login and ppost to the communities</p>
          <div className="post-meta">
          </div>
        </div>
      </div>
  )
}
