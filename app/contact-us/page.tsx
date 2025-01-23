import type { Metadata } from "next";
import ContactHero from "./components/contact-hero";
import ContactForm from "./components/contact-form";
import ContactInfo from "./components/contact-info";
import Faq from "./components/faq";

export const metadata: Metadata = {
	title: "Contact Us | BenjaFamily Labs",
	description:
		"Get in touch with our finance research team for inquiries, support, or custom research requests.",
};

export default function ContactPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			<ContactHero />
			<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
					<ContactForm />
					<ContactInfo />
				</div>
			</div>
			<Faq />
		</div>
	);
}
