import React,{Component} from 'react';
import {ReadPostCard,EmptyPost} from '../../componet/Card';
import {ScrollToTop, } from '../../componet/Footer.jsx';
import {MainHeader, SecondHeader } from '../../componet/Header.jsx';
import {postList} from "./apiPost";
import {isAuthenticated} from "../../auth/index";
import CreatePost from "./CreatePost";
import { CardProfile, LikeCard, TopNew } from '../../componet/RSideBar';
import { Notifications, Advert, FriendsZOne } from '../../componet/LSideBar';

class Post extends Component{
    constructor(props){
        super(props);
        this.state= {
            post:[],
            page:1,
            auth:false,
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
        const token = isAuthenticated().token;
        if(token !== undefined){
            this.setState({auth:true});
        }
        const {page}=this.state;
        this.loadPosts(page);
    };
    loadMore = number => {
        this.setState({ page: this.state.page + number });
        this.loadPosts(this.state.page + number);
    };
    loadLess = number => {
        this.setState({ page: this.state.page - number });
        this.loadPosts(this.state.page - number);
    };
    render(){
        const {post,auth} = this.state;
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
           {post.length > 0 ? post.map((post,index)=>(
               <ReadPostCard key={index} post={post} />
                )):<EmptyPost post={post} />}
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
export default Post;