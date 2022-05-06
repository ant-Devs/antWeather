import { geoLocationURL } from "./apiDetails";

async function getLocation2(geoLocation) {
	const data = await fetch(
		`${geoLocationURL}${geoLocation.coords.latitude},${geoLocation.coords.longitude}`
	);
	const jsonData = await data.json();

	return jsonData;
}

export default getLocation2;
