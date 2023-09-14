import { useLoaderData, useNavigation } from "react-router-dom";

import BestMovies from "@/src/assets/images/best-movies.png";
import Showtimes from "@/src/assets/images/Two Tickets.png";
import MoreOptions from "@/src/assets/images/List.png";
import ListLight from "@/src/assets/images/List-light.png";
import Chevron from "@/src/assets/images/Chevron.png";
import Star from "@/src/assets/images/Star.png";
import Sidebar from "../components/movie/sidebar";
import { MovieDetail } from "@/src/types";
import Logo from "../components/logo";
import { useState } from "react";
import Loader from "../components/loader/loader";

function Movie() {
	const movie = useLoaderData() as MovieDetail;
	const navigation = useNavigation();

	const [openSidebar, setOpenSidebar] = useState(true);

	return (
		<>
			{navigation.state === "loading" ? (
				<Loader />
			) : (
				<>
					<header className="lg:hidden bg-[#BE123C] h-16 w-full px-4 md:px-10 lg:px-20 flex items-center justify-between">
						<div className="">
							<Logo />
						</div>
						<button
							className=""
							onClick={() => setOpenSidebar(!openSidebar)}>
							<img
								src={ListLight}
								alt="Open sidebar"
								className=""
							/>
						</button>
					</header>
					<div className="flex items-start font-Poppins">
						{openSidebar && <Sidebar />}
						<main className="m-4 md:m-5 lg:m-[38px] mr-4 md:mr-10 lg:mr-[52px] flex-grow-0 w-full">
							<img
								src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
								alt={movie.overview}
								className="object-contain w-full h-[90dvh]"
							/>
							<div className="flex flex-col mt-8 max-lg:gap-y-4 lg:flex-row">
								<h4 className="flex flex-wrap text-xl font-medium lg:text-2xl gap-x-4">
									<span data-testid="movie-title">
										{movie.title}
									</span>{" "}
									•{" "}
									<span data-testid="movie-release-date">
										{movie.release_date}
									</span>{" "}
									•<span>PG-13</span> •{" "}
									<span data-testid="movie-runtime">
										{`${movie.runtime}m`}
										{/* {Math.floor(movie.runtime / 60)}h{" "}
								{movie.runtime % 60}m */}
									</span>
								</h4>
								<div className="flex items-center justify-between flex-grow lg:ml-4">
									<div className="flex gap-x-2.5">
										{movie.genres.map((genre) => (
											<p
												key={genre.id}
												className="w-[84px] flex items-center justify-center border border-[#F8E7EB] rounded-[15px] text-[15px] font-medium text-[#B91C1C]">
												{genre.name}
											</p>
										))}
									</div>
									<div className="flex gap-x-2.5">
										<img
											src={Star}
											alt="Star"
											className=""
										/>
										<h6 className="text-xl font-medium text-[#666]">
											<span className="text-[#E8E8E8] text-2xl">
												{movie.vote_average.toPrecision(
													2
												)}{" "}
											</span>
											| 350k
										</h6>
									</div>
								</div>
							</div>
							<div className="mt-6">
								<div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-[26px]">
									<div className="">
										<p
											data-testid="movie-overview"
											className="text-xl leading-none text-[#333]">
											{movie.overview}
										</p>
										<div className="flex flex-col gap-y-8 mt-9">
											<p className="text-xl text-[#BE123C]">
												<span className="text-[#333]">
													Director:
												</span>{" "}
												Joseph Kosinski
											</p>
											<p className="text-xl text-[#BE123C]">
												<span className="text-[#333]">
													Writers :
												</span>{" "}
												Jim Cash, Jack Epps Jr, Peter
												Craig
											</p>
											<p className="text-xl text-[#BE123C]">
												<span className="text-[#333]">
													Stars :
												</span>{" "}
												Tom Cruise, Jennifer Connelly,
												Miles Teller
											</p>
											<div className="flex w-full lg:w-[785x] pr-[26px] text-xl items-center font-medium rounded-[10px] border border-[#C7C7C7] bg-[#FFFFFFCC]">
												<button className="py-3 px-5 bg-[#BE123C] rounded-[10px] text-white">
													Top rated movie #65
												</button>
												<span className="ml-6">
													Awards 9 nominations
												</span>
												<img
													src={Chevron}
													alt="Chevron"
													className="ml-auto"
												/>
											</div>
										</div>
									</div>
									<div className="w-[360px] flex-shrink-0">
										<button className="flex items-center gap-x-2.5 justify-center bg-[#BE123C] rounded-[10px] text-white font-medium w-full py-3">
											<img
												src={Showtimes}
												alt="See Showtimes"
											/>
											<span>See Showtimes</span>
										</button>
										<button className="mt-3 flex items-center gap-x-2.5 justify-center bg-[#BE123C1A] border border-[#BE123C] rounded-[10px] text-[#333] font-medium w-full py-3">
											<img
												src={MoreOptions}
												alt="More watch options"
											/>
											<span>More watch options</span>
										</button>
										<div className="relative mt-8">
											<img
												src={BestMovies}
												alt="More movies"
												className=""
											/>
											<div className="absolute inset-x-0 bottom-0">
												<div className="py-2.5 flex gap-x-3 px-4 rounded-[10px] bg-[#12121280] backdrop-blur-[2px]">
													<img
														src={ListLight}
														alt="More movies"
														className=""
													/>
													<p className="text-sm font-medium text-[#E8E8E8]">
														The Best Movies and
														Shows in September
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</main>
					</div>
				</>
			)}
		</>
	);
}

export default Movie;
