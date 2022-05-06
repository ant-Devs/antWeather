const apiDetails = require("./apiDetails");

export default async function getWeather(
	locationCode,
	includeDetails = true
) {
	try {
		const url = `${apiDetails.weatherURL}${locationCode}?apikey=${apiDetails.apiKey2}&details=${includeDetails}`;

		const data = await fetch(url);
		const jsonData = await data.json();
		return jsonData;
	} catch (err) {
		console.error(err);
	}
}
