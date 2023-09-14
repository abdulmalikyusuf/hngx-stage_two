import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar() {
	const navigate = useNavigate();
	const [query, setQuery] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};
	return (
		<div className="flex items-center justify-between px-2 py-1.5 border-2 border-[#D1D5DB] rounded-md w-full lg:w-[525px] order-3 lg:order-2">
			<input
				value={query}
				onChange={handleChange}
				onKeyUp={(e) => {
					if (e.key === "Enter") navigate(`search?q=${query}`);
				}}
				placeholder="What do you want to watch?"
				className="z-30 w-full text-white bg-transparent focus:outline-none"
			/>
			<button
				className="ml-4"
				onClick={() => navigate(`search?q=${query}`)}>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</div>
	);
}

export default SearchBar;
