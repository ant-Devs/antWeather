import React, { useEffect, useState } from "react";
import WeatherApp from "./components/WeatherApp";
import Preloader from "./components/preloader";

function App() {
	const [loading, setLoading] = useState(true);
	const [hidden, setHidden] = useState({ 1: "", 2: "hidden" });

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
		setTimeout(() => {
			setHidden({ 1: "hidden", 2: "" });
		}, 6000);
	}, []);
	return (
		<>
			<Preloader
				props={loading ? "opacity-100" : `opacity-0 ${hidden[1]}`}
			/>{" "}
			<WeatherApp
				props={
					loading
						? `opacity-0 ${hidden[2]}`
						: `opacity-100 ${hidden[2]}`
				}
			/>
		</>
	);
}

export default App;
