import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export default function ContactInfo() {
	return (
		<div className="space-y-8">
			<h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
			<div className="space-y-6">
				<div className="flex items-center">
					<MailIcon className="h-6 w-6 text-indigo-600 mr-3" />
					<span>support@benjafamilylabs.com</span>
				</div>
				<div className="flex items-center">
					<PhoneIcon className="h-6 w-6 text-indigo-600 mr-3" />
					<span>+1 (555) 123-4567</span>
				</div>
				<div className="flex items-center">
					<MapPinIcon className="h-6 w-6 text-indigo-600 mr-3" />
					<span>123 Finance Street, New York, NY 10001</span>
				</div>
			</div>
			<div>
				<h3 className="text-lg font-medium text-gray-900 mb-2">Office Hours</h3>
				<p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
				<p>Saturday - Sunday: Closed</p>
			</div>
		</div>
	);
}
