import { configureStore } from "@reduxjs/toolkit";
import courses from "./reducers/courses";
import comparing from "./reducers/comparing";
import auth from "./reducers/auth";

const store = configureStore({ 
    reducer: { courses, comparing, auth , } 
});

export default store;
