import React from "react";
import {Route,Switch} from "react-router-dom";
import Post from "./screen/post/Post";
import SinglePost from "./screen/post/SinglePost";
import Profile  from "./screen/users/Profile";
import Timeline  from "./screen/users/Timeline";
//import About from "./screen/users/About";
//import Photo from "./screen/users/Photo";
//import Friend from "./screen/users/Friend";
//import EditProfile from "./screen/users/EditProfile";
import PrivateRoute from "./auth/PrivateRoute";

const MainRouter = () => (
    <div>
        <Switch>
            <PrivateRoute exact path="/user" component={Timeline}   />
            <PrivateRoute exact path="/" component={Post}  />
            <Route exact path="/user/:userId" component={Profile} />
            <Route exact path="/post/:postId" component={SinglePost}  />
            {/*
            <Route exact path="/about/:userId" component={About} />
            <Route exact path="/photo/:userId" component={Photo} />
            <Route exact path="/friend/:userId" component={Friend} />
            <PrivateRoute exact path="/user/edit" component={EditProfile} />
 */}
        </Switch>
    </div>
);
export default MainRouter;