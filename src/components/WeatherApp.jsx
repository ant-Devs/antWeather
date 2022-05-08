import React, { useEffect, useState } from "react";

//utils
import dispatch from "../utils/dispatch";

import {
	errorHandler,
	options,
	successCallback,
} from "../utils/getLocation/geoPosition";
import getWeather from "../utils/getWeather";

// components
import { Input, Header, Status, Error, Loading } from "./imports";

export const StatusContext = React.createContext();

const WeatherApp = ({ props }) => {
	const initialStatus = {
		loading: false,
		isError: false,
	};
	const [status, setStatus] = useState(initialStatus);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			successCallback.bind({ setStatus, status }),
			errorHandler.bind({ setStatus, status }),
			options
		);
	}, []);

	return (
		<StatusContext.Provider value={status}>
			<div
				className={`${props} transition-opacity duration-1000 App mt-5 w-10/12 md:w-9/12 mx-auto flex flex-col items-center tracking-[0.2px]`}
			>
				<Header />
				<Input
					onSubmitHandler={dispatch.bind({ setStatus, status })}
				/>
				{status.isError ? (
					<Error errorMessage={status.errorMessage} />
				) : status.loading ? (
					<Loading />
				) : (
					<Status status={status} />
				)}
			</div>
		</StatusContext.Provider>
	);
};

export default WeatherApp;
