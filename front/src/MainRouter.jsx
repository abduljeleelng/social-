import React from "react";
import {Route,Switch} from "react-router-dom";
import Post from "./screen/post/Post";
import SignIn from "./screen/users/SignIn";
import SignUp from "./screen/users/SignUp";

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/Posts" component={Post}  />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/" component={SignUp} />
        </Switch>
    </div>
);
export default MainRouter;