import { Metadata } from "next";
import ServicesSection from "@/components/service-section";

export const metadata: Metadata = {
	title: "Our Services | BenjaFamily Labs",
	description:
		"Explore our comprehensive range of finance research services tailored for investors, corporations, and financial institutions.",
};

export default function ServicesPage() {
	return (
		<>
			<ServicesSection />
		</>
	);
}
