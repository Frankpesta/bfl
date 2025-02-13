"use client";
import React, { useState } from "react";
import { FlipWords } from "../ui/flip-words";
import {
	TrendingUp,
	Blocks,
	Landmark,
	Code2,
	Lightbulb,
	ArrowRight,
	LoaderIcon,
} from "lucide-react";
import { Owners } from "./animated-tooltip";
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
import { Button } from "@/components/ui/button";
import { scheduleMeeting } from "@/app/actions/scheduleMeeting";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { toast } = useToast();

	const handleBlog = () => {
		window.location.href = "https://blog.benjafamilylabs.com";
	};

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

	const words = ["Solutions", "Answers", "Innovations", "Strategies"];
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
							Pioneering Financial Technology
							<span className="text-blue-600 dark:text-blue-400">
								{" "}
								<FlipWords words={words} />
							</span>
							<br />
							for Tomorrow's Business
						</h1>

						<p className="text-lg text-justify text-gray-600 dark:text-gray-300">
							At BenjaFamily Labs (BFL), we bridge traditional finance with
							blockchain innovation, delivering enterprise-grade solutions that
							transform business operations. Our comprehensive suite of services
							combines financial expertise with cutting-edge technology to drive
							your business forward.
						</p>
						<div className="">
							<Owners />
						</div>
						<div className="flex flex-col sm:flex-row gap-4">
							<Dialog>
								<DialogTrigger asChild>
									<Button
										size={"lg"}
										className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
										Schedule a Meeting
										<ArrowRight className="ml-2 h-5 w-5" />
									</Button>
								</DialogTrigger>

								<DialogContent className="sm:max-w-[425px]">
									<form action={handleSubmit}>
										<DialogHeader>
											<DialogTitle>Schedule a Meeting</DialogTitle>
											<DialogDescription className="py-2">
												Schedule a call with us, and we’ll connect to discuss
												our services in detail. We will arrange a Google Meet
												session and send a calendar invitation. Please make sure
												to provide a valid and active email address.
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
												{isSubmitting ? <LoaderIcon /> : "Schedule Meeting"}
											</Button>
										</DialogFooter>
									</form>
								</DialogContent>
							</Dialog>
							<Button size={"lg"} variant="outline" onClick={handleBlog}>
								Read our Blog
							</Button>
						</div>
					</div>

					{/* Right Content - Feature Grid */}
					<div className="flex-1">
						<div className="grid grif-cols-1 md:grid-cols-2 gap-6">
							{[
								{
									icon: TrendingUp,
									title: "Enterprise Financial Consulting",
									description:
										"Strategic financial guidance driving enterprise growth and optimization",
								},
								{
									icon: Blocks,
									title: "Custom Blockchain Application",
									description:
										"Secure, scalable blockchain solutions tailored to your business requirements",
								},
								{
									icon: Landmark,
									title: "Prime Brokerage Services",
									description:
										"Comprehensive trading infrastructure and execution services for institutional clients",
								},
								{
									icon: Code2,
									title: "Financial Software Development",
									description:
										"Custom financial software solutions engineered for performance and reliability",
								},
								{
									icon: Lightbulb,
									title: "Fintech R&D Solutions",
									description:
										"Innovative research and development to keep you ahead in the fintech revolution",
								},
							].map((feature, index) => (
								<div
									key={index}
									className="flex flex-col p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition">
									<feature.icon className="h-8 w-8 text-orange-500 dark:text-orange-500 mb-4" />
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
