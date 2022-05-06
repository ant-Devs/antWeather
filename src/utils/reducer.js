// utils
import getLocation from "./getLocation";
import getWeather from "./getWeather";

const initialState = {
	location: {
		Version: 1,
	},
	weather: {
		WeatherText: "sunny",
	},
};

async function reducer(state, action) {
	console.log("reducing...");
	switch (action.type) {
		case "FETCH":
			try {
				this.setLoading(true);
				console.log("now loading..");
				console.log("Getting location details...");
				const locationDetails = await getLocation(action.location);
				const locationKey = locationDetails[0].Key;
				console.log(locationKey);
				if (locationKey) {
					console.log("location key obtained...");
					const weatherDetails = await getWeather(locationKey);

					if (weatherDetails) {
						this.setLoading(false);
						state = {
							location: { ...locationDetails[0] },
							weather: { ...weatherDetails[0] },
						};
						return state;
					} else {
						throw new Error("Weather details unavailable...");
					}
					//
				} else {
					throw new Error("location Key unavailable");
				}
			} catch (err) {
				console.log("an error occured");
				console.error(err);
				this.setLoading(false);
				this.setIsError(true);
			}
			return initialState;
			break;

		default:
			return initialState;
			break;
	}

	return initialState;
}

export { reducer, initialState };
