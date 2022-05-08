import axios from "axios";

const apiDetails = require("./apiDetails");

export default async function getWeather(
	locationCode,
	includeDetails = true
) {
	try {
		const data = await axios.get(
			`${apiDetails.weatherURL}${locationCode}?apikey=${apiDetails.apiKey2}&details=${includeDetails}`
		);
		return data.data[0];
	} catch (err) {
		throw err;
	}
}
