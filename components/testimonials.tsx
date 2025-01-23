import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "CFO, Tech Innovations Inc.",
		image: "/placeholder.svg?height=400&width=400",
		quote:
			"The insights provided by this finance research team have been instrumental in shaping our investment strategy. Their in-depth analysis and timely recommendations have consistently delivered value.",
	},
	{
		name: "Michael Chen",
		role: "Portfolio Manager, Global Investments LLC",
		image: "/placeholder.svg?height=400&width=400",
		quote:
			"I've worked with many research providers, but none match the depth and quality of analysis I receive here. Their global economic research has been particularly valuable for our international portfolio.",
	},
	{
		name: "Emma Rodriguez",
		role: "Founder, Startup Ventures",
		image: "/placeholder.svg?height=400&width=400",
		quote:
			"As a startup founder, having access to their corporate finance advisory has been a game-changer. Their expertise helped us navigate complex financial decisions with confidence.",
	},
];

export default function Testimonials() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
					What Our Clients Say
				</h2>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					{testimonials.map((testimonial) => (
						<Card
							key={testimonial.name}
							className="flex flex-col justify-between">
							<CardContent className="pt-8">
								<div className="flex items-center mb-4">
									<Image
										className="h-12 w-12 rounded-full"
										src={testimonial.image || "/placeholder.svg"}
										alt={testimonial.name}
										width={48}
										height={48}
									/>
									<div className="ml-4">
										<p className="text-lg font-semibold">{testimonial.name}</p>
										<p className="text-sm text-gray-600">{testimonial.role}</p>
									</div>
								</div>
								<p className="text-gray-600 italic">"{testimonial.quote}"</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
