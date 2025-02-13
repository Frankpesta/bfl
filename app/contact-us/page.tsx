import type { Metadata } from "next";
import ContactPage from "@/components/contact-page";

export const metadata: Metadata = {
	title: "Contact Us | BenjaFamily Labs",
	description:
		"Get in touch with our finance research team for inquiries, support, or custom research requests.",
};

export default function Contact() {
	return <ContactPage />;
}
