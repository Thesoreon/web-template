import * as React from "react";

export class Navigation extends React.Component {

    public render(): JSX.Element {
        return (
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">PROJECTS</a></li>
                <li><a href="#">CONTACT</a></li>
                <li><a href="#">ABOUT</a></li>
            </ul>
        );
    }

}