import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Status extends Component {
    constructor(){
        super();
        this.state={
            loading:false,
            error:"",
            status:"",
        }
    }

    handleChange=name=>e=>{
        this.setState({[name]:e.target.value});
    }

    updateStatus=e=>{
        e.preventDefault();
        const {status}=this.state;
        console.log(JSON.stringify(status));
    }
    
    render() {
        const {profileImage,noProfileImage}= this.props;
        const {status,loading} = this.state;
        return (
            <div className="card card-small">
            <div className="share-box-inner">
              <div className="profile-thumb">
                <Link to="/user/edit">
                  <figure className="profile-thumb-middle">
                    <img src={profileImage ? profileImage:noProfileImage} onError={i=>i.target.src=`${noProfileImage}`} alt="profile" />
                  </figure>
                </Link>
              </div>
              <div className="share-content-box w-100">
                <form className="share-text-box">
                  <textarea onChange={this.handleChange("status")} value={status} className="share-text-field" aria-disabled="true" placeholder="Update your Status" />
                  {
                    loading ? ("Loading ...") : (<button className="btn-share" type="submit" onClick={this.updateStatus} >update Status</button>)
                  }
                  
                </form>
              </div>
            </div>
          </div>
        )
    }
}
