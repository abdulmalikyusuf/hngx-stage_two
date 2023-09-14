import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movies";
import axiosInstance from "./lib/axios";
import Search from "./pages/search";
import NotFound from "./pages/404";
import Error from "./components/error";
import "./App.css";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<div className="w-full max-w-[1440px]">
					<Outlet />
				</div>
			),
			children: [
				{
					path: "",
					loader: async ({ request }: { request: Request }) => {
						const res = axiosInstance
							.get("/movie/top_rated?language=en-US&page=1", {
								signal: request.signal,
							})
							.then((res) => res.data.results)
							.catch((err) => {
								console.log(err);
								return null;
							});

						return res;
					},
					element: <Home />,
					errorElement: <Error />,
				},
				{
					path: "movies/:movieId",
					element: <Movie />,
					errorElement: <Error />,
					loader: async ({ request, params }) => {
						const res = axiosInstance
							.get(
								`/movie/${params.movieId}?language=en-US&page=1`,
								{
									signal: request.signal,
								}
							)
							.then((res) => res.data)
							.catch((err) => {
								console.log(err);
								return null;
							});
						return res;
					},
				},
				{
					path: "search",
					element: <Search />,
				},
			],
		},
		{
			path: "*",
			element: <NotFound />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
