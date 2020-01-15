import React,{Component} from 'react';
import {PostCard,Profile,NewPostCard, FriendList} from '../componet/Card';
import { Footer } from '../componet/Footer.jsx';
import {MainHeader } from '../componet/Header.jsx';;



class Home extends Component{
    constructor(props){
        super(props);
        this.state= {
            post:[
                {
                    "_id": "5e1a51ed6f744f12bc259216",
                    "title": "Upadating post ",
                    "body": "updateing body ",
                    "created": "2020-01-11T22:53:33.005Z",
                    "postedBy": {
                        "_id": "5e13098730d38e3e9cf75056",
                        "email": "abduljeleelng@gmail.com",
                        "name": "Abduljeleel Ola"
                    }
                }
            ],
        }
    }
    render(){
        const {post}=this.state;
        console.log(post)
        return(
            <>
            <MainHeader />
                <div className="container">
                    <div className="row postCat">
                        <div className="col-md-3">
                            <hr />
                            Profile
                            <hr />
                            <Profile />
                        </div>
                        <div className="col-md-6">
                            <br  />
                            <div className="post">
                                <NewPostCard />
                                    <hr />
                                    <PostCard  title="title of the post " body="body of the post" />
                            </div>        
                        </div>
                        <div className="col-md-3">
                            <hr />
                            Friends
                            <hr />
                            <FriendList />
                         
                        </div>
                    </div>
                </div>
                <div className="row">
                   <Footer />
                </div>
            </>

        )
    }
}
export default Home;