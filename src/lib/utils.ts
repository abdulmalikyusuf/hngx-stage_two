export function utcDate(params: type) {
	const date = new Date();
	const now_utc = Date.UTC(
		date.getUTCFullYear(),
		date.getUTCMonth(),
		date.getUTCDate(),
		date.getUTCHours(),
		date.getUTCMinutes(),
		date.getUTCSeconds()
	);

	console.log(new Date(now_utc));
	console.log(date.toISOString());
}
