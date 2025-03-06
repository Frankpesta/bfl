"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	Briefcase,
	Database,
	BarChart4,
	Code,
	Lightbulb,
	ArrowRight,
} from "lucide-react";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
	{
		id: 1,
		title: "Enterprise Financial Consulting",
		description:
			"Strategic financial guidance tailored for enterprise clients, focusing on growth, optimization, and risk management.",
		icon: Briefcase,
		color: "blue",
	},
	{
		id: 2,
		title: "Custom Blockchain Application",
		description:
			"Bespoke blockchain solutions designed to enhance security, transparency, and efficiency in financial operations.",
		icon: Database,
		color: "orange",
	},
	{
		id: 3,
		title: "Prime Brokerage Services",
		description:
			"Comprehensive brokerage solutions for institutional clients, including clearing, custody, and financing services.",
		icon: BarChart4,
		color: "blue",
	},
	{
		id: 4,
		title: "Financial Software Development",
		description:
			"Custom financial software solutions built with cutting-edge technology to streamline operations and enhance decision-making.",
		icon: Code,
		color: "orange",
	},
	{
		id: 5,
		title: "Financial R&D Solutions",
		description:
			"Innovative research and development services focused on creating next-generation financial technologies and methodologies.",
		icon: Lightbulb,
		color: "blue",
	},
];

export default function ServicesSection() {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);

	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
			<div className="container px-4 mx-auto">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
						Comprehensive Financial Services
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mt-4 text-lg text-gray-600 dark:text-gray-300">
						Innovative solutions designed to transform your financial operations
						and drive sustainable growth
					</motion.p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							onMouseEnter={() => setHoveredCard(service.id)}
							onMouseLeave={() => setHoveredCard(null)}>
							<Card
								className={`h-full transition-all duration-300 ${
									hoveredCard === service.id
										? "shadow-lg transform -translate-y-1 border-" +
										  service.color +
										  "-500"
										: "shadow border-transparent"
								}`}>
								<CardHeader>
									<div
										className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
											service.color === "blue"
												? "bg-blue-100 dark:bg-blue-900/30"
												: "bg-orange-100 dark:bg-orange-900/30"
										}`}>
										<service.icon
											className={`h-6 w-6 ${
												service.color === "blue"
													? "text-blue-500 dark:text-blue-400"
													: "text-orange-500 dark:text-orange-400"
											}`}
										/>
									</div>
									<CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
										{service.title}
									</CardTitle>
									<CardDescription className="text-gray-600 dark:text-gray-300 mt-2">
										{service.description}
									</CardDescription>
								</CardHeader>
								<CardFooter>
									<Button
										variant="ghost"
										className={`p-0 ${
											service.color === "blue"
												? "text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
												: "text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500"
										}`}>
										<Link href="/services">Learn more</Link>
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
