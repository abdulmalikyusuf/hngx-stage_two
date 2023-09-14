import { NavLink, useParams } from "react-router-dom";
import MovieBoxLogo from "@/src/assets/images/moviebox-logo.png";
import Logout from "@/src/assets/images/Logout.png";

import Home from "@/src/assets/images/home.png";
import Movies from "@/src/assets/images/Movie Projector.png";
import TVSeries from "@/src/assets/images/TV Show.png";
import Upcoming from "@/src/assets/images/Calendar.png";

function Sidebar() {
	const params = useParams();
	const navItems = [
		{ title: "Home", icon: Home, href: "/" },
		{ title: "Movies", icon: Movies, href: `/movies/${params.movieId}` },
		{ title: "TV Series", icon: TVSeries, href: "/" },
		{ title: "Upcoming", icon: Upcoming, href: "/" },
	];
	return (
		<aside className="sticky top-0 hidden lg:block">
			<div className="flex-shrink-0 h-screen w-[226px] rounded-r-[45px] border border-black/30">
				<div className="mt-[52px] mx-auto w-fit">
					<div className="flex items-center gap-x-6">
						<img
							src={MovieBoxLogo}
							alt="Moviebox logo"
							className="rounded-full w-[50px] h-[50px]"
						/>
						<h1 className="text-2xl font-bold text-black">
							MovieBox
						</h1>
					</div>
				</div>
				<div className="mt-4">
					{navItems.map((nav) => (
						<NavLink
							to={nav.href}
							key={nav.title}
							className={({ isActive }) =>
								`flex gap-x-[15px] w-full justify-center items-center py-4 7 hover:border-r-[6px] border-[#BE123C] hover:bg-[#BE123C1A] ${
									isActive &&
									"border-r-[6px] border-[#BE123C] bg-[#BE123C1A] "
								}`
							}>
							<img src={nav.icon} alt={nav.title} className="" />
							<span className="font-semibold text-xl text-[#666]">
								{nav.title}
							</span>
						</NavLink>
					))}
				</div>
				<div className="w-[170px] mt-12 mx-auto rounded-[20px] border border-[#BE123CB2] bg-[#F8E7EB66] p-4">
					<div className="flex flex-col gap-y-2">
						<p>Play movie quizes and earn free tickets</p>
						<small>50k people are playing now</small>
						<button className="px-4 py-1.5 text-xs font-medium text-[#BE123C] rounded-[30px] bg-[#BE123C33]">
							Start playing
						</button>
					</div>
				</div>
				<button className="mt-11 flex w-fit mx-auto gap-x-2.5 items-center">
					<img src={Logout} alt="Logout" className="" />
					<span className="text-xl font-semibold text-[#666666]">
						Log out
					</span>
				</button>
			</div>
		</aside>
	);
}

export default Sidebar;
