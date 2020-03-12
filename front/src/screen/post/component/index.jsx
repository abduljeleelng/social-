import React from 'react';
import {isAuthenticated} from '../../../auth'

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