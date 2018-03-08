import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { initializeStore } from "./store";

import Index from "./components/index.component";

/* Styles */
import "./style/main.less";

ReactDOM.render(
    <Provider store={initializeStore()}>
        <BrowserRouter>
            <Switch>
                <Index />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("MOUNT")
);