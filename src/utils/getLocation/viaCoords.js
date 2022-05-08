import axios from "axios";
import { geoLocationURL } from "../apiDetails";

async function getLocationDetailsByCoords(geoLocation) {
	try {
		const data = await axios.get(
			`${geoLocationURL}${geoLocation.coords.latitude},${geoLocation.coords.longitude}`
		);
		return data.data;
	} catch (err) {
		throw err;
	}
}

export default getLocationDetailsByCoords;
