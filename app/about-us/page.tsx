import AboutSection from "@/components/about-us-component";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us | BenjaFamily Labs",
	description:
		"Learn about our expert team and cutting-edge finance research methodologies.",
};

export default function AboutPage() {
	return (
		<>
			<AboutSection />
		</>
	);
}
