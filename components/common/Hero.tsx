import React from "react";
import { FlipWords } from "../ui/flip-words";
import { ArrowRight, ChartLine, Database, FlaskConical } from "lucide-react";

const Hero = () => {
	const words = [
		"Research",
		"Analysis",
		"Investigation",
		"Exploration",
		"Inquiry",
	];
	return (
		<div className="relative overflow-hidden bg-white dark:bg-gray-800">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950 opacity-50" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row items-center justify-between py-20 gap-12">
					{/* Left Content */}
					<div className="flex-1 space-y-8">
						<div className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5">
							<span className="text-sm font-medium text-orange-600 dark:text-orange-400">
								Research Lab
							</span>
						</div>

						<h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
							Advancing Financial
							<span className="text-blue-600 dark:text-blue-400">
								{" "}
								<FlipWords words={words} />
							</span>
							<br />
							Through Data Science
						</h1>

						<p className="text-xl text-gray-600 dark:text-gray-300">
							Leveraging advanced analytics and machine learning to unlock new
							insights in financial markets and risk management.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
								Explore Research
								<ArrowRight className="ml-2 h-5 w-5" />
							</button>
							<button className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
								Read our Blog
							</button>
						</div>
					</div>

					{/* Right Content - Feature Grid */}
					<div className="flex-1">
						<div className="grid grif-cols-1 md:grid-cols-2 gap-6">
							{[
								{
									icon: ChartLine,
									title: "Market Analysis",
									description:
										"Advanced statistical modeling of market dynamics",
								},
								{
									icon: FlaskConical,
									title: "Research Methods",
									description: "Innovative quantitative research approaches",
								},
								{
									icon: Database,
									title: "Big Data",
									description: "Large-scale financial data processing",
								},
							].map((feature, index) => (
								<div
									key={index}
									className="flex flex-col p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition">
									<feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
									<h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
										{feature.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-300">
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
