import React,{Component} from 'react';
import {Container,Row,Col} from 'reactstrap'
import {PostCard,PostTitle, NewPostCard, PostsCard, ReadPostCard} from '../../componet/Card';
import { Footer, ScrollToTop, SecondFooter } from '../../componet/Footer.jsx';
import {MainHeader, SecondHeader } from '../../componet/Header.jsx';
import {postList} from "./apiPost"
import { CardProfile, LikeCard, TopNew } from '../../componet/RSideBar';
import { Notifications, Advert, FriendsZOne } from '../../componet/LSideBar';

class Post extends Component{
    constructor(props){
        super(props);
        this.state= {
            post:[],
        };
    };
    loadPosts(){
        postList().then(data=>{
            if(data.undefined || data.error || data.null){
                alert("server Error");
            }
            this.setState({post:data});
        })
    }
    componentDidMount(){
        this.loadPosts();
    }
    render(){
        const {post} = this.state;
        ///console.log(JSON.stringify(post));
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
              <CardProfile />
              <LikeCard />
              <TopNew />
          </aside>
        </div>
       <div className="col-lg-6 order-1 order-lg-2" >
           <NewPostCard />
           <ReadPostCard />
           
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