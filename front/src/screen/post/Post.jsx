import React,{Component} from 'react';
import {PostCard} from '../../componet/Card';
import { Footer } from '../../componet/Footer.jsx';
import {MainHeader } from '../../componet/Header.jsx';;

class Post extends Component{
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
        };
    };
    render(){
        const {post}=this.state;
        const {title,body}=post
        console.log(body,title)
        return(
            <>
            <MainHeader />
                <div className="container">
                    <div className="row postCat">
                        <div className="col-md-3">
                         
                        </div>
                        <div className="col-md-6">
                            <br  />
                            <div className="post">
                                    <PostCard  title="" body="body of the post " />
                            </div>        
                        </div>
                        <div className="col-md-3">
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
export default Post;