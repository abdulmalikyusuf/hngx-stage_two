import { useLoaderData, useNavigation } from "react-router-dom";

import IMDb from "@/src/assets/images/IMDb-logo.png";
import RottenTomato from "@/src/assets/images/Rotten Tomato-logo.png";
import MovieCategory from "../components/movies-category";
import Logo from "@/src/components/logo";
import SearchBar from "../components/home/search-bar";
import Footer from "@/src/components/footer";
import { Movie } from "../types";
import Loader from "../components/loader/loader";

function Home() {
	const navigation = useNavigation();
	const data = useLoaderData() as Movie[];
	const movies = data.slice(0, 10);
	const randomIndex = Math.floor(Math.random() * movies.length);
	const featuredMovie = movies.at(randomIndex);

	return (
		<>
			{navigation.state === "loading" ? (
				<Loader />
			) : (
				<div className="font-DMSans">
					<div className="relative h-[600px] grid">
						<div className="bg-gray-200 home-poster">
							<img
								src={`https://image.tmdb.org/t/p/w1280/${featuredMovie.poster_path}`}
								alt={featuredMovie?.overview}
								className="h-[600px] object-cover object-center w-full"
							/>
						</div>
						<div className="bg-white home-poster bg-opacity-10" />
						<div className="mx-4 md:mx-10 lg:mx-[98px] pt-[15px] home-poster">
							<div className="flex flex-wrap gap-y-2 lg:items-center lg:justify-between">
								<Logo />
								<SearchBar />
								<div className="flex items-center order-2 max-lg:ml-auto lg:order-3 gap-x-7">
									<p className="font-bold text-white">
										Sign in
									</p>
									<button className="rounded-full w-9 h-9 p-1.5 flex items-center bg-[#BE123C]">
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z"
												fill="white"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z"
												fill="white"
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className="absolute inset-y-0">
								<div className="flex items-center h-full">
									<div className="flex flex-col gap-y-4 max-w-[404px] text-white">
										<h1 className="text-5xl leading-[52px] font-bold">
											{featuredMovie?.title}
										</h1>
										<div className="flex items-center">
											<img
												src={IMDb}
												alt="IMDb logo"
												className=""
											/>
											<p className="text-xs leading-none ml-2.5">
												{featuredMovie?.vote_average *
													10}
												.0 / 100
											</p>
											<div className="flex items-center gap-x-2.5 ml-9">
												{featuredMovie?.vote_average >
													5 && (
													<img
														src={RottenTomato}
														alt="Rotten Tomato logo"
														className=""
													/>
												)}
												<p>
													{featuredMovie?.vote_average *
														10}
													%
												</p>
											</div>
										</div>
										<p className="text-sm leading-[18px] font-medium w-[302px]">
											{featuredMovie?.overview}
										</p>
										<a
											href=""
											className="px-4 py-1.5 w-fit flex gap-x-2 items-center rounded-md bg-[#BE123C]">
											<svg
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
													fill="white"
												/>
											</svg>

											<span className="text-sm font-bold leading-6 text-white uppercase">
												Watch trailer
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="relative">
						<MovieCategory
							categoryTitle="Featured Movie"
							currentItem={featuredMovie.id}
							data={movies}
						/>
					</div>
					<Footer />
				</div>
			)}
		</>
	);
}

export default Home;
