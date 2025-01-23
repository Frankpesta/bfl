import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const team = [
	{
		name: "Dr. Jane Smith",
		role: "Chief Economist",
		image: "/placeholder.svg?height=400&width=400",
		bio: "Ph.D. in Economics with over 20 years of experience in financial forecasting and market analysis.",
	},
	{
		name: "John Doe",
		role: "Senior Financial Analyst",
		image: "/placeholder.svg?height=400&width=400",
		bio: "CFA charterholder with expertise in equity research and portfolio management.",
	},
	{
		name: "Emily Chen",
		role: "Data Science Lead",
		image: "/placeholder.svg?height=400&width=400",
		bio: "Ph.D. in Computer Science, specializing in machine learning applications in finance.",
	},
];

export default function TeamSection() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
					Meet Our Expert Team
				</h2>
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
					{team.map((member) => (
						<Card key={member.name} className="overflow-hidden">
							<Image
								className="w-full h-64 object-cover"
								src={member.image || "/placeholder.svg"}
								alt={member.name}
								width={400}
								height={400}
							/>
							<CardHeader>
								<CardTitle>{member.name}</CardTitle>
								<CardDescription>{member.role}</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600">{member.bio}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
