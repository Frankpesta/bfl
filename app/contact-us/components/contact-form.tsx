"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		toast({
			title: "Message sent!",
			description: "We'll get back to you as soon as possible.",
		});

		setIsSubmitting(false);
		// Reset form here if needed
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-8 lg:col-span-2">
			<div className="space-y-4">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div>
						<Label htmlFor="first-name">First name</Label>
						<Input id="first-name" name="first-name" required />
					</div>
					<div>
						<Label htmlFor="last-name">Last name</Label>
						<Input id="last-name" name="last-name" required />
					</div>
				</div>
				<div>
					<Label htmlFor="email">Email</Label>
					<Input id="email" name="email" type="email" required />
				</div>
				<div>
					<Label htmlFor="phone">Phone</Label>
					<Input id="phone" name="phone" type="tel" />
				</div>
				<div>
					<Label htmlFor="subject">Subject</Label>
					<Input id="subject" name="subject" required />
				</div>
				<div>
					<Label htmlFor="message">Message</Label>
					<Textarea id="message" name="message" rows={4} required />
				</div>
			</div>
			<Button type="submit" disabled={isSubmitting}>
				{isSubmitting ? "Sending..." : "Send Message"}
			</Button>
		</form>
	);
}
