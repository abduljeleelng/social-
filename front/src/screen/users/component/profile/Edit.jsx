import React, { Component } from 'react';


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
        }
    }
    handleChange=name=>e=>{
        this.setState({[name]:e.target.value});
    }
    handleSave=e=>{
        e.preventDefault();
        const  {occupation,address,education,interest,about} = this.state;
        const save = {occupation,address,education,interest,about}
        console.log(JSON.stringify(save));
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
                    (<button className="btn btn-danger" type="submit" onClick={this.handleSave} > Save ...</button>)
                  }
                </form>
            </div>
            </>
        )
    }
}
