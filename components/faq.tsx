import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "How often is your research updated?",
		answer:
			"Our research is updated daily, with real-time alerts for significant market events. Comprehensive reports are typically published weekly or monthly, depending on the service tier.",
	},
	{
		question: "Can I customize the research I receive?",
		answer:
			"Yes, our Pro and Enterprise plans offer customization options. You can select specific sectors, companies, or themes you're interested in, and we'll tailor our research delivery accordingly.",
	},
	{
		question: "Do you provide consultation services?",
		answer:
			"Yes, our Enterprise plan includes dedicated analyst support and custom research projects. We also offer one-time consultation services for specific needs.",
	},
	{
		question: "How do I access your research?",
		answer:
			"Our research is available through a secure online portal. Depending on your plan, you may also receive email updates, PDF reports, and access to our mobile app.",
	},
	{
		question: "What makes your research different from other providers?",
		answer:
			"Our team combines deep industry expertise with cutting-edge data analytics. We pride ourselves on delivering actionable insights, not just data, and our track record of accurate forecasts speaks for itself.",
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
