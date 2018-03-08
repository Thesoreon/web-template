import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { authenticate } from "../actions";

interface Props {
    authenticated: boolean;
    authenticate: any;
}

class Header extends React.Component<Props, {}> {
    authButton() {
        if(this.props.authenticated) {
            return <button onClick={() => this.props.authenticate(false)}>SIGN OUT</button>
        } else {
            return <button onClick={() => this.props.authenticate(true)}>SIGN IN</button>
        }
    }
    
    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <Link to ="/">HOME</Link>
                    </li>
                    <li>
                        <Link to ="/resources">resources</Link>
                    </li>
                        {this.authButton()}
                    <li>
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state: any) {
    return { authenticated: state.authenticated }
}

export default connect(mapStateToProps, { authenticate })(Header);