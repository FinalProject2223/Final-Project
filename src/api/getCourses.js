import axios from "axios";

export const getCourses = async () => {
	const response = await axios.get("http://localhost:3001/courses");
	return response.data;
};
