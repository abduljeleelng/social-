import React,{Fragment,Component} from 'react';
import {Link} from 'react-router-dom';
import {Card, CardImg, CardText, CardBody, CardTitle,CardFooter, CardLink, CardSubtitle, Button} from 'reactstrap';

export const NewPostCard = () => {
  ///const {title,body} =this.state;
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
        <button className="btn-share" type="submit">share</button>
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
            <input name="share" className="form-control" placeholder="Title of your post"  />
            <br />
            <textarea name="share" className="share-field-big custom-scroll" placeholder="Say Something"  />
          </div>
          <div className="modal-footer">
            <button type="button" className="post-share-btn" data-dismiss="modal">cancel</button>
            <button type="button" className="post-share-btn">post</button>
          </div>
        </div>
      </div>
    </div>
    {/* Modal end */}
  </div>
</div>

    )
}

export const ReadPostCard = ({post}) => {
    return(
<div className="card">
  {/* post title start */}
  <div className="post-title d-flex align-items-center">
    {/* profile picture end */}
    <div className="profile-thumb">
      <a href="#">
        <figure className="profile-thumb-middle">
          <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture" />
        </figure>
      </a>
    </div>
    {/* profile picture end */}
    <div className="posted-author">
      <h6 className="author"><a href="profile.html">{post.postedBy.name ? post.postedBy.name: "Unkmow Poster" }</a></h6>
      <span className="post-time">on {new Date(post.created).toDateString()} </span>
    </div>
    <div className="post-settings-bar">
      <span />
      <span />
      <span />
      <div className="post-settings arrow-shape">
        <ul>
          <li><button>Delete</button></li>
          <li><button>edit post</button></li>
          <li><button>embed adda</button></li>
        </ul>
      </div>
    </div>
  </div>
  {/* post title start */}
  <div className="post-content">
    <h4>{post.title}</h4>
    <p className="post-desc">
      {post.body.substring(0,100)}
    </p>
    <div className="post-thumb-gallery">
      <figure className="post-thumb img-popup">
        <a href="assets/images/post/post-large-1.jpg">
          <img src="assets/images/post/post-1.jpg" alt="post image" />
        </a>
      </figure>
    </div>
    <div className="post-meta">
      <button className="post-meta-like">
        <i className="bi bi-heart-beat" />
        <span>You and 201 people like this</span>
        <strong>201</strong>
      </button>
      <ul className="comment-share-meta">
        <li>
          <button className="post-comment">
            <i className="bi bi-chat-bubble" />
            <span>41</span>
          </button>
        </li>
        <li>
          <button className="post-share">
            <i className="bi bi-share" />
            <span>07</span>
          </button>
        </li>
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

export const PostCard = ({posts})=>{
    return(
        posts.map((post,index)=>{
            return(
                <Fragment key={index}>
                <Card >
                <CardImg src={post.logo} className="card-img-top" alt={post.title} />
                <CardBody>
                <CardTitle> {post.title} </CardTitle>
                <CardText>{post.body}</CardText>
                <CardFooter>
                <Link to="/" className="card-link">Read More ... </Link> |
                <Link to="/" className="card-link">Like </Link> | 
                <Link to="/" className="card-link">comment  </Link> | 
                </CardFooter>
                </CardBody>
               </Card>
               <hr />
               </Fragment>
            )
        })
        
    )
};
export const PostTitle = ({posts})=>{
    return(
        posts.map((post,index)=>(
            <Fragment key={index}>
                <hr />
                <Card>
                     <CardTitle className="text-center">{post.title}</CardTitle>
                </Card>
            
            </Fragment>
        ))
    )
}
export const SinglePostCard = (props)=>{
    
   return(
       <div className="card" style={{width: '34rem'}}>
           <img src={props.logo} className="card-img-top" alt={props.title} />
           <div className="card-body">
               <h5 className="card-title">{props.title} </h5>
               <p className="card-text">{props.body}</p>
           </div>
           <div className="card-footer">
           <Link to="/" className="card-link">Read More ... </Link> |
           <Link to="/" className="card-link">Like </Link> | 
           <Link to="/" className="card-link">comment  </Link> | 
           </div>
       </div>
   )
};

export const NewPostCardA = ({logo,title,body}) =>{

    return(
        <div className="card" style={{width: '34rem'}}>
            <img src={logo} className="card-img-top" alt={title} />
            <div className="card-body">
            <form>
                <div className="form-group">
                    <label>Post Title </label>
                    <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label>Post Content </label>
                    <textarea className="form-control" rows={3} defaultValue={""} />
                </div>
                <div className="form-group">
                    <label>Select photo </label>
                    <input type="file" className="form-control" />
                </div>
                <button className="btn btn-primary btn-right">Post </button>
           </form>
            </div>
       </div>
    )
}

export const Profile = () =>{
    return(
        <div className="card" style={{width: '16rem'}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
            <Link to="/"className="card-link">Card link</Link>
            <Link to="/" className="card-link">Another link</Link>
        </div>
        </div>
    )
}
export const FriendList =()=>{
    return(
        <div className="card" style={{width: '18rem'}}>
            <div className="card-header">
                Featured
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    )
}
