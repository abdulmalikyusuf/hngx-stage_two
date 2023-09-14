import "./style.css";
function Loader() {
	const style = {
		width: "100px",
		"--c1": "#BE123C",
		"--c2": "#E97F02",
		"--c3": "#8A9B0F",
		"--c4": "#3FB8AF",
	} as React.CSSProperties;
	return (
		<div className="absolute inset-0 flex flex-col items-center justify-center">
			<div className="loader"></div>
			<div className="loader" style={style} />
			<h4 className="text-4xl font-bold">Loading...</h4>
		</div>
	);
}

export default Loader;
