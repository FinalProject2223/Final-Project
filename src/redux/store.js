import { configureStore } from "@reduxjs/toolkit";
import courses from "./reducers/courses";
import comparing from "./reducers/comparing";

const store = configureStore({ reducer: { courses, comparing } });

export default store;
