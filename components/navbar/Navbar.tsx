"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { ModeToggle } from "../ToggleTheme";
import { scheduleMeeting } from "@/app/actions/scheduleMeeting";
import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { toast } = useToast();

	async function handleSubmit(formData: FormData) {
		setIsSubmitting(true);
		try {
			// Static/auto-generated values
			formData.append("startTime", getNextAvailableTime());
			formData.append("duration", "30"); // 30 minutes meeting
			formData.append("ownerEmail", "support@benjafamilylabs.com"); // Your email
			formData.append("meetingTitle", "Initial Consultation Call");
			formData.append(
				"description",
				"Discussion about our services and how we can help you."
			);

			const result = await scheduleMeeting(formData);

			if (result.success) {
				toast({
					title: "Scheduled Successfully",
					description: `Check your email for the invitation. Meeting link: ${result.meetingLink}`,
				});
			} else {
				toast({
					title: "Failed to schedule meeting",
					description: "Please try again.",
					variant: "destructive",
				});
			}
		} catch (error) {
			toast({
				title: "An error occurred",
				description: "Please try again.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	function getNextAvailableTime() {
		const now = new Date();
		// Round to next hour
		now.setHours(now.getHours() + 1);
		now.setMinutes(0);
		now.setSeconds(0);
		now.setMilliseconds(0);

		// Only schedule during business hours (9 AM - 5 PM)
		if (now.getHours() < 9) {
			now.setHours(9);
		} else if (now.getHours() >= 17) {
			now.setDate(now.getDate() + 1);
			now.setHours(9);
		}

		// If it's weekend, move to Monday
		if (now.getDay() === 0) {
			// Sunday
			now.setDate(now.getDate() + 1);
		} else if (now.getDay() === 6) {
			// Saturday
			now.setDate(now.getDate() + 2);
		}

		return now.toISOString();
	}

	return (
		<header className="w-full border-b bg-white dark:bg-gray-800">
			<div className="wrapper flex items-center justify-between">
				<Link href={"/"} className="w-36">
					<Image
						src={"/assets/images/logo.png"}
						width={58}
						height={10}
						alt="BFL logo"
					/>
				</Link>

				<nav className="md:flex-between hidden w-full max-w-xs">
					<NavItems />
				</nav>

				<ModeToggle />

				<div className="flex w-32 justify-end items-center  gap-3">
					<MobileNav />

					<Dialog>
						<DialogTrigger asChild>
							<Button
								className="bg-blue-600 text-white hover:bg-blue-700"
								size={"sm"}>
								Book a Call
							</Button>
						</DialogTrigger>

						<DialogContent className="sm:max-w-[425px]">
							<form action={handleSubmit}>
								<DialogHeader>
									<DialogTitle>Schedule a Meeting</DialogTitle>
									<DialogDescription className="py-2">
										Schedule a call with us, and we’ll connect to discuss our
										services in detail. We will arrange a Google Meet session
										and send a calendar invitation. Please make sure to provide
										a valid and active email address.
									</DialogDescription>
								</DialogHeader>
								<div className="grid gap-4 py-4">
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="email" className="text-right">
											Email
										</Label>
										<Input
											id="email"
											name="clientEmail"
											type="email"
											placeholder="your@email.com"
											className="col-span-3"
											required
										/>
									</div>
								</div>
								<DialogFooter>
									<Button
										type="submit"
										size="sm"
										className="bg-blue-600 text-white hover:bg-blue-700"
										disabled={isSubmitting}>
										{isSubmitting ? "Scheduling..." : "Schedule Meeting"}
									</Button>
								</DialogFooter>
							</form>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
