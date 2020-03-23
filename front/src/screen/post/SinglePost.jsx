import React,{Component} from 'react';
import {ReadPostCard} from './component';
//import {ScrollToTop, } from '../../componet/Footer.jsx';
import {MainHeader, SecondHeader } from '../../componet/Header.jsx';
import {singlePost,photoAPI} from "./apiPost";
import {isAuthenticated} from "../../auth/index";
import DefaultImage from "./defaultImage.jpg";
import NoProfile from "../users/images/avatar.jpg";
//import { CardProfile, LikeCard, TopNew } from '../../componet/RSideBar';
//import { Notifications, Advert, FriendsZOne } from '../../componet/LSideBar';
import { Redirect,Link } from 'react-router-dom';
import Comment from './component/Comment';
import {CommentList} from './component'
import {uncomment,like,unlike} from './apiPost';



class SinglePost extends Component{
    constructor(props){
        super(props);
        this.state= {
            post:"",
            page:1,
            auth:false,
            redirect:false,
            comments :
            [
                {"id":1, "name":"Ola","message":"Olayemi olanike",time:Date.now()},
                {"id":1, "name":"Ola","message":"Olayemi olanike",time:Date.now()},
                {"id":1, "name":"Ola","message":"Olayemi olanike",time:Date.now()},
                {"id":1, "name":"Ola","message":"Olayemi olanike",time:Date.now()},
                {"id":1, "name":"Ola","message":"Olayemi olanike",time:Date.now()},
                {"id":1, "name":"Ola","message":"Olayemi olanike",time:Date.now()}
           ], 
            comment:[],
            like:true,
            likes:0,
        };
    };
    deleteComment = comment => {
        const userId = isAuthenticated().user._id;
        const token = isAuthenticated().token;
        //const postId = this.props.postId;
        const postId = this.props.match.params.postId;
        uncomment(userId, token, postId, comment).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
               // this.props.updateComments(data.comments);
               window.location.reload();
            }
        });
    };
    deleteConfirmed = comment => {
        let answer = window.confirm(
            "Are you sure you want to delete your comment?"
        );
        if (answer) {
            this.deleteComment(comment);
        }
    };

    checkLike = likes => {
        const userId = isAuthenticated() && isAuthenticated().user._id;
        let match = likes.indexOf(userId) !== -1;
        return match;
    };

    likeToggle = () => {
        if (!isAuthenticated()) {
            this.setState({ redirectToSignin: true });
            return false;
        }
        let callApi = this.state.like ? unlike : like;
        const userId = isAuthenticated().user._id;
        const postId = this.state.post._id;
        const token = isAuthenticated().token;

        callApi(userId, token, postId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({
                    like: !this.state.like,
                    likes: data.likes.length
                });
            }
        });
    };
    componentDidMount(){
        const postId = this.props.match.params.postId;
        if (!postId){
            this.setState({redirect:true});
        }
        if(isAuthenticated()){
            this.setState({auth:true});
        }
        singlePost(postId)
        .then(data=>{
           if(data.error){
               return console.log(data)
            }else{
               this.setState({
                   post:data, 
                   comment:data.comments, 
                   likes: data.likes.length,
                   like: this.checkLike(data.likes),
                })
            }
        })
    };
    render(){
        const {post,auth,redirect,comment,like,likes} = this.state;
        if(redirect){ return <Redirect to="/posts" />}
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
                  
                    {/*<CardProfile />
                    <LikeCard />
                    <TopNew />*/}
                  </>
              ):( 
              ""
              )}
            
          </aside>
        </div>
       <div className="col-lg-6 order-1 order-lg-2" >
            {
               post === "" ? ("loading ...") :(
                <ReadPostCard 
                post={post} 
                auth={auth}
                postImage={photoAPI+post._id} 
                noImage={DefaultImage} 
                imageAlt={post.title} 
                singlePost={true} 
                profilePhoto="" 
                noProfilePhoto={NoProfile} 
                likeToggle={this.likeToggle}
                like={like}
                likes={likes}
                />
               )
            }
            {isAuthenticated() ? (
                            <Comment 
                            postId={this.props.match.params.postId}
                            />

            ):(<div className="card card-small"> Login to post comment  <Link to="/" >Login here</Link></div>)}
            <br />

            {comment.length > 0 ? comment.map((comment,i)=>{

                return(
                 <CommentList 
                 comment={comment} key={i} profilePhoto="" noProfilePhoto={NoProfile}
                 handleDelete={()=>this.deleteConfirmed(comment)}
                 />
                 )
                }) : <div className="card card-small">No Comment on this post</div>
            }    
        
           {/* <CommentList />*/}
       </div>
      <div className="col-lg-3 order-3">
                <aside className="widget-area">
                   {/* <Notifications />
                    <Advert />
                   <FriendsZOne />*/}
                </aside>
       </div>
      </div>
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
//import { Form } from 'reactstrap';
export default SinglePost;