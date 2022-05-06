const apiDetails = require("./apiDetails");

module.exports = async function getLocation(city) {
	try {
		const url = `${apiDetails.locationsURL}?apikey=${apiDetails.apiKey2}&q=${city}`;

		const data = await fetch(url);
		const jsonData = await data.json();

		return jsonData;
	} catch (err) {
		console.error(err.message);
		throw err;
	}
};
