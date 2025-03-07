import { Button } from "@/components/ui/button";

export default function AboutHero() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
			<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
				Pioneering Finance Research
			</h1>
			<p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
				We're dedicated to providing cutting-edge financial insights and
				analysis to help you make informed decisions in an ever-changing market.
			</p>
			<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
				<div className="rounded-md shadow">
					<Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
						Our Services
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
