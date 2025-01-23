"use client";
import React from "react";
import { X, Linkedin, Mail, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-gray-900 text-gray-300">
			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* Brand Section */}
					<div className="space-y-6">
						<div className="flex items-center">
							<Image
								src={"/assets/images/logo.png"}
								alt="logo"
								width={128}
								height={28}
							/>
							<span className="text-xl font-bold text-white">
								BenjaFamilyLabs
							</span>
						</div>
						<p className="text-gray-400">
							Advancing financial research through innovative data science and
							machine learning approaches.
						</p>
						<div className="flex space-x-4">
							<a href="#" className="hover:text-blue-400 transition">
								<X className="h-5 w-5" />
							</a>
							<a href="#" className="hover:text-blue-400 transition">
								<Linkedin className="h-5 w-5" />
							</a>
							<a href="#" className="hover:text-blue-400 transition">
								<Github className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-white font-semibold mb-6">Research Areas</h3>
						<ul className="space-y-4">
							{[
								"Machine Learning",
								"Market Analysis",
								"Risk Management",
								"Economic Policy",
								"Publications",
							].map((item) => (
								<li key={item}>
									<a
										href="#"
										className="hover:text-blue-400 transition flex items-center group">
										<span>{item}</span>
										<ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 ml-1 transition-opacity" />
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className="text-white font-semibold mb-6">Resources</h3>
						<ul className="space-y-4">
							{[
								"Documentation",
								"Research Papers",
								"Case Studies",
								"Data Sets",
								"API Access",
							].map((item) => (
								<li key={item}>
									<a
										href="#"
										className="hover:text-blue-400 transition flex items-center group">
										<span>{item}</span>
										<ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 ml-1 transition-opacity" />
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Newsletter Signup */}
					<div>
						<h3 className="text-white font-semibold mb-6">Stay Updated</h3>
						<p className="text-gray-400 mb-4">
							Subscribe to our newsletter for the latest research insights.
						</p>
						<form className="space-y-3">
							<div className="flex items-center bg-gray-800 rounded-lg p-1">
								<Mail className="h-5 w-5 text-gray-400 ml-3" />
								<input
									type="email"
									placeholder="Enter your email"
									className="bg-transparent border-0 text-white placeholder-gray-400 px-4 py-2 flex-1 focus:outline-none focus:ring-0"
								/>
							</div>
							<button
								type="submit"
								className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition">
								Subscribe
							</button>
						</form>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-16 pt-8 border-t border-gray-800">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="text-sm text-gray-400">
							© {year} BenjaFamily Labs. All rights reserved.
						</div>
						<div className="flex space-x-6 text-sm">
							<a
								href="#"
								className="text-gray-400 hover:text-blue-400 transition">
								Privacy Policy
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-blue-400 transition">
								Terms of Service
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-blue-400 transition">
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
