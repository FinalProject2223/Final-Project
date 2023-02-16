import axios from "axios";

export const patchCourses = async (id, el) => {
	await axios.patch(`http://localhost:3001/courses/${id}`, el);
};
