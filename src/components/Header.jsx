import React from "react";

const Header = () => {
	return (
		<header className=" headerComponent flex align-middle justify-center mt-12 mb-4">
			<Logo />
			<h2 className="text-4xl font-semibold text-left p-0 md:p-8 md:pl-0">
				ant<br></br>Weather
			</h2>
		</header>
	);
};

export default Header;

function Logo() {
	return (
		<svg
			className="icon icon-logo w-20 "
			viewBox="0 0 749.703 710.721"
		>
			<g id="antDev" transform="translate(-282.109 -188.444)">
				<circle
					id="Ellipse_94"
					data-name="Ellipse 94"
					cx="15.786"
					cy="15.786"
					r="15.786"
					transform="translate(478.597 255.987)"
					fill="currentColor"
					stroke="currentColor"
					strokeWidth="21"
				></circle>
				<circle
					id="Ellipse_95"
					data-name="Ellipse 95"
					cx="15.786"
					cy="15.786"
					r="15.786"
					transform="translate(809.359 257.49)"
					fill="currentColor"
					stroke="currentColor"
					strokeWidth="21"
				></circle>
				<circle
					id="Ellipse_96"
					data-name="Ellipse 96"
					cx="15.786"
					cy="15.786"
					r="15.786"
					transform="translate(861.981 670.943)"
					fill="currentColor"
					stroke="currentColor"
					strokeWidth="21"
				></circle>
				<circle
					id="Ellipse_97"
					data-name="Ellipse 97"
					cx="15.786"
					cy="15.786"
					r="15.786"
					transform="translate(425.976 670.943)"
					fill="currentColor"
					stroke="currentColor"
					strokeWidth="21"
				></circle>
				<path
					id="Path_4"
					data-name="Path 4"
					d="M84.532,177.57c51.607,2.7,94.4-44.886,92.992-91.168S135.679.507,88.762.1C45.671-2.256,0,37.38,0,86.4s39.945,120.312,152.367,88.732,242.681,28.809,296.088,130.259"
					transform="matrix(0.891, 0.454, -0.454, 0.891, 616.702, 205.26)"
					fill="none"
					stroke="currentColor"
					strokeWidth="25"
				></path>
				<path
					id="Path_5"
					data-name="Path 5"
					d="M84.532,127.823c51.607-2.7,94.4,44.886,92.992,91.168s-41.845,85.9-88.762,86.3C45.671,307.65,0,268.013,0,218.991S39.945,98.68,152.367,130.259,395.049,101.45,448.455,0"
					transform="matrix(-0.891, 0.454, -0.454, -0.891, 835.863, 477.368)"
					fill="none"
					stroke="currentColor"
					strokeWidth="25"
				></path>
				<path
					id="Path_6"
					data-name="Path 6"
					d="M2673.512,2115s-28.222,159.458,157.851,219.574,143.7,279.811,114.667,312.03c-29.027,59.7-126.118,154.583-219.154,0-77.292-148.858,8.588-280.541,104.487-312.03s173.191-82.829,173.191-219.574"
					transform="translate(-2178.377 -1843.979)"
					fill="none"
					stroke="currentColor"
					strokeWidth="25"
				></path>
			</g>
		</svg>
	);
}
