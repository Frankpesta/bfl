import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartBarIcon,
	DollarSignIcon,
	Building2Icon,
	GlobeIcon,
	ScaleIcon,
	PresentationIcon,
} from "lucide-react";

const services = [
	{
		name: "Market Analysis",
		description:
			"In-depth analysis of market trends, sectors, and economic indicators.",
		icon: ChartBarIcon,
	},
	{
		name: "Investment Research",
		description:
			"Comprehensive research on stocks, bonds, and alternative investments.",
		icon: DollarSignIcon,
	},
	{
		name: "Financial Modeling",
		description:
			"Custom financial models for valuation, forecasting, and risk assessment.",
		icon: PresentationIcon,
	},
	{
		name: "Regulatory Analysis",
		description:
			"Stay compliant with our analysis of financial regulations and their impact.",
		icon: ScaleIcon,
	},
	{
		name: "Corporate Finance Advisory",
		description:
			"Strategic advice on mergers, acquisitions, and capital structure.",
		icon: Building2Icon,
	},
	{
		name: "Global Economic Research",
		description:
			"Insights on global economic trends and their impact on financial markets.",
		icon: GlobeIcon,
	},
];

export default function ServicesList() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
					Our Services
				</h2>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<Card
							key={service.name}
							className="border-2 border-gray-200 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg">
							<CardHeader>
								<service.icon className="h-8 w-8 text-indigo-500 mb-4" />
								<CardTitle>{service.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>{service.description}</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
