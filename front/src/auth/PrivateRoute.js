import React from "react";
import { Route } from "react-router-dom";
import { isAuthenticated } from "./index";
import SiginUp from '../screen/users/SignUp';

const PrivateRoute = ({ component: Component, ...rest }) => (
    // props means components passed down to this pricate route component
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <SiginUp />
                /*
                <Redirect
                    to={{
                     
                        
                        pathname: "/signin",
                        state: { from: props.location }
                        
                    }}
                />
                */
            )
        }
    />
);

export default PrivateRoute;
