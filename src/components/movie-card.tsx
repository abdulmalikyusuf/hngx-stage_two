import React from "react";

import IMDb from "@/src/assets/images/IMDb-logo.png";
import RottenTomato from "@/src/assets/images/Rotten Tomato-logo.png";
import { NavLink } from "react-router-dom";
import { generateGenreNames } from "../lib/genre";
import { Movie } from "../types";

function MovieCard({ data, isCurrent }: { data: Movie; isCurrent?: boolean }) {
	return (
		<div
			data-testid="movie-card"
			className="grid gap-y-3 w-[250px] group relative cursor-pointer">
			<NavLink
				to={`movies/${data.id}`}
				className={({ isActive, isPending }) => "absolute inset-0 z-30"}
			/>
			<div className="h-[370px] relative">
				<img
					data-testid="movie-poster"
					src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
					alt={data.overview}
					className="absolute"
				/>
				<div className="justify-between hidden mx-4 mt-5 group-hover:flex">
					<div className="rounded-xl bg-[rgba(243,_244,_246,_0.50)] backdrop-blur-[1px] py-[3px] px-2 flex items-center">
						<p className="font-bold text-xs text-[#111827] ">
							{data.video ? "MOVIE" : "TV SERIES"}
						</p>
					</div>
					<button className="rounded-full bg-[rgba(243,_244,_246,_0.50)] backdrop-blur-[1px] py-[3px]px-2 flex items-center justify-center h-[30px] w-[30px]">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
								fill="#D1D5DB"
							/>
						</svg>
					</button>
				</div>
			</div>
			<p className="text-xs font-bold text-[#9CA3AF]">
				USA, {new Date(data.release_date).getFullYear()}
				{isCurrent && " - Current"}
			</p>
			<h6
				data-testid="movie-title"
				className="text-lg font-bold text-[#111827]">
				{data.title}
			</h6>
			<div className="flex items-center">
				<img src={IMDb} alt="IMDb logo" className="" />
				<p className="text-xs leading-none ml-2.5">
					{data.vote_average}
				</p>
				<div className="flex items-center gap-x-2.5 ml-auto">
					{data.vote_average > 5 && (
						<img
							src={RottenTomato}
							alt="Rotten Tomato logo"
							className=""
						/>
					)}
					<p>{data.vote_average * 10}%</p>
				</div>
			</div>
			<small className="text-xs font-bold text-[#9CA3AF]">
				{generateGenreNames(data.genre_ids)}
			</small>
			<p className="flex text-xs font-bold text-[#9CA3AF] gap-x-2">
				Release date:
				<small data-testid="movie-release-date" className="text-xs">
					{new Date(data.release_date).toUTCString()}
				</small>
			</p>
		</div>
	);
}

export default MovieCard;
