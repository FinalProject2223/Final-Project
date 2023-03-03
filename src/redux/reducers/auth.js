const initialState = {
	authList: "false",
	loadingStatus: "loaded",
};

const courses = (state = initialState, action) => {
	switch (action.type) {
		case "AUTH_TRUE":
			return {
                ...state,
				authList: "true",
			};
		case "AUTH_FALSE":
			return {
                ...state,
				authList: "false",
			};
		default:
			return state;
	}
};

export default courses;
