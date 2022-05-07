import React, { useRef } from "react";

const Input = ({ onSubmitHandler }) => {
	const inputRef = useRef();

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				if (inputRef.current.value !== "") {
					console.log("submitting..");
					await onSubmitHandler(inputRef.current.value);
				}
			}}
			className="md:flex justify-center md:mt-2 mt-5 w-max mx-auto \
			"
		>
			<input
				className="px-5 py-2 font-semibold bg-transparent border md:border-r-0 focus:outline-none text-lg"
				ref={inputRef}
				placeholder="Location"
			/>
			<input
				className="md:block hidden  cursor-pointer px-5 py-2 bg-transparent border border-green-200  text-emerald-200 \
				hover:bg-emerald-100 hover:border-emerald-100 hover:text-slate-900  font-bold   \
				transition-colors duration-200  "
				type="submit"
				value="Search"
			/>
		</form>
	);
};

export default Input;
