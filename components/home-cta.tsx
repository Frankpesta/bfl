"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Shield, TrendingUp, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { scheduleMeeting } from "@/app/actions/scheduleMeeting";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const [isSubmitting, setIsSubmitting] = useState(false);
	const { toast } = useToast();

	async function handleSubmit(formData: FormData) {
		setIsSubmitting(true);
		try {
			// Static/auto-generated values
			formData.append("startTime", getNextAvailableTime());
			formData.append("duration", "30"); // 30 minutes meeting
			formData.append("ownerEmail", "support@benjafamilylabs.com"); // Your email
			formData.append("meetingTitle", "Initial Consultation Call");
			formData.append(
				"description",
				"Discussion about our services and how we can help you."
			);

			const result = await scheduleMeeting(formData);

			if (result.success) {
				toast({
					title: "Scheduled Successfully",
					description: `Check your email for the invitation. Meeting link: ${result.meetingLink}`,
				});
			} else {
				toast({
					title: "Failed to schedule meeting",
					description: "Please try again.",
					variant: "destructive",
				});
			}
		} catch (error) {
			toast({
				title: "An error occurred",
				description: "Please try again.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	function getNextAvailableTime() {
		const now = new Date();
		// Round to next hour
		now.setHours(now.getHours() + 1);
		now.setMinutes(0);
		now.setSeconds(0);
		now.setMilliseconds(0);

		// Only schedule during business hours (9 AM - 5 PM)
		if (now.getHours() < 9) {
			now.setHours(9);
		} else if (now.getHours() >= 17) {
			now.setDate(now.getDate() + 1);
			now.setHours(9);
		}

		// If it's weekend, move to Monday
		if (now.getDay() === 0) {
			// Sunday
			now.setDate(now.getDate() + 1);
		} else if (now.getDay() === 6) {
			// Saturday
			now.setDate(now.getDate() + 2);
		}

		return now.toISOString();
	}

	return (
		<div className="relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
			{/* Background elements */}
			<div className="absolute inset-0 z-0">
				<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
				<div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />
			</div>

			<div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:px-8">
				<div className="max-w-3xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}>
						<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
							<span className="block">Financial Innovation</span>
							<span className="block text-orange-500">Meets Technology</span>
						</h1>
					</motion.div>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mt-6 text-xl text-gray-600 dark:text-gray-300">
						Empowering enterprises with cutting-edge financial solutions,
						blockchain technology, and expert consulting services.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
						<Dialog>
							<DialogTrigger asChild>
								<Button
									size="lg"
									className="bg-blue-500 hover:bg-blue-600 text-white">
									Schedule Consultation
									<ChevronRight className="ml-2 h-4 w-4" />
								</Button>
							</DialogTrigger>

							<DialogContent className="sm:max-w-[425px]">
								<form action={handleSubmit}>
									<DialogHeader>
										<DialogTitle>Schedule a Meeting</DialogTitle>
										<DialogDescription className="py-2">
											Schedule a call with us, and we’ll connect to discuss our
											services in detail. We will arrange a Google Meet session
											and send a calendar invitation. Please make sure to
											provide a valid and active email address.
										</DialogDescription>
									</DialogHeader>
									<div className="grid gap-4 py-4">
										<div className="grid grid-cols-4 items-center gap-4">
											<Label htmlFor="email" className="text-right">
												Email
											</Label>
											<Input
												id="email"
												name="clientEmail"
												type="email"
												placeholder="your@email.com"
												className="col-span-3"
												required
											/>
										</div>
									</div>
									<DialogFooter>
										<Button
											type="submit"
											size="sm"
											className="bg-blue-600 text-white hover:bg-blue-700"
											disabled={isSubmitting}>
											{isSubmitting ? "Scheduling..." : "Schedule Meeting"}
										</Button>
									</DialogFooter>
								</form>
							</DialogContent>
						</Dialog>
						<Button
							size="lg"
							variant="outline"
							className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 dark:border-blue-400 dark:text-blue-400">
							<Link href={"/services"}>Explore Services</Link>
						</Button>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.6 }}
					className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
					<div className="flex items-center p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
						<Shield className="h-10 w-10 text-blue-500 mr-4" />
						<div>
							<h3 className="font-semibold text-gray-900 dark:text-white">
								Secure Solutions
							</h3>
							<p className="text-sm text-gray-600 dark:text-gray-300">
								Enterprise-grade security
							</p>
						</div>
					</div>

					<div className="flex items-center p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
						<TrendingUp className="h-10 w-10 text-orange-500 mr-4" />
						<div>
							<h3 className="font-semibold text-gray-900 dark:text-white">
								Growth Focused
							</h3>
							<p className="text-sm text-gray-600 dark:text-gray-300">
								Scalable financial technology
							</p>
						</div>
					</div>

					<div className="flex items-center p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
						<BarChart className="h-10 w-10 text-blue-500 mr-4" />
						<div>
							<h3 className="font-semibold text-gray-900 dark:text-white">
								Data Driven
							</h3>
							<p className="text-sm text-gray-600 dark:text-gray-300">
								Insights that drive decisions
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
