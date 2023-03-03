import { createAction } from "@reduxjs/toolkit";
import { getCourses } from "../api/getCourses";
import { postCourses } from "../api/postCourses";
import { deleteCourses } from "../api/deleteCourses";
import { patchCourses } from "../api/patchCourses";

export const coursesFetch = () => async (dispatch) => {
	try {
		dispatch(coursesFetching());
		const data = await getCourses();
		dispatch(coursesFetched(data));
	} catch (err) {
		dispatch(coursesFetchingError());
	}
};

// export const taskAddingWithPost = (task) => (dispatch) => {
// 	postTask(task);
// 	dispatch(taskAdd(task));
// };

// export const taskRemovingWithDelete = (id, filteredTasks) => (dispatch) => {
// 	deleteTask(id);
// 	dispatch(taskRemove(filteredTasks));
// };

// export const taskEditWithPut = (id, task, updatedTasks) => (dispatch) => {
// 	patchTask(id, task);
// 	dispatch(taskEdit(updatedTasks));
// };

const coursesFetching = createAction("COURSES_FETCHING");
const coursesFetched = createAction("COURSES_FETCHED");
const coursesFetchingError = createAction("COURSES_FETCHING_ERROR");


export const authTrueFetching = createAction("AUTH_TRUE");
export const authFalseFetching = createAction("AUTH_FALSE");

export const addCourseToCompare = createAction("COURSE_ADD_TO_COMPARE");
export const removeCourseFromCompare = createAction("COURSE_DELETE_FROM_COMPARE");


// const taskAdd = createAction("TASK_ADD");
// const taskRemove = createAction("TASK_REMOVE");
// const taskEdit = createAction("TASK_EDIT");
