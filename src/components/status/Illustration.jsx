import React, { useContext } from "react";
import { StatusContext } from "../../App";

const Illustration = () => {
	const status = useContext(StatusContext);

	const { WeatherIcon, WeatherText } = status;

	return (
		<div className="self-center text-center ">
			<p>
				{WeatherIcon ? (
					<img
						className="w-48 mx-auto"
						src={`./icons/${WeatherIcon}-s.png`}
						alt={WeatherText}
					/>
				) : (
					""
				)}
			</p>
			<p className="text-2xl font-semibold ">{WeatherText || ""}</p>
		</div>
	);
};

export default Illustration;
