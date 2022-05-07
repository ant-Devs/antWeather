import { RingLoader } from "react-spinners";

export default function Loading() {
	return (
		<div className="text-center flex flex-col items-center   mt-20 ">
			<RingLoader color="currentColor" size={180} />
			<p className="text-3xl font-bold">Loading weather</p>
		</div>
	);
}
