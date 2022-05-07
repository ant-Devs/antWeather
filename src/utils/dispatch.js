// utils
import getLocationDetailsByText from "./getLocation/viaText";
import getWeather from "./getWeather";

export default async function dispatch(action) {
	try {
		this.setStatus({ ...this.status, loading: true, isError: false });

		const locationDetails = await getLocationDetailsByText(action);
		const locationKey = locationDetails[0].Key;

		if (!locationKey) {
			console.log("location key unavailable");
			throw new Error("location key unavailable");
		}
		console.log("location key obtained...");
		const weatherDetails = await getWeather(locationKey);

		if (!weatherDetails) {
			console.log("Weather details not available");
			throw new Error("weather details unavailable");
		}

		let newState = {
			...locationDetails[0],
			...weatherDetails[0],
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
		this.setStatus({ ...this.status, loading: false, isError: true });
	}
}
