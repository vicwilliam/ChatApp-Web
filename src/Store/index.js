import {Store} from 'redux';
import rootReducer from "./reducer/rootReducer";
import {configureStore} from "@reduxjs/toolkit";

const store: Store = configureStore({
    reducer: rootReducer,
});

export default store;
