// utils
import getLocationDetailsByText from "./getLocation/viaText";
import getWeather from "./getWeather";

export default async function dispatch(action) {
	try {
		this.setStatus({ ...this.status, loading: true, isError: false });

		const locationDetails = await getLocationDetailsByText(action);
		if (!("Key" in locationDetails)) {
			console.log("location key unavailable");
			throw new Error("location key unavailable");
		}
		const locationKey = locationDetails.Key;

		console.info("location key obtained...");
		const weatherDetails = await getWeather(locationKey);
		if (!weatherDetails) {
			console.log("Weather details not available");
			throw new Error("weather details unavailable");
		}
		console.log("weather details obtained");

		let newState = {
			...locationDetails,
			...weatherDetails,
		};

		this.setStatus({
			...this.status,
			...newState,
			loading: false,
			isError: false,
		});

		//
	} catch (err) {
		console.error(err);
		this.setStatus({
			...this.status,
			loading: false,
			isError: true,
			errorMessage: err.message,
		});
	}
}
