function NotFound() {
	return (
		<div
			style={{
				backgroundImage:
					"linear-gradient(135deg, #684ca0 35%, #1c4ca0 100%)",
			}}
			className="flex items-center min-h-screen text-white gradient">
			<div className="container flex flex-wrap items-center p-4 mx-auto">
				<div className="w-full p-4 text-center md:w-5/12">
					<img
						src="https://themichailov.com/img/not-found.svg"
						alt="Not Found"
					/>
				</div>
				<div className="w-full p-4 text-center md:w-7/12 md:text-left">
					<div className="text-6xl font-medium">404</div>
					<div className="mb-4 text-xl font-medium md:text-3xl">
						Oops. We are having issues with our API.
					</div>
					<div className="mb-8 text-lg">
						You may have mistyped the address or the page may have
						moved.
					</div>
					<a href="/" className="p-4 border border-white rounded">
						Go Home
					</a>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
