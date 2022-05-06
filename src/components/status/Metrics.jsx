import { useContext } from "react";
import { StatusContext } from "../../App";

function Metrics(className) {
	const status = useContext(StatusContext);

	const { Temperature, RelativeHumidity, Wind } = status;

	return (
		<section
			className={`text-left flex flex-col justify-center gap-2 w-max ${className}`}
		>
			<p className="text-5xl md:text-6xl">
				{Temperature ? (
					<>
						{Temperature.Metric.Value}
						<sup className="text-[0.6em]">
							&deg;{Temperature ? Temperature.Metric.Unit : ""}
						</sup>{" "}
					</>
				) : null}
			</p>

			<div className="text-md md:text-xl flex flex-col gap-1 mt-2 ">
				<p className="flex justify-between gap-3">
					{RelativeHumidity ? (
						<>
							<span>R. Humidity:</span>
							<span>{RelativeHumidity} </span>
						</>
					) : (
						""
					)}
				</p>
				<p className="flex justify-between gap-3">
					{Wind ? (
						<>
							<span>Wind:</span>
							<span>
								{`${Wind.Speed.Metric.Value} ${Wind.Speed.Metric.Unit}`}
							</span>
						</>
					) : (
						""
					)}
				</p>
			</div>
		</section>
	);
}

export default Metrics;
