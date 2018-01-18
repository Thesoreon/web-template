import * as React from "react";

import { Test } from "./test.component";

export class Index extends React.Component {
    
    public render(): JSX.Element {
        return(
            <div>
                <Test/>
            </div>
        );
    }

}