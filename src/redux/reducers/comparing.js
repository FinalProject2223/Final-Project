const initialState = {
	comparingCoursesList: [],
};

const comparing = (state = initialState, action) => {
	switch (action.type) {
		case "COURSE_ADD_TO_COMPARE":
			return {
				...state,
				comparingCoursesList: [...state.comparingCoursesList, action.payload],
			};

		case "COURSE_DELETE_FROM_COMPARE":
			return {
				...state,
				comparingCoursesList: action.payload,
			};
		default:
			return state;
	}
};

export default comparing;
