const initialState = {};

const courses = (state = initialState, action) => {
	let userInfo = JSON.parse(localStorage.getItem('User'))

    return state = userInfo
};

export default courses;
