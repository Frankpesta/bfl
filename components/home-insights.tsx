"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Calendar,
	Clock,
	ExternalLink,
	ChevronRight,
} from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const insights = [
	{
		id: 1,
		title: "The Future of DeFi in Enterprise Finance",
		excerpt:
			"Exploring how decentralized finance is transforming traditional financial systems and creating new opportunities for enterprises.",
		category: "Blockchain",
		date: "Mar 4, 2025",
		readTime: "8 min read",
		image: "/placeholder.svg?height=200&width=400",
	},
	{
		id: 2,
		title: "Regulatory Compliance in Financial Technology",
		excerpt:
			"Navigating the complex landscape of financial regulations and ensuring compliance in the age of rapid technological advancement.",
		category: "Compliance",
		date: "Mar 2, 2025",
		readTime: "6 min read",
		image: "/placeholder.svg?height=200&width=400",
	},
	{
		id: 3,
		title: "AI-Driven Risk Assessment in Financial Markets",
		excerpt:
			"How artificial intelligence is revolutionizing risk management and creating more resilient financial systems.",
		category: "Technology",
		date: "Feb 28, 2025",
		readTime: "10 min read",
		image: "/placeholder.svg?height=200&width=400",
	},
];

const partners = {
	banking: [
		{
			id: 1,
			name: "Global Banking Corp",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 2,
			name: "Secure Trust Bank",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 3,
			name: "Future Finance",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 4,
			name: "Capital Partners",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 5,
			name: "Investment Trust",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 6,
			name: "Wealth Management",
			logo: "/placeholder.svg?height=60&width=180",
		},
	],
	technology: [
		{
			id: 1,
			name: "Blockchain Solutions",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 2,
			name: "Cloud Systems",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 3,
			name: "Data Analytics",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 4,
			name: "Security Systems",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 5,
			name: "AI Platforms",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 6,
			name: "FinTech Innovations",
			logo: "/placeholder.svg?height=60&width=180",
		},
	],
	regulatory: [
		{
			id: 1,
			name: "Compliance Partners",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 2,
			name: "Regulatory Board",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 3,
			name: "Global Standards",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 4,
			name: "Financial Authority",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 5,
			name: "Audit Systems",
			logo: "/placeholder.svg?height=60&width=180",
		},
		{
			id: 6,
			name: "Risk Management",
			logo: "/placeholder.svg?height=60&width=180",
		},
	],
};

export default function InsightsPartnersSection() {
	const [activeTab, setActiveTab] = useState("banking");

	const getCategoryColor = (category: string) => {
		switch (category.toLowerCase()) {
			case "blockchain":
				return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
			case "compliance":
				return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
			case "technology":
				return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
			default:
				return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
		}
	};

	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
			<div className="container px-4 mx-auto">
				{/* Insights Section */}
				<div className="mb-20">
					<div className="max-w-3xl mx-auto text-center mb-12">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
							Latest Financial Insights
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="mt-4 text-lg text-gray-600 dark:text-gray-300">
							Expert analysis and thought leadership on the latest trends in
							finance and technology
						</motion.p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{insights.map((insight, index) => (
							<motion.div
								key={insight.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}>
								<Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
									<div className="relative h-48 overflow-hidden">
										<img
											src={insight.image || "/placeholder.svg"}
											alt={insight.title}
											className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
										/>
										<Badge
											className={`absolute top-4 right-4 ${getCategoryColor(
												insight.category
											)}`}>
											{insight.category}
										</Badge>
									</div>
									<CardHeader>
										<CardTitle className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
											{insight.title}
										</CardTitle>
										<div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
											<Calendar className="h-4 w-4 mr-1" />
											<span>{insight.date}</span>
											<span className="mx-2">•</span>
											<Clock className="h-4 w-4 mr-1" />
											<span>{insight.readTime}</span>
										</div>
									</CardHeader>
									<CardContent>
										<CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3">
											{insight.excerpt}
										</CardDescription>
									</CardContent>
									<CardFooter>
										<Button
											variant="ghost"
											className="p-0 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
											Read more <ArrowRight className="ml-2 h-4 w-4" />
										</Button>
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</div>

					<div className="text-center mt-10">
						<Button
							variant="outline"
							className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 dark:border-blue-400 dark:text-blue-400">
							View all insights
							<ChevronRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</div>

				{/* Partners Section */}
				<div>
					<div className="max-w-3xl mx-auto text-center mb-12">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
							Our Trusted Partners
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="mt-4 text-lg text-gray-600 dark:text-gray-300">
							Collaborating with industry leaders to deliver exceptional
							financial solutions
						</motion.p>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}>
						<Tabs
							defaultValue="banking"
							className="w-full"
							onValueChange={setActiveTab}>
							<div className="flex justify-center mb-8">
								<TabsList className="bg-gray-100 dark:bg-gray-800">
									<TabsTrigger
										value="banking"
										className={
											activeTab === "banking"
												? "data-[state=active]:bg-blue-500 data-[state=active]:text-white dark:data-[state=active]:bg-blue-600"
												: ""
										}>
										Banking Partners
									</TabsTrigger>
									<TabsTrigger
										value="technology"
										className={
											activeTab === "technology"
												? "data-[state=active]:bg-orange-500 data-[state=active]:text-white dark:data-[state=active]:bg-orange-600"
												: ""
										}>
										Technology Partners
									</TabsTrigger>
									<TabsTrigger
										value="regulatory"
										className={
											activeTab === "regulatory"
												? "data-[state=active]:bg-blue-500 data-[state=active]:text-white dark:data-[state=active]:bg-blue-600"
												: ""
										}>
										Regulatory Partners
									</TabsTrigger>
								</TabsList>
							</div>

							<TabsContent value="banking" className="mt-0">
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
									{partners.banking.map((partner) => (
										<Card
											key={partner.id}
											className="flex items-center justify-center p-6 h-24 hover:shadow-md transition-all duration-300">
											<img
												src={partner.logo || "/placeholder.svg"}
												alt={partner.name}
												className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
											/>
										</Card>
									))}
								</div>
							</TabsContent>

							<TabsContent value="technology" className="mt-0">
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
									{partners.technology.map((partner) => (
										<Card
											key={partner.id}
											className="flex items-center justify-center p-6 h-24 hover:shadow-md transition-all duration-300">
											<img
												src={partner.logo || "/placeholder.svg"}
												alt={partner.name}
												className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
											/>
										</Card>
									))}
								</div>
							</TabsContent>

							<TabsContent value="regulatory" className="mt-0">
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
									{partners.regulatory.map((partner) => (
										<Card
											key={partner.id}
											className="flex items-center justify-center p-6 h-24 hover:shadow-md transition-all duration-300">
											<img
												src={partner.logo || "/placeholder.svg"}
												alt={partner.name}
												className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
											/>
										</Card>
									))}
								</div>
							</TabsContent>
						</Tabs>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="max-w-3xl mx-auto text-center mt-16">
						<Card className="bg-gradient-to-r from-blue-500 to-orange-500 text-white">
							<CardContent className="pt-6 pb-6">
								<h3 className="text-2xl font-bold mb-4">
									Ready to join our network of partners?
								</h3>
								<p className="mb-6">
									Discover the benefits of partnering with a leader in financial
									innovation and technology.
								</p>
								<Button
									size="lg"
									variant="secondary"
									className="bg-white text-blue-500 hover:bg-gray-100">
									Become a Partner <ExternalLink className="ml-2 h-4 w-4" />
								</Button>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
