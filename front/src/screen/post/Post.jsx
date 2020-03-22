import React,{Component} from 'react';
import {ReadPostCard,EmptyPost} from './component';
import {MainHeader, SecondHeader } from '../../componet/Header.jsx';
import {postList,photoAPI,deletePost} from "./apiPost";
import {isAuthenticated} from "../../auth/index";
import CreatePost from "./CreatePost";
import DefaultImage from "./defaultImage.jpg";
import NoProfile from "../users/images/avatar.jpg";
import { CardProfile, LikeCard, TopNew } from './component/RSideBar.jsx';
import { Notifications, Advert, FriendsZOne } from './component/LSideBar';
import NoCover from "../../images/mountains.jpg";

class Post extends Component{
    constructor(props){
        super(props);
        this.state= {
            post:[],
            page:1,
            auth:true,
            loading:true,
        };
    };
    loadPosts(page){
        postList().then(data=>{
            if(data.undefined || data.error || data.null){
                alert("server Error");
            }
            this.setState({post:data});
        })
    };
    componentDidMount(){
        const {page}=this.state;
        this.loadPosts(page);
        this.setState({loading:false});
    };
    loadMore = number => {
        this.setState({ page: this.state.page + number });
        this.loadPosts(this.state.page + number);
    };
    loadLess = number => {
        this.setState({ page: this.state.page - number });
        this.loadPosts(this.state.page - number);
    };
    handledelete=(postId,token)=>{
      deletePost(postId,token)
      .then(data=>{
        if(data.error){console.log(data)}
        console.log(data);
        alert(data.message);
        window.location.reload("/");
      })
    }
    render(){
        const {post,auth,loading} = this.state;
        //const token = isAuthenticated().token;
        const userId = isAuthenticated().user._id
        return(
            <>
            <MainHeader noProfilePhoto={NoProfile} profilePhoto=""  />
            <SecondHeader noProfilePhoto={NoProfile} profilePhoto="" />
<main>
  <div className="main-wrapper pt-80">
    <div className="container">
        <br />
       
        {loading ? (
                 <div className="row">
                 <div className="col-lg-3 order-2 order-lg-1">
                   <aside className="widget-area">
                           <h5> loading ...</h5>
                   </aside>
                 </div>
                <div className="col-lg-6 order-1 order-lg-2" >
                        <h1>Loading .....</h1>
                </div>
               <div className="col-lg-3 order-3">
                         <aside className="widget-area">
                            <h5>Loading ....</h5>
                         </aside>
                </div>
               </div>
        ) :(
      <div className="row">
        <div className="col-lg-3 order-2 order-lg-1">
          <aside className="widget-area">
                    <CardProfile noProfilePhoto={NoProfile} profilePhoto="" coverPhoto="" noCoverPhoto={NoCover} userId={userId} />
                    <LikeCard />
                    <TopNew />
          </aside>
        </div>
       <div className="col-lg-6 order-1 order-lg-2" >
          <CreatePost profileImage="" noProfileImage={NoProfile} />
           {post.length > 0 ? post.map((post,index)=>(
               //? `http://localhost:8080/api/posts/photo/${post._id}`: DefaultImage
               //{`${photoAPI}/${post._id}` ? `${photoAPI}/${post._id}`: 'defaultImage.jpg'}
               <ReadPostCard key={index} auth={auth} post={post} postImage={photoAPI+post._id} noImage={DefaultImage} imageAlt={post.title} profilePhoto="" noProfilePhoto={NoProfile} />
                )):<EmptyPost post={post} />
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
    
    )}
    </div>
  </div>
</main>


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
export default Post;