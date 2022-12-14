import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {createSignalRContext} from "react-signalr";
import App from "./App";
import store from "./Store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const SignalRContext = createSignalRContext();
export const useSignalREffect = SignalRContext.useSignalREffect;

root.render(<React.StrictMode>
    <Provider store={store}>
        <SignalRContext.Provider
            connectEnabled={true}
            url={"https://localhost:7156/ws"}
            dependencies={[]}
            transport={1}
        >
            <App/>
        </SignalRContext.Provider>
    </Provider>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
