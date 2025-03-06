import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	LinkedinIcon,
	TwitterIcon,
	BriefcaseIcon,
	GraduationCapIcon,
} from "lucide-react";

const LeadershipSection = () => {
	return (
		<div className="py-8 container mx-auto px-4">
			<h2 className="text-3xl font-bold text-center mb-12">Leadership</h2>

			<Card className="max-w-full mx-auto overflow-hidden">
				<CardContent className="p-0">
					<div className="grid md:grid-cols-2 gap-6">
						{/* Image Section */}
						<div className="relative h-full">
							<img
								src="/assets/images/wyatt.jpg"
								alt="CEO placeholder"
								className="w-full h-full object-cover"
							/>
							<div className="absolute bottom-4 left-4 flex gap-3">
								<a
									href="http://www.linkedin.com/in/benjaminonwuso-76b655349"
									className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
									<LinkedinIcon className="w-5 h-5" />
								</a>
								<a
									href="https://x.com/Benjami55934529?t=ov4EhOYJc4gehBxLXhjOag&s=09"
									className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
									<TwitterIcon className="w-5 h-5" />
								</a>
							</div>
						</div>

						{/* Content Section */}
						<div className="p-8 space-y-6">
							<div>
								<h3 className="text-2xl font-bold mb-2">
									Onwuso Ifeakachi Benjamin
								</h3>
								<p className="text-orange-500 font-medium">
									Co-Founder & Chief Executive Officer
								</p>
							</div>

							<p className="text-muted-foreground">
								A visionary leader with over 5 years of experience in financial
								technology and blockchain innovation research. Pioneering the
								integration of traditional financial systems with emerging
								technologies.
							</p>

							{/* Education */}
							<div className="space-y-4">
								<div className="flex items-center gap-2">
									<GraduationCapIcon className="text-orange-500 w-5 h-5" />
									<span className="font-semibold">Education</span>
								</div>
								<div className="space-y-3 pl-7">
									<div>
										<p className="font-medium">
											Bachelor of Sciences in Political Science
										</p>
										<p className="text-sm text-muted-foreground">
											University of Nigeria Nsukka
										</p>
									</div>
								</div>
							</div>

							{/* Areas of Expertise */}
							<div>
								<h4 className="font-semibold mb-3">Areas of Expertise</h4>
								<div className="flex flex-wrap gap-2">
									<Badge variant="secondary">
										Blockchain Technology Research
									</Badge>
									<Badge variant="secondary">Financial Markets Research</Badge>
									<Badge variant="secondary">
										Enterprise Architecture Research
									</Badge>
									<Badge variant="secondary">
										Digital Transformation Research
									</Badge>
									<Badge variant="secondary">FinTech Innovation Research</Badge>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default LeadershipSection;
