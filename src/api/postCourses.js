import { Description } from "@mui/icons-material";
import axios from "axios";

export const postCourses = async (task) => {
	await axios.post("http://localhost:3001/courses", task);
};





