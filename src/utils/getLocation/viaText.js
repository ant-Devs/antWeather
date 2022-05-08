import axios from "axios";

const apiDetails = require("../apiDetails");

export default async function getLocation(city) {
	try {
		const url = `${apiDetails.locationsURL}?apikey=${apiDetails.apiKey2}&q=${city}`;

		const data = await axios.get(url);
		return data.data[0];
	} catch (err) {
		throw err;
	}
}
