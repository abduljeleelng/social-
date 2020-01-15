import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-2 text-center">logo</div>
                    <div className="col-md-6 text-center"> <input className="form-control" placeholder="Search ..." /></div>
                    <div className="col-md-4 text-center"> <Link to="/SignUp">Register </Link> | <Link to="/SignIn">Login </Link>  </div>
                </div>
            </div>
        </div>
    )
}
export const PostCard = (props)=>{
     console.log("post from card "+props)
    return(
        <div className="card" style={{width: '34rem'}}>
            <img src={props.logo} className="card-img-top" alt={props.title} />
            <div className="card-header">
                Post Title
            </div>
            <div className="card-body">
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
export const SinglePostCard = (props)=>{
    console.log("post from card "+props)
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

export const NewPostCard = ({logo,title,body}) =>{

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
