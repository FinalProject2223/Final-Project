import { configureStore } from "@reduxjs/toolkit";
import courses from "./reducers/courses";

const store = configureStore({ reducer: { courses } });

export default store;
