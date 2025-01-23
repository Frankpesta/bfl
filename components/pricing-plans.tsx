import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

const plans = [
	{
		name: "Basic",
		price: "$99",
		description: "Essential research for individual investors",
		features: [
			"Daily market summaries",
			"Weekly stock picks",
			"Monthly economic outlook",
			"Access to basic research reports",
		],
	},
	{
		name: "Pro",
		price: "$299",
		description: "Comprehensive research for serious investors",
		features: [
			"All Basic features",
			"Real-time market alerts",
			"Sector-specific deep dives",
			"Quarterly earnings call analysis",
			"Access to advanced financial models",
		],
	},
	{
		name: "Enterprise",
		price: "Custom",
		description: "Tailored solutions for institutions",
		features: [
			"All Pro features",
			"Dedicated research analyst",
			"Custom research projects",
			"API access to our data",
			"Bespoke financial modeling",
			"On-site presentations",
		],
	},
];

export default function PricingPlans() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
					Pricing Plans
				</h2>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					{plans.map((plan) => (
						<Card key={plan.name} className="flex flex-col justify-between">
							<CardHeader>
								<CardTitle className="text-2xl font-bold">
									{plan.name}
								</CardTitle>
								<CardDescription className="text-4xl font-extrabold mt-2">
									{plan.price}
								</CardDescription>
								<p className="mt-4 text-sm text-gray-500">{plan.description}</p>
							</CardHeader>
							<CardContent>
								<ul className="mt-6 space-y-4">
									{plan.features.map((feature) => (
										<li key={feature} className="flex">
											<CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" />
											<span className="ml-3 text-sm text-gray-700">
												{feature}
											</span>
										</li>
									))}
								</ul>
							</CardContent>
							<CardFooter>
								<Button className="w-full mt-8">
									{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
