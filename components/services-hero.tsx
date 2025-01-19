import { Button } from "@/components/ui/button";

export default function ServicesHero() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
			<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
				Comprehensive Finance Research Services
			</h1>
			<p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
				Empowering your financial decisions with cutting-edge research, expert
				analysis, and actionable insights.
			</p>
			<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
				<div className="rounded-md shadow">
					<Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
						Get Started
					</Button>
				</div>
				<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
					<Button
						variant="outline"
						className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
						Learn More
					</Button>
				</div>
			</div>
		</section>
	);
}
