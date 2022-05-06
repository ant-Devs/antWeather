import { ipURL } from "./apiDetails";

async function getLocation2() {
	console.log(ipURL);
	const data = await fetch(ipURL);
	const jsonData = await data.json();

	return jsonData;
}

export default getLocation2;
