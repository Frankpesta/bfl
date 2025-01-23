import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "How quickly can I expect a response to my inquiry?",
		answer:
			"We strive to respond to all inquiries within 24 business hours. For urgent matters, please call our support line directly.",
	},
	{
		question: "Do you offer custom research services?",
		answer:
			"Yes, we provide tailored research services for our enterprise clients. Please fill out the contact form with your specific requirements, and our team will get back to you with more information.",
	},
	{
		question: "Can I schedule a consultation with one of your analysts?",
		answer:
			"Consultations are available for our Pro and Enterprise plan subscribers. Please mention your preferred date and time in your message, and we'll do our best to accommodate your request.",
	},
	{
		question: "How can I report an issue with my account or subscription?",
		answer:
			"For account-related issues, please email support@financeresearch.com with your account details and a description of the problem. Our technical team will assist you promptly.",
	},
	{
		question: "Do you offer educational resources or workshops?",
		answer:
			"Yes, we regularly host webinars and workshops on various financial topics. Subscribe to our newsletter or check the Events section of our website for upcoming sessions.",
	},
];

export default function Faq() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
					Frequently Asked Questions
				</h2>
				<Accordion type="single" collapsible className="w-full">
					{faqs.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
