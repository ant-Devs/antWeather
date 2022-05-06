import Illustration from "./Illustration";
import Metrics from "./Metrics";
import TimePlace from "./TimePlace";

function Status() {
	return (
		<>
			<div className="md:flex flex-col hidden md:flex-row justify-center gap-16 mt-20 ">
				<Metrics className={"order-3"} />
				<Illustration className="order-1" />
				<TimePlace className="order-2" />
			</div>
			<div className="md:hidden mt-12 mb-8 ">
				<Illustration />
				<div className="flex justify-between mt-8 gap-12">
					<Metrics />
					<TimePlace />
				</div>
			</div>
		</>
	);
}

export default Status;
