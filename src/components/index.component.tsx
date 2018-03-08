import * as React from "react";
import { Route } from "react-router-dom";

/* Components */
import Main from "./main.component";
import Resources from "./resources.component";
import requireAuth from "./requireauthentication";

export default class Index extends React.Component {
    render() {
        return(
            <div>
                <Main />
                <Route path="/resources" component={requireAuth(Resources)}/>
            </div>
        );
    }
}