import React from "react";

import MovieBoxLogo from "@/src/assets/images/moviebox-logo.png";

function Logo() {
	return (
		<div className="flex items-center order-1 gap-x-6">
			<img
				src={MovieBoxLogo}
				alt="Moviebox logo"
				className="rounded-full w-[50px] h-[50px]"
			/>
			<h1 className="text-2xl font-bold text-white">MovieBox</h1>
		</div>
	);
}

export default Logo;
