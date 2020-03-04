import React from "react";
import {Route,Switch} from "react-router-dom";
import Post from "./screen/post/Post";
import SignIn from "./screen/users/SignIn";
import SignUp from "./screen/users/SignUp";
import SinglePost from "./screen/post/SinglePost";
import Profile  from "./screen/users/Profile";
import About from "./screen/users/About";
import Photo from "./screen/users/Photo";
import Friend from "./screen/users/Friend";

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/posts" component={Post}  />
            <Route exact path="/post/:postId" component={SinglePost}  />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/:userId" component={Profile} />
            <Route exact path="/about/:userId" component={About} />
            <Route exact path="/photo/:userId" component={Photo} />
            <Route exact path="/friend/:userId" component={Friend} />
            <Route exact path="/" component={SignUp} />
        </Switch>
    </div>
);
export default MainRouter;