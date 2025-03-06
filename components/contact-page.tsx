"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Mail,
	MapPin,
	Phone,
	MessageSquare,
	Clock,
	Building,
} from "lucide-react";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState<{
		success: boolean;
		message: string;
	} | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setStatus(null);

		try {
			await emailjs.send(
				"service_ias3s1o",
				"template_8a1r6ws",
				{
					from_name: `${formData.firstName} ${formData.lastName}`,
					from_email: formData.email,
					subject: formData.subject,
					message: formData.message,
				},
				"7HJDYauZdxSg7FBVe"
			);

			setStatus({ success: true, message: "Message sent successfully!" });
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				subject: "",
				message: "",
			});
		} catch (error) {
			setStatus({
				success: false,
				message: "Failed to send message. Try again.",
			});
		}

		setLoading(false);
	};

	const contactMethods = [
		{
			icon: <Phone className="h-6 w-6" />,
			title: "Phone",
			details: "+2347083458086",
			subDetails: "Monday-Friday 9:00am-6:00pm",
		},
		{
			icon: <Mail className="h-6 w-6" />,
			title: "Email",
			details: "support@benjafamilylabs.com",
			subDetails: "24/7 Support for Enterprise Clients",
		},
		{
			icon: <Building className="h-6 w-6" />,
			title: "Office",
			details: "10 OYEKE CLOSE IGBAGWA ROAD,",
			subDetails: "NSUKKA, ENUGU STATE",
		},
	];

	const faqs = [
		{
			question: "What types of businesses do you typically work with?",
			answer:
				"We primarily work with financial institutions, fintech startups, and enterprise-level businesses looking to integrate blockchain technology or upgrade their financial systems. Our clients range from established banks to innovative cryptocurrency platforms.",
		},
		{
			question: "How do you ensure the security of blockchain applications?",
			answer:
				"Our security approach is multi-layered, including smart contract audits, penetration testing, and compliance with industry standards. We implement best practices in cryptography and regularly update our security protocols to protect against emerging threats.",
		},
		{
			question: "What is your typical project timeline?",
			answer:
				"Project timelines vary based on complexity and requirements. Typically, small to medium projects take 3-6 months, while larger enterprise implementations may take 6-12 months. We provide detailed timelines during initial consultations.",
		},
		{
			question: "Do you offer ongoing support after project completion?",
			answer:
				"Yes, we offer comprehensive post-deployment support packages. This includes maintenance, updates, security monitoring, and technical support. We also provide training for your team to ensure smooth operation of implemented solutions.",
		},
		{
			question: "How do you handle regulatory compliance?",
			answer:
				"We stay current with financial regulations across major jurisdictions. Our solutions are built with compliance in mind, including KYC/AML requirements, data protection laws, and industry-specific regulations. We work closely with compliance experts to ensure all solutions meet regulatory standards.",
		},
		{
			question: "What is your pricing model?",
			answer:
				"Our pricing varies based on project scope and requirements. We offer flexible engagement models including fixed-price projects, time and materials, and retainer-based services. We provide detailed quotes after initial consultations.",
		},
	];

	return (
		<div className="container mx-auto px-4 py-16">
			{/* Header */}
			<div className="text-center mb-12">
				<h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto">
					Have questions about our services? We're here to help. Contact us
					through any of the following channels or fill out the form below.
				</p>
			</div>

			{/* Contact Methods */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
				{contactMethods.map((method, index) => (
					<Card key={index}>
						<CardContent className="flex items-center p-6">
							<div className="rounded-full p-3 bg-orange-500/10 mr-4">
								{React.cloneElement(method.icon, {
									className: "text-orange-500",
								})}
							</div>
							<div>
								<h3 className="font-medium">{method.title}</h3>
								<p className="text-sm text-muted-foreground">
									{method.details}
								</p>
								<p className="text-xs text-muted-foreground">
									{method.subDetails}
								</p>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			<div className="grid md:grid-cols-2 gap-12">
				{/* Contact Form */}
				<Card>
					<CardHeader>
						<CardTitle>Send us a Message</CardTitle>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<label className="text-sm font-medium">First Name</label>
									<Input
										name="firstName"
										value={formData.firstName}
										onChange={handleChange}
										placeholder="John"
									/>
								</div>
								<div className="space-y-2">
									<label className="text-sm font-medium">Last Name</label>
									<Input
										name="lastName"
										value={formData.lastName}
										onChange={handleChange}
										placeholder="Doe"
										required
									/>
								</div>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-medium">Email</label>
								<Input
									name="email"
									type="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="john@example.com"
									required
								/>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-medium">Subject</label>
								<Input
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									required
									placeholder="How can we help?"
								/>
							</div>
							<div className="space-y-2">
								<label className="text-sm font-medium">Message</label>
								<Textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									placeholder="Tell us about your project..."
									className="min-h-[120px]"
								/>
							</div>
							<Button type="submit" className="w-full" disabled={loading}>
								{loading ? "Sending..." : "Send Message"}
							</Button>
						</form>
					</CardContent>
				</Card>

				{/* FAQs */}
				<div>
					<h2 className="text-2xl font-bold mb-6">
						Frequently Asked Questions
					</h2>
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`}>
								<AccordionTrigger className="text-left">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
