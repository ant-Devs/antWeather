export default function Error({ errorMessage }) {
	return (
		<div className=" mt-20 md:w-5/6 text-left mx-auto text-2xl font-semibold">
			<>
				<p className="mb-3 font-bold text-md text-red-800 px-3 py-1 bg-red-100 w-max">
					Error: <br />
				</p>
				<p>
					{errorMessage || (
						<>
							Sorry I'm feeling under the weather: <br />
							An error occurred while trying to get weather details
						</>
					)}
				</p>
			</>
		</div>
	);
}
