import { Movie } from "../types";
import MovieCard from "./movie-card";

function MoviesCategory({
	data,
	categoryTitle,
	currentItem,
}: {
	data: Movie[];
	categoryTitle: string;
	currentItem?: number;
}) {
	return (
		<div className="mx-4 md:mx-10 lg:mx-[100px] mt-[70px]">
			<div className="flex flex-col gap-11">
				<div className="flex items-center justify-between">
					<h2 className="text-4xl font-bold text-black">
						{categoryTitle}
					</h2>
					<button className="flex items-center gap-x-2">
						<span className="text-lg leading-6 text-[#BE123C]">
							See more
						</span>
						<svg
							width="20"
							height="21"
							viewBox="0 0 20 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M7.5 4.66668L13.3333 10.5L7.5 16.3333"
								stroke="#B91C1C"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
				<div className="flex flex-wrap grid-cols-4 lg:grid gap-x-20 gap-y-32">
					{data.map((movie) => (
						<MovieCard
							key={movie.id}
							isCurrent={currentItem === movie.id}
							data={movie}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default MoviesCategory;
