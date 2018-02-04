import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducer';

const createStoreWithMiddleware = applyMiddleware()(createStore);

/* Components */
import { Index } from "./components/index.component";

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Index />
    </Provider>,
    document.getElementById("example")
);