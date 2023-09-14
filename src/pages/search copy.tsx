import { useState, useEffect } from "react";

import ListLight from "@/src/assets/images/List-light.png";
import Loader from "../components/loader/loader";
import Logo from "../components/logo";
import axiosInstance from "../lib/axios";
import MoviesCategory from "../components/movies-category";
import { useNavigate, useSearchParams } from "react-router-dom";

function Search() {
	const [searchResult, setSearchResult] = useState([]);
	const [isloading, setIsLoading] = useState(true);
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const query = searchParams.get("q");
	if (!query) {
		navigate("/");
	}

	const getData = async () => {
		setIsLoading(true);
		const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
		axiosInstance
			.get(url)
			.then((res) => {
				setIsLoading(false);
				setSearchResult(res.data.results);
			})
			.catch((err) => {
				setIsLoading(false);
				console.log(err);
			});
	};
	useEffect(() => {
		getData();

		return () => {};
	}, []);

	return (
		<div className="relative w-full">
			<header className="bg-[#BE123C] h-16 w-full px-4 md:px-10 lg:px-20 flex items-center justify-between">
				<div className="">
					<Logo />
				</div>
				<button className="">
					<img src={ListLight} alt="Open sidebar" className="" />
				</button>
			</header>
			{isloading ? (
				<div className="absolute inset-0 z-50 flex items-center justify-center h-screen bg-gray-50/20">
					<Loader />
				</div>
			) : searchResult.length > 0 ? (
				<div className="relative">
					<MoviesCategory
						categoryTitle="Your search result"
						data={searchResult}
					/>
				</div>
			) : (
				<div className="flex items-center justify-center mt-20">
					<h4 className="text-4xl font-bold">
						No movie matched your search result!
					</h4>
				</div>
			)}
		</div>
	);
}

export default Search;
