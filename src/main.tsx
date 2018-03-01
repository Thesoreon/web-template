import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers/reducer';

const createStoreWithMiddleware = applyMiddleware()(createStore);

/* Components */
import { Test, Test2 } from "./components/test.component";

import "./style/main.less";

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/test2" component={Test2}/>
                <Route path="/" component={Test}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("example")
);