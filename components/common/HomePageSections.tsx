"use client";
import React from "react";
import { Medal, ArrowRight, BookOpen, Users, ChartBar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedTestimonialsDemo } from "../animated-testimonial";

const HomeSections = () => {
	// Sample publications data
	const publications = [
		{
			title: "Machine Learning Applications in Market Prediction",
			authors: "Dr. Sarah Chen, Dr. Michael Roberts",
			date: "2024",
			citations: 156,
			journal: "Journal of Financial Technology",
		},
		{
			title: "Network Effects in Systematic Risk Propagation",
			authors: "Dr. James Wilson, Dr. Emily Zhang",
			date: "2024",
			citations: 89,
			journal: "Quantitative Finance Review",
		},
		{
			title: "Deep Learning for Asset Price Dynamics",
			authors: "Dr. Robert Brown, Dr. Lisa Anderson",
			date: "2023",
			citations: 234,
			journal: "Financial Data Science Journal",
		},
	];

	// Sample stats data
	const stats = [
		{ label: "Research Projects", value: "50+" },
		{ label: "Publications", value: "100+" },
		{ label: "Team Members", value: "25+" },
		{ label: "Citations", value: "1000+" },
	];

	return (
		<>
			{/* Stats Section with Animated Counter */}
			<div className="bg-white dark:bg-gray-900 py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<div
								key={index}
								className="group hover:bg-gray-50 dark:hover:bg-gray-800 p-6 rounded-2xl transition-all">
								<div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
									{stat.value}
								</div>
								<div className="text-gray-600 dark:text-gray-300">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Latest Publications Section */}
			<div className="bg-gray-50 dark:bg-gray-800 py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
							Latest Publications
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							Our recent contributions to the field of financial research
						</p>
					</div>

					<div className="grid gap-8">
						{publications.map((pub, index) => (
							<Card
								key={index}
								className="group hover:shadow-lg transition-all duration-300">
								<CardContent className="p-6">
									<div className="flex justify-between items-start">
										<div className="space-y-3">
											<h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
												{pub.title}
											</h3>
											<p className="text-gray-600 dark:text-gray-300">
												{pub.authors}
											</p>
											<div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
												<span>{pub.journal}</span>
												<span>•</span>
												<span>{pub.date}</span>
												<span>•</span>
												<span>{pub.citations} citations</span>
											</div>
										</div>
										<Button variant="ghost" size="icon">
											<ArrowRight className="h-4 w-4" />
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="text-center mt-12">
						<Button variant="outline" size="lg">
							View All Publications
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
			<AnimatedTestimonialsDemo />
		</>
	);
};

export default HomeSections;
