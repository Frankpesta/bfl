"use client";
import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { Book, Brain, TrendingUp, Network, Code2 } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const ResearchSection = () => {
	const chartData = [
		{ name: "Jan", value: 40 },
		{ name: "Feb", value: 45 },
		{ name: "Mar", value: 55 },
		{ name: "Apr", value: 58 },
		{ name: "May", value: 52 },
		{ name: "Jun", value: 65 },
	];

	const researchAreas = [
		{
			icon: <Brain className="w-12 h-12 text-violet-500" />,
			title: "AI in Financial Services",
			description:
				"Developing advanced AI solutions for risk assessment, fraud detection, and automated trading systems",
			metric: "12+ AI Models Deployed",
		},
		{
			icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
			title: "Blockchain Innovation",
			description:
				"Researching DeFi protocols and developing enterprise blockchain applications for financial institutions",
			metric: "25+ Smart Contracts Audited",
		},
		{
			icon: <Network className="w-12 h-12 text-green-500" />,
			title: "Financial Systems Integration",
			description:
				"Building bridges between traditional finance and blockchain technology through innovative middleware",
			metric: "100+ APIs Developed",
		},
		{
			icon: <Code2 className="w-12 h-12 text-orange-500" />,
			title: "Fintech Solutions",
			description:
				"Creating next-generation financial software focusing on security, scalability, and performance",
			metric: "50+ Enterprise Solutions",
		},
	];
	return (
		<div className="bg-gray-50 dark:bg-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
						Research Areas & Impact
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						Our interdisciplinary approach combines financial expertise with
						cutting-edge technology to address complex market challenges and
						drive innovation in the financial sector.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
					{researchAreas.map((area, index) => (
						<div
							key={index}
							className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
							<div
								className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
								{area.icon}
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
								{area.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-400 mb-4">
								{area.description}
							</p>
						</div>
					))}
				</div>

				<div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								Latest Research Insights
							</h3>
							<p className="text-gray-600 dark:text-gray-300 mb-6">
								Our recent findings show significant improvements in market
								prediction accuracy using our novel deep learning approaches.
							</p>
							<ul className="space-y-4">
								<li className="flex items-start">
									<div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
										<div className="h-3 w-3 rounded-full bg-green-500"></div>
									</div>
									<p className="ml-3 text-gray-600 dark:text-gray-300">
										25% improvement in prediction accuracy
									</p>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
										<div className="h-3 w-3 rounded-full bg-blue-500"></div>
									</div>
									<p className="ml-3 text-gray-600 dark:text-gray-300">
										40% reduction in computational costs
									</p>
								</li>
							</ul>
						</div>
						<div className="h-80">
							<ResponsiveContainer width="100%" height="100%">
								<LineChart data={chartData}>
									<XAxis dataKey="name" stroke="#888888" />
									<YAxis stroke="#888888" />
									<Tooltip />
									<Line
										type="monotone"
										dataKey="value"
										stroke="#3B82F6"
										strokeWidth={2}
										dot={{ fill: "#3B82F6" }}
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResearchSection;
