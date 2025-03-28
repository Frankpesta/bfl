import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Award,
	History,
	Target,
	Users,
	Shield,
	Code2,
	Brain,
	Globe,
	ChevronRight,
	Landmark,
	Lock,
	HandshakeIcon,
	Lightbulb,
	Building,
	Blocks,
} from "lucide-react";
import LeadershipSection from "@/components/ceo-profile";

const AboutSection = () => {
	const coreValues = [
		{
			icon: <Code2 className="w-6 h-6" />,
			title: "Technical Excellence",
			description:
				"Maintaining the highest standards in software development and system architecture",
		},
		{
			icon: <Lightbulb className="w-6 h-6" />,
			title: "Innovation Focus",
			description:
				"Continuously exploring and implementing cutting-edge financial technologies",
		},
		{
			icon: <Lock className="w-6 h-6" />,
			title: "Security First",
			description: "Ensuring robust protection of client assets and data",
		},
		{
			icon: <HandshakeIcon className="w-6 h-6" />,
			title: "Client Partnership",
			description:
				"Building long-term relationships through transparent collaboration",
		},
	];

	const teamRoles = [
		{ icon: <Landmark />, title: "Financial Markets Specialists" },
		{ icon: <Blocks />, title: "Blockchain Developers and Architects" },
		{ icon: <Code2 />, title: "Software Engineering Experts" },
		{ icon: <Shield />, title: "Financial Risk Analysts" },
		{ icon: <Brain />, title: "Research & Development Innovators" },
	];

	const achievements = [
		{
			icon: <Building />,
			title: "Enterprise Solutions",
			description:
				"Developed blockchain solutions for leading financial institutions",
		},
		{
			icon: <Target />,
			title: "Trading Systems",
			description:
				"Implemented custom trading systems for institutional clients",
		},
		{
			icon: <Globe />,
			title: "Global Impact",
			description:
				"Pioneered innovative fintech solutions for emerging markets",
		},
		{
			icon: <Brain />,
			title: "Research Leadership",
			description: "Advanced financial technology through continuous research",
		},
	];

	return (
		<div className="container mx-auto px-4 py-12 space-y-16">
			{/* Hero Section */}
			<div className="text-center space-y-4">
				<h1 className="text-4xl font-bold">
					Innovating at the Intersection of Finance and Technology
				</h1>
				<div className="max-w-3xl mx-auto">
					<p className="text-lg text-muted-foreground">
						BenjaFamily Labs (BFL) is a pioneering financial technology firm
						that bridges traditional financial services with cutting-edge
						blockchain solutions.
					</p>
				</div>
			</div>

			{/* Our Story */}
			<Card className="border-orange-500/20">
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<History className="text-orange-500" />
						Our Story
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">
						From our inception, BFL has been driven by a singular vision: to be
						the biggest Pan-African financial technology services firm. Our
						journey began with providing expert financial consulting services
						and has evolved to encompass the full spectrum of financial
						technology solutions, including blockchain applications and advanced
						software development.
					</p>
				</CardContent>
			</Card>

			{/* Core Values */}
			<div className="space-y-6">
				<h2 className="text-3xl font-bold text-center">Core Values</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{coreValues.map((value, index) => (
						<Card
							key={index}
							className="hover:border-orange-500/50 transition-colors">
							<CardContent className="pt-6 space-y-4">
								<div className="rounded-full w-12 h-12 bg-orange-500/10 flex items-center justify-center text-orange-500">
									{value.icon}
								</div>
								<h3 className="font-semibold">{value.title}</h3>
								<p className="text-sm text-muted-foreground">
									{value.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			{/* Our Team */}
			<div className="space-y-6">
				<h2 className="text-3xl font-bold text-center">Our Team</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{teamRoles.map((role, index) => (
						<Card
							key={index}
							className="hover:bg-orange-500/5 transition-colors">
							<CardContent className="flex items-center gap-4 py-6">
								<div className="text-orange-500">{role.icon}</div>
								<span className="font-medium">{role.title}</span>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			{/* Global Impact */}
			<div className="space-y-6">
				<h2 className="text-3xl font-bold text-center">Global Impact</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{achievements.map((achievement, index) => (
						<Card
							key={index}
							className="hover:border-orange-500/50 transition-colors">
							<CardContent className="pt-6 space-y-4">
								<div className="rounded-full w-12 h-12 bg-orange-500/10 flex items-center justify-center text-orange-500">
									{achievement.icon}
								</div>
								<h3 className="font-semibold">{achievement.title}</h3>
								<p className="text-sm text-muted-foreground">
									{achievement.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			{/* Why Choose BFL */}
			<Card className="border-orange-500/20">
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Award className="text-orange-500" />
						Why Choose BFL
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					{[
						"Deep expertise in both traditional finance and blockchain technology",
						"Proven track record of successful enterprise implementations",
						"Commitment to security and regulatory compliance",
						"Innovative approach to solving complex financial challenges",
						"Dedicated research and development team",
					].map((point, index) => (
						<div key={index} className="flex items-center gap-2">
							<ChevronRight className="text-orange-500 w-4 h-4" />
							<span className="text-muted-foreground">{point}</span>
						</div>
					))}
				</CardContent>
			</Card>
			<LeadershipSection />
		</div>
	);
};

export default AboutSection;
