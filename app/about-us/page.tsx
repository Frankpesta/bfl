import { Metadata } from "next";
import AboutHero from "@/components/about-hero";
import CtaSection from "@/components/cta-section";
import KeyFeatures from "@/components/key-features";
import TeamSection from "@/components/team-section";

export const metadata: Metadata = {
	title: "About Us | BenjaFamily Labs",
	description:
		"Learn about our expert team and cutting-edge finance research methodologies.",
};

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900">
			<AboutHero />
			<KeyFeatures />
			<TeamSection />
			<CtaSection />
		</div>
	);
}
