import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ChartBarIcon, LightbulbIcon, ShieldCheckIcon } from "lucide-react";

const features = [
	{
		name: "Data-Driven Insights",
		description:
			"Our research is backed by comprehensive data analysis and advanced statistical models.",
		icon: ChartBarIcon,
	},
	{
		name: "Expert Analysis",
		description:
			"Our team of seasoned financial experts provides in-depth analysis and actionable recommendations.",
		icon: LightbulbIcon,
	},
	{
		name: "Trusted by Industry Leaders",
		description:
			"Our research is relied upon by top financial institutions and Fortune 500 companies.",
		icon: ShieldCheckIcon,
	},
];

export default function KeyFeatures() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
					Why Choose Our Research
				</h2>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature) => (
						<Card
							key={feature.name}
							className="border-2 border-gray-200 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg">
							<CardHeader>
								<feature.icon className="h-8 w-8 text-indigo-500 mb-4" />
								<CardTitle>{feature.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>{feature.description}</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
