import * as React from "react";

import { Navigation } from "./navigation.component";

export class Index extends React.Component {
    
    public render(): JSX.Element {
        return(
            <div>
                <h1>Thesoreon's Official Website</h1>

                <Navigation/>
            </div>
        );
    }

}