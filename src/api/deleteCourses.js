import axios from "axios";

export const deleteCourses = async (id) => {
	await axios.delete(`http://localhost:3001/courses/${id}`);
};
 