import getWeather from "../getWeather";
import viaCoords from "./viaCoords";

const GeolocationPositionError = {
	PERMISSION_DENIED: 1,
	POSITION_UNAVAILABLE: 2,
	TIMEOUT: 3,
};

export async function successCallback(position) {
	console.info("Position obtained: ");

	try {
		this.setStatus({ ...this.status, loading: true, isError: false });

		const locationDetails = await viaCoords(position);
		const locationKey = locationDetails.Key;

		if (!("Key" in locationDetails)) {
			console.info("location key unavailable");
			throw new Error("location key unavailable");
		}
		console.info("location key obtained...");
		const weatherDetails = await getWeather(locationKey);

		if (!weatherDetails) {
			console.log("Weather details not available");
			throw new Error("weather details unavailable");
		}

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
		console.trace(err);
		this.setStatus({ ...this.status, loading: false, isError: true });
	}
}

export function errorHandler(err) {
	const { code } = err;
	switch (code) {
		case GeolocationPositionError.TIMEOUT:
			// Handle timeout.
			console.warn("Failed to get location. \n err: timed out");
			break;
		case GeolocationPositionError.PERMISSION_DENIED:
			// User denied the request.
			console.warn("Permission denied; failed to get location");
			break;
		case GeolocationPositionError.POSITION_UNAVAILABLE:
			// Position not available.
			console.warn("Position unavailable; failed to get location");
			break;
		default:
			break;
	}
}

export const options = {
	enableHighAccuracy: true,
	timeout: 60000,
	maximumAge: 600_000,
};
