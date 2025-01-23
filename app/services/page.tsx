import Faq from "@/components/faq";
import PricingPlans from "@/components/pricing-plans";
import ServicesHero from "@/components/services-hero";
import ServicesList from "@/components/services-list";
import Testimonials from "@/components/testimonials";
import { Metadata } from "next";
import { BentoGridDemo } from "./components/service-section";

export const metadata: Metadata = {
	title: "Our Services | BenjaFamily Labs",
	description:
		"Explore our comprehensive range of finance research services tailored for investors, corporations, and financial institutions.",
};

export default function ServicesPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
			<ServicesHero />
			<BentoGridDemo />
			<ServicesList />
			<PricingPlans />
			<Testimonials />
			<Faq />
		</div>
	);
}
