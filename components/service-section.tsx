"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Loader2Icon } from "lucide-react";
import { scheduleMeeting } from "@/app/actions/scheduleMeeting";
import { useState } from "react";
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

const ServicesSection = () => {
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

	const services = [
		{
			image: "/assets/images/b2b.jpg",
			title: "Financial Consulting Services (B2B)",
			tagline: "Empowering Financial Decision-Making Through Expert Guidance",
			description:
				"Our financial consulting services help businesses navigate the complex intersection of traditional finance and emerging technologies. We provide strategic insights and actionable recommendations to optimize your financial operations.",
			offerings: [
				{
					title: "Strategic Financial Planning",
					items: [
						"Comprehensive financial health assessment",
						"Growth strategy development",
						"Risk management frameworks",
						"Investment portfolio optimization",
					],
				},
				{
					title: "Digital Transformation",
					items: [
						"FinTech integration strategies",
						"Legacy system modernization",
						"Digital payment solutions",
						"Process automation roadmaps",
					],
				},
				{
					title: "Regulatory Compliance",
					items: [
						"Compliance framework development",
						"Risk assessment and mitigation",
						"Regulatory reporting solutions",
						"Audit preparation and support",
					],
				},
			],
			className: "md:col-span-2 md:row-span-2",
			imageHeight: "h-64",
		},
		{
			image: "/assets/images/blochchain.jpg",
			title: "Blockchain Applications Development",
			tagline: "Enterprise-Grade Blockchain Solutions for Tomorrow's Finance",
			description:
				"We develop secure, scalable blockchain applications that solve real business challenges, bridging the gap between traditional financial systems and blockchain technology.",
			offerings: [
				{
					title: "Custom Development",
					items: [
						"Private blockchain networks",
						"Smart contract development",
						"DeFi protocol implementation",
						"Cross-chain integration solutions",
					],
				},
				{
					title: "Enterprise Integration",
					items: [
						"Legacy system integration",
						"API development",
						"Middleware solutions",
						"Security & performance optimization",
					],
				},
			],
			className: "md:col-span-1 md:row-span-2",
			imageHeight: "h-64",
		},
		{
			image: "/assets/images/prime.jpg",
			title: "Prime Brokerage Services",
			tagline: "Institutional-Grade Trading Infrastructure",
			description:
				"Comprehensive trading infrastructure and execution services for institutional clients, combining traditional expertise with cutting-edge technology.",
			offerings: [
				{
					title: "Trading Infrastructure",
					items: [
						"Multi-asset trading platforms",
						"Order management systems",
						"Execution algorithms",
						"Market data integration",
					],
				},
				{
					title: "Asset Services",
					items: [
						"Digital asset custody",
						"Portfolio management",
						"Margin lending",
						"Settlement services",
					],
				},
			],
			className: "md:col-span-2 md:row-span-1",
			imageHeight: "h-48",
		},
		{
			image: "/assets/images/rnd.jpg",
			title: "Financial Software Development",
			tagline: "Custom Financial Technology Solutions for Modern Business",
			description:
				"Robust, scalable financial software solutions that power modern business operations, from traditional systems to cutting-edge fintech applications.",
			offerings: [
				{
					title: "Key Solutions",
					items: [
						"Trading & order management systems",
						"Payment processing platforms",
						"Risk management tools",
						"Analytics dashboards",
					],
				},
			],
			className: "md:col-span-1 md:row-span-1",
			imageHeight: "h-48",
		},
		{
			image: "/assets/images/lab.jpg",
			title: "Fintech Startups R&D Services",
			tagline: "Innovating the Future of Financial Technology",
			description:
				"Transform innovative ideas into market-ready solutions with our comprehensive R&D services for fintech startups.",
			offerings: [
				{
					title: "R&D Focus Areas",
					items: [
						"Market research and analysis",
						"Proof of concept development",
						"MVP building and testing",
						"Technical architecture design",
					],
				},
			],
			className: "md:col-span-2 md:row-span-1",
			imageHeight: "h-48",
		},
	];

	return (
		<div className="container mx-auto px-4 py-16">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold mb-4">Our Services</h2>
				<p className="text-muted-foreground max-w-2xl mx-auto">
					Comprehensive financial technology solutions that bridge traditional
					finance with blockchain innovation, delivered with expertise and
					precision.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{services.map((service, index) => (
					<Card
						key={index}
						className={`group hover:shadow-lg transition-all overflow-hidden ${service.className}`}>
						<CardContent className="p-0 h-full">
							<div className="relative">
								<img
									src={service.image}
									alt={service.title}
									className={`w-full ${service.imageHeight} object-cover transition-transform duration-300 group-hover:scale-105`}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
								<div className="absolute bottom-0 left-0 p-6 text-white">
									<h3 className="text-xl font-bold mb-2">{service.title}</h3>
									<p className="text-sm text-orange-400 font-medium mb-2">
										{service.tagline}
									</p>
									<p className="text-sm text-white/80">{service.description}</p>
								</div>
							</div>

							<div className="p-6 space-y-6">
								{service.offerings.map((offering, idx) => (
									<div key={idx} className="space-y-3">
										<h4 className="font-semibold text-base">
											{offering.title}
										</h4>
										<ul className="space-y-2">
											{offering.items.map((item, itemIdx) => (
												<li
													key={itemIdx}
													className="flex items-start gap-2 text-sm text-muted-foreground">
													<Check className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>
								))}

								<Dialog>
									<DialogTrigger asChild>
										<Button
											variant="ghost"
											className="w-full justify-between hover:text-orange-500">
											Request Service
											<ArrowRight className="w-4 h-4" />
										</Button>
									</DialogTrigger>

									<DialogContent className="sm:max-w-[425px]">
										<form action={handleSubmit}>
											<DialogHeader>
												<DialogTitle>Schedule a Meeting</DialogTitle>
												<DialogDescription className="py-2">
													Schedule a call with us, and we’ll connect to discuss
													our services in detail. We will arrange a Google Meet
													session and send a calendar invitation. Please make
													sure to provide a valid and active email address.
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
													{isSubmitting ? <Loader2Icon /> : "Schedule Meeting"}
												</Button>
											</DialogFooter>
										</form>
									</DialogContent>
								</Dialog>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};

export default ServicesSection;
