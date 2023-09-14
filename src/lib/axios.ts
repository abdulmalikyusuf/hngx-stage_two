import axios from "axios";

// let token = localStorage.getItem("themoviedb_token");
const token =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2RkNzZmZjczYmE0ODRmMDE0YjQwNThjZGJjMzE0YiIsInN1YiI6IjY0ZmZlOGJhMWJmMjY2MDEzYTc0ZGJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lhpMWxW96J6SEbB6Qq1sBmlUX6r468x3pSeVE02zX2U";

const axiosInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	timeout: 30000,
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${token}`,
	},
});

export const axiosInterceptor = axios.interceptors.request.use((config) => {});

export default axiosInstance;
