"use client";
import React from "react";
import { X, Linkedin, Mail, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
							<Image src={"/logo.png"} alt="logo" width={120} height={100} />
						</div>
						<p className="text-gray-400">
							Conducting basic and applied research on Africa financial
							ecosystem,thereby building financial technology solutions to
							resolve identified problems.
						</p>
						<div className="flex space-x-4">
							<a
								href="https://x.com/Benjami55934529?t=ov4EhOYJc4gehBxLXhjOag&s=09"
								className="hover:text-orange-500 transition">
								<X className="h-5 w-5" />
							</a>
							<a
								href="http://www.linkedin.com/in/benjaminonwuso-76b655349"
								className="hover:text-orange-500 transition">
								<Linkedin className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-white font-semibold mb-6">Services</h3>
						<ul className="space-y-4">
							{[
								"Financial Consulting Services (B2B)",
								"Blockchain Application Development",
								"Prime Brokerage Services",
								"Financial Software Development",
								"Fintech Sartups R&D Services",
							].map((item) => (
								<li key={item}>
									<Link
										href="/services"
										className="hover:text-orange-500 transition flex items-center group">
										<span>{item}</span>
										<ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 ml-1 transition-opacity" />
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className="text-white font-semibold mb-6">Company</h3>
						<ul className="space-y-4">
							{["Home", "About Us", "Services", "Contact Us"].map((item) => (
								<li key={item}>
									<Link
										href="/"
										className="hover:text-orange-500 transition flex items-center group">
										<span>{item}</span>
										<ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 ml-1 transition-opacity" />
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Newsletter Signup */}
					<div>
						<h3 className="text-white font-semibold mb-6">Stay Updated</h3>
						<p className="text-gray-400 mb-4">
							Read the latest news and updates from BenjaFamily Labs. We keep
							you updated with the latest trends in financial research.
						</p>
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
								href="https://blog.benjafamilylabs.com/privacy-policy"
								className="text-gray-400 hover:text-orange-500 transition">
								Privacy Policy
							</a>
							<a
								href="https://blog.benjafamilylabs.com/terms-and-conditions"
								className="text-gray-400 hover:text-orange-500 transition">
								Terms of Service
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
