import React, { Component } from 'react';
import { updateAbout } from '../../API';
import { isAuthenticated } from '../../../../auth';


export default class Edit extends Component {
    constructor(){
        super();
        this.state={
            loading:false,
            occupation:"",
            address:"",
            education:"",
            interest:"",
            about:"",
            userId:"",
            token:"",
            reload:"false",
        }
    }
    handleChange=name=>e=>{
        this.setState({[name]:e.target.value});
    }
    handleSave=e=>{
        e.preventDefault();
        this.setState({loading:true});
        const  {occupation,address,education,interest,about,userId,token} = this.state;
        const aboutme = {occupation,address,education,interest,about}
        updateAbout(userId,token,aboutme).then(data=>{
            if(data.error){return console.log(data.error)}
            this.setState({loading:false, reload:true});
            window.location.reload();
        });
    }
    componentDidMount(){
        this.setState({userId:isAuthenticated().user._id,token:isAuthenticated().token});
    }
    render() {
        const {loading,occupation,address,education,interest,about}=this.state;
        return (
            <>
            <div className="card">
                <form className="share-text-box">
                <label>Occupation : </label>
                <input onChange={this.handleChange('occupation')} value={occupation} className="form-control" placeholder="Occupation"  />
                <label> Address : </label>
                <input onChange={this.handleChange('address')} value={address} className="form-control" placeholder="Address"  />
                <label>Education : </label>
                <input onChange={this.handleChange('education')} value={education}  className="form-control" placeholder="Education"  />
                <label>Interest: </label>
                <input onChange={this.handleChange('interest')} value={interest}  className="form-control" placeholder="Interest"  />
                <label>About : </label>
                <textarea onChange={this.handleChange('about')} value={about} className="form-control" cols="20" rows="10"   placeholder="about your self" ></textarea>
                <hr />
                {loading ? 
                    (<p className="" > loading ...</p>):
                    (<button className="btn btn-danger btn-share" type="submit" onClick={this.handleSave} > Save ...</button>)
                  }
                </form>
            </div>
            </>
        )
    }
}
