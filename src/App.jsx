import React, { useEffect, useState } from "react";
import "./styles/body.css";

// utils
import getLocation from "./utils/getLocation";
import getWeather from "./utils/getWeather";
import getLocation2 from "./utils/getLocation2";

// components
import Input from "./components/Input/Input";
import Header from "./components/Header";
import Status from "./components/status/Status";
import Error from "./components/Error";
import Loading from "./components/Loading";
export const StatusContext = React.createContext();

function App() {
	const [loading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [status, setStatus] = useState({});

	async function dispatch(action) {
		console.log("reducing...");
		try {
			setLoading(true);

			const locationDetails = await getLocation(action);
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

			setStatus(newState);
			setLoading(false);
			//
		} catch (err) {
			console.error(err);
			setLoading(false);
			setIsError(true);
		}
	}

	async function fetchData() {
		setLoading(true);
		const data = await getLocation2();
		console.log(data.city);

		const locationDetails = await getLocation(data.city);
		const weatherDetails = await getWeather(locationDetails[0].Key);
		console.log(weatherDetails);

		let newState = {
			...locationDetails[0],
			...weatherDetails[0],
		};

		setStatus(newState);
		setLoading(false);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<StatusContext.Provider value={status}>
			<div className="App mt-5 w-10/12 md:w-8/12 mx-auto flex flex-col items-center ">
				<Header />
				<Input onSubmitHandler={dispatch} />
				{isError ? (
					<Error />
				) : loading ? (
					<Loading />
				) : (
					<Status status={status} />
				)}
			</div>
		</StatusContext.Provider>
	);
}

export default App;
