import { useContext } from "react";
import { StatusContext } from "../../App";

function TimePlace(className) {
	let date = new Date();

	const status = useContext(StatusContext);
	console.log(status);

	return (
		<section
			className={`location flex flex-col justify-center gap-6 ${className}`}
		>
			<div>
				<p className="city text-2xl font-semibold  text-left">
					{status ? status.LocalizedName : "Location"}
				</p>
				<p className="region text-lg">
					{status.AdministrativeArea
						? status.AdministrativeArea.LocalizedName
						: ""}
				</p>
			</div>
			<p className="date text-left ">
				{status.TimeZone ? (
					<>
						{days[date.getDay()]}, <br />{" "}
						{date.toDateString().substring(4)}
					</>
				) : null}
			</p>
		</section>
	);
}

export default TimePlace;

const days = {
	0: "Sunday",
	1: "Monday",
	2: "Tuesday",
	3: "Wednesday",
	4: "Thursday",
	5: "Friday",
	6: "Saturday",
};
