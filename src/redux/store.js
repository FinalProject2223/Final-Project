import { configureStore } from "@reduxjs/toolkit";
import courses from "./reducers/courses";
import comparing from "./reducers/comparing";
import auth from "./reducers/auth";
import favorites from './reducers/favorites'

const store = configureStore({ 
    reducer: { courses, comparing, auth , favorites} 
});

export default store;
