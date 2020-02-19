import React,{Component} from 'react';
import {ReadPostCard,EmptyPost} from '../../componet/Card';
import {ScrollToTop, } from '../../componet/Footer.jsx';
import {MainHeader, SecondHeader } from '../../componet/Header.jsx';
import {singlePost,photoAPI} from "./apiPost";
import {isAuthenticated} from "../../auth/index";
import CreatePost from "./CreatePost";
import DefaultImage from "./defaultImage.jpg";
import { CardProfile, LikeCard, TopNew } from '../../componet/RSideBar';
import { Notifications, Advert, FriendsZOne } from '../../componet/LSideBar';
import { Redirect } from 'react-router-dom';


class SinglePost extends Component{
    constructor(props){
        super(props);
        this.state= {
            post:"",
            page:1,
            auth:false,
            redirect:false,
        };
    };
    componentDidMount(){
        const postId = this.props.match.params.postId;
        console.log(JSON.stringify(postId))
        if (!postId){
            this.setState({redirect:true});
        }
        const token = isAuthenticated().token;
        if(token !== undefined){
            this.setState({auth:true});
        }
        singlePost(postId)
        .then(data=>{
            //console.log(data)
           if(data.null || data.error || data.undefined){
               console.log(data)
            }else{
                this.setState({post:data})
            }
        })
    };
    render(){
        const {post,auth,redirect} = this.state;
        if(redirect){ return <Redirect to="/Posts" />}
        return(
            <>
            <MainHeader />
            <SecondHeader />
<main>
  <div className="main-wrapper pt-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 order-2 order-lg-1">
          <aside className="widget-area">
              {auth ? (
                  <>
                    <CardProfile />
                    <LikeCard />
                    <TopNew />
                  </>
              ):(
                <TopNew />
              )}
            
          </aside>
        </div>
       <div className="col-lg-6 order-1 order-lg-2" >
           { auth ? (<CreatePost />):("")}
         
               {//? `http://localhost:8080/api/posts/photo/${post._id}`: DefaultImage
               //{`${photoAPI}/${post._id}` ? `${photoAPI}/${post._id}`: 'defaultImage.jpg'}
               post === "" ? ("loading ...") :(
                <ReadPostCard post={post} auth={auth} postImage={photoAPI+post._id} noImage={DefaultImage} imageAlt={post.title} singlePost={true} />
               )
            }
              
       </div>
      <div className="col-lg-3 order-3">
                <aside className="widget-area">
                    <Notifications />
                    <Advert />
                    <FriendsZOne />
                </aside>
       </div>
      </div>
    </div>
  </div>
</main>
<ScrollToTop />

{/*<Footer />*/}
{/*<SecondFooter />*/}



            {/*
            <MainHeader />
            <SecondHeader />
                <Container>
                    <Row>
                        <Col md="8" xs="8" sm="8" className="postCat"> 
                            <div className="post">
                                    <PostCard  posts={post} />
                            </div>        
                        </Col>
                        
                         <Col md="4" xs="4" sm="4"> <br /><br /> <PostTitle posts={post} /></Col>
                       
                    </Row>
              
                </Container>
                <Container>
                   <Footer />
                </Container>
            */}
            </>

        )
    }
}
export default SinglePost;