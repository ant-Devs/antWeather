import React, { useContext } from "react";
import { StatusContext } from "../WeatherApp";

const Illustration = () => {
	const status = useContext(StatusContext);

	const { WeatherIcon, WeatherText } = status;

	return (
		<div className="self-center text-center ">
			<p>
				{WeatherIcon ? (
					WeatherIcon < 10 ? (
						<img
							className="w-48 mx-auto"
							src={`./icons/0${WeatherIcon}-s.png`}
							alt={WeatherText}
						/>
					) : (
						<img
							className="w-48 mx-auto"
							src={`./icons/${WeatherIcon}-s.png`}
							alt={WeatherText}
						/>
					)
				) : (
					""
				)}
			</p>
			<p className="text-2xl font-semibold ">{WeatherText || ""}</p>
		</div>
	);
};

export default Illustration;
