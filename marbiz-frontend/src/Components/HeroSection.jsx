import React from "react";
import bgImage from "../Images/influ-1.webp";

const HeroSection = () => {


	return (
		<>
			<div
				className="m-3 flex flex-col justify-center items-center rounded-3 bg-blend-multiply"
				style={{
					backgroundImage: `url(${bgImage})`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundColor: "rgba(0, 0, 0, 0.5)",
					minHeight: "700px",
					border: '2px solid rgb(168 85 247)'
				}}
			>
				<div className="flex flex-col justify-center items-center text-center px-4 py-8">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
						Influencer Marketing Made Easy
					</h2>
					<p className="mt-4 text-lg lg:text-xl font-normal text-gray-500 dark:text-gray-400">
						Find and hire top Instagram, TikTok, YouTube, and UGC influencer to create unique content for your brand.
					</p>

					<div className="mt-6 w-full max-w-xs md:max-w-screen-md lg:max-w-screen-lg">
						<form className="relative">
						<label
								htmlFor="search"
								className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
							>
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg className="w-4 h-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
								</svg>
							</div>
							
								Search
							</label>
							<div className="relative flex items-stretch">
								<input
									type="search"
									id="search"
									className="block w-full py-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Search"
									required
								/>
								<button
									type="submit"
									className="text-white absolute right-2.5 bottom-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
								>
									Search
								</button>
							</div>
						</form>
					</div>

					{/* Categories */}
					<div className="mt-6 flex flex-wrap justify-center items-center">
						<button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2">Category 1</button>
						<button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2">Category 2</button>
						<button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2">Category 3</button>
					</div>
				</div>
			</div>


			<div className="my-3 d-grid justify-content-center align-items-center py-3 text-white gradient_background" style={{}}>
				<div
					className="fw-bold"
					style={{
						fontSize: "30px",
					}}
				>
					Connecting Brands and Influencer Effortlessly.
				</div>
			</div>

		</>
	);
};

export default HeroSection;
